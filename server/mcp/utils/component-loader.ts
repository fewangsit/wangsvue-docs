import { readFile } from 'fs/promises'
import { join } from 'path'
import type { ComponentData } from '../types/component'

/**
 * Loads component data from the JSON file
 * @returns Promise<ComponentData[]> Array of component data
 * @throws Error if file cannot be read or parsed
 */
export async function loadComponentData(): Promise<ComponentData[]> {
  try {
    const filePath = join(process.cwd(), 'server/mcp/data/components.json')
    const data = await readFile(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    throw new Error(`Failed to load component data: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}
