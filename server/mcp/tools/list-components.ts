import { readFile } from 'fs/promises'

interface ComponentSection {
  id: string
  label: string
  description: string
  example: string
}

interface ComponentData {
  name: string
  title: string
  description: string
  sections: ComponentSection[]
}

async function loadComponentData(): Promise<ComponentData[]> {
  try {
    const data = await readFile('component-data.json', 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    throw new Error(`Failed to load component data: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

export default defineMcpTool({
  description: `List all available Wangsvue component IDs.

WHEN TO USE: Use this tool when you need to:
- Discover what components are available
- Get a simple list of component identifiers
- Find components for use with get_component_example

RETURNS: Simple array of component IDs (e.g., ["button", "icon"])

WORKFLOW: After using this tool to find components, use get_component_sections with the component ID to list of sections in the documentation page. You will find section id to find the example code.`,

  cache: '10m',

  handler: async () => {
    try {
      const components = await loadComponentData()
      const componentIds = components.map(c => c.name)

      return {
        content: [{
          type: 'text',
          text: JSON.stringify(componentIds)
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
