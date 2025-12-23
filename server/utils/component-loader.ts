import type { ComponentData } from '../mcp/types/component'

let loadedComponents: ComponentData[]

/**
 * Loads component data from the JSON file
 * @returns Promise<ComponentData[]> Array of component data
 * @throws Error if file cannot be read or parsed
 */
export async function loadComponentData(): Promise<ComponentData[]> {
  try {
    if (loadedComponents) return loadedComponents
    const { readFile } = await import('fs/promises')
    const { join } = await import('path')

    const possiblePaths = [
      // Development path
      join(process.cwd(), 'server/data/components.json'),
      // Production build path (Nitro output)
      join(process.cwd(), '.output/server/data/components.json')
    ]

    let data: string

    for (const path of possiblePaths) {
      try {
        data = await readFile(path, 'utf-8')
        break
      } catch {
        // Continue to next path
        continue
      }
    }

    if (!data!) {
      throw new Error('Component data file not found in any expected location')
    }

    loadedComponents = JSON.parse(data)
    return loadedComponents
  } catch (error) {
    throw new Error(`Failed to load component data: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}
