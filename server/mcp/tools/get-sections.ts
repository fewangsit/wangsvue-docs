import { z } from 'zod'
import { loadComponentData } from '../../utils/component-loader'

export default defineMcpTool({
  description: `Get all available sections for a Wangsvue component documentation page.

WHEN TO USE: Use this tool when you need to:
- List all available sections/examples for a specific component
- Discover what documentation sections exist before getting specific examples
- See the structure of component documentation

PARAMETERS:
- component: The component name (e.g., "button", "icon")

RETURNS: JSON array of sections with id and description for the specified component.

EXAMPLES:
- Get button sections: component="button"
- Get icon sections: component="icon"

WORKFLOW: Use this after list_components to see available sections, then use get_example with specific section IDs for section with 'hasExample=true' to find the code example.`,

  inputSchema: {
    component: z.string().describe('The component name (e.g., "button", "icon")')
  },

  cache: '10m',

  handler: async ({ component: name }) => {
    try {
      const components = await loadComponentData()

      // Find the component
      const component = components.find(c => c.name.toLowerCase() === name.toLowerCase())
      if (!component) {
        return {
          content: [{
            type: 'text',
            text: `Component "${component}" not found. Available components: ${components.map(c => c.name).join(', ')}`
          }],
          isError: true
        }
      }

      // Return sections with id and description only
      const sections = component.sections.map(section => ({
        id: section.id,
        description: section.description,
        hasExample: section.hasExample
      }))

      return {
        content: [{
          type: 'text',
          text: JSON.stringify(sections, null, 2)
        }]
      }
    } catch (error) {
      return {
        content: [{
          type: 'text',
          text: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`
        }],
        isError: true
      }
    }
  }
})
