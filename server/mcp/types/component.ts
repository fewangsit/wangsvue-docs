export interface ComponentSection {
  id: string
  label: string
  description: string
  example: string
  hasExample: boolean
}

export interface ComponentData {
  name: string
  title: string
  description: string
  sections: ComponentSection[]
}
