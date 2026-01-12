/* eslint-disable camelcase */
import { z } from 'zod';

import { loadComponentData } from '../../utils/component-loader';

export default defineMcpTool({
  description: `List all available examples for a specific Wangsvue component.

WHEN TO USE: Use this tool when you need to:
- Get a complete list of all examples available for a component
- See the total count of examples for a component
- Get section IDs, labels, and descriptions for all examples

PARAMETERS:
- component_name: The component name (e.g., "button", "icon")

RETURNS: JSON object with:
- total: Number of examples available
- component: The component name
- examples: Array of example objects with section, label, and description

EXAMPLES:
- List button examples: component_name="button"
- List icon examples: component_name="icon"

WORKFLOW: Use this to discover all available examples, then use get_example with specific section IDs to get the actual code.`,

  inputSchema: {
    component_name: z
      .string()
      .describe('The component name (e.g., "button", "icon")'),
  },

  cache: '10m',

  handler: async ({ component_name }) => {
    try {
      const components = await loadComponentData();

      // Find the component
      const component = components.find(
        (c) => c.name.toLowerCase() === component_name.toLowerCase(),
      );
      if (!component) {
        return {
          content: [
            {
              type: 'text',
              text: `Component "${component_name}" not found. Available components: ${components.map((c) => c.name).join(', ')}`,
            },
          ],
          isError: true,
        };
      }

      // Filter sections that have examples
      const examples = component.sections
        .filter((section) => section.hasExample)
        .map((section) => ({
          section: section.id,
          label: section.label,
          description: section.description,
        }));

      const result = {
        total: examples.length,
        component: component.name,
        examples: examples,
      };

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
          },
        ],
        isError: true,
      };
    }
  },
});
