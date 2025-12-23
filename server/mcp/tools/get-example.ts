import { z } from 'zod'
import { loadComponentData } from '../../utils/component-loader'

export default defineMcpTool({
  description: `Get a specific example for a Wangsvue component.

WHEN TO USE: Use this tool when you need to:
- Get the Vue source code for a specific component example
- See how to implement a particular component variant
- Copy example code for implementation

PARAMETERS:
- component: The component name (e.g., "button", "icon")
- section: The section id (e.g., "basic", "severity", "icon")

RETURNS: The complete Vue source code for the requested example, including template and script sections.

EXAMPLES:
- Get basic button example: component="button", section="basic"`,

  inputSchema: {
    component: z.string().describe('The component name (e.g., "button", "icon")'),
    section: z.string().describe('The section id (e.g., "basic", "severity", "icon")')
  },

  // cache: '10m',

  handler: async ({ component: name, section }) => {
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

      // Find the example
      const example = component.sections.find(s => s.id.toLowerCase() === section.toLowerCase())
      if (!example) {
        return {
          content: [{
            type: 'text',
            text: `Example "${section}" not found for component "${component}". Available examples: ${component.sections.filter(it => it.hasExample).map(s => s.id).join(', ')}`
          }],
          isError: true
        }
      }

      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            component: component.name,
            section: section,
            example: example.example
          })
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
