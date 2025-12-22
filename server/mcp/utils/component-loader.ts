import type { ComponentData } from '../types/component'

/**
 * Loads component data from the JSON file
 * @returns Promise<ComponentData[]> Array of component data
 * @throws Error if file cannot be read or parsed
 */
export async function loadComponentData(): Promise<ComponentData[]> {
  try {
    // In production, use Nitro's server assets
    if (process.env.NODE_ENV === 'production') {
      const data = await useStorage('assets:mcp').getItem('components.json')
      if (data) {
        return typeof data === 'string' ? JSON.parse(data) : data
      }
    }

    // Fallback to file system for development
    const { readFile } = await import('fs/promises')
    const { join } = await import('path')

    const possiblePaths = [
      // Development path
      join(process.cwd(), 'server/mcp/data/components.json'),
      // Production build path (Nitro output)
      join(process.cwd(), '.output/server/mcp/data/components.json')
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

    return JSON.parse(data)
  } catch (error) {
    throw new Error(`Failed to load component data: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}
