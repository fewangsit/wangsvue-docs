export interface ComponentSection {
  id: string
  label: string
  description: string
  example: string
  hasExample: boolean
  examplePath: string | null
}

export interface ComponentData {
  name: string
  title: string
  description: string
  sections: ComponentSection[]
}
