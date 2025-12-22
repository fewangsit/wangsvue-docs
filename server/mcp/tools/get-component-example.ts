import { z } from 'zod'
import { loadComponentData } from '../utils/component-loader'

export default defineMcpTool({
  description: `Get a specific example for a Wangsvue component.

WHEN TO USE: Use this tool when you need to:
- Get the Vue source code for a specific component example
- See how to implement a particular component variant
- Copy example code for implementation

PARAMETERS:
- component_name: The component name (e.g., "button", "icon")
- example_id: The example ID (e.g., "basic", "severity", "icon")

RETURNS: The complete Vue source code for the requested example, including template and script sections.

EXAMPLES:
- Get basic button example: component_name="button", example_id="basic"`,

  inputSchema: {
    component_name: z.string().describe('The component name (e.g., "button", "icon")'),
    example_id: z.string().describe('The example ID (e.g., "basic", "severity", "icon")')
  },

  // cache: '10m',

  handler: async ({ component_name, example_id }) => {
    try {
      const components = await loadComponentData()

      // Find the component
      const component = components.find(c => c.name.toLowerCase() === component_name.toLowerCase())
      if (!component) {
        return {
          content: [{
            type: 'text',
            text: `Component "${component_name}" not found. Available components: ${components.map(c => c.name).join(', ')}`
          }],
          isError: true
        }
      }

      // Find the example
      const example = component.sections.find(s => s.id.toLowerCase() === example_id.toLowerCase())
      if (!example) {
        return {
          content: [{
            type: 'text',
            text: `Example "${example_id}" not found for component "${component_name}". Available examples: ${component.sections.filter(it => it.hasExample).map(s => s.id).join(', ')}`
          }],
          isError: true
        }
      }

      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            component: component.name,
            example_id: example_id,
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
