#!/usr/bin/env node

import { readFile, readdir, writeFile, mkdir } from 'fs/promises'
import { join, basename } from 'path'
import matter from 'gray-matter'

export default async function generateUnifiedData() {
  const componentsDir = 'content/4.components'
  const docsDir = 'app/components/docs'

  try {
    // Read all component markdown files
    const files = await readdir(componentsDir)
    const componentFiles = files.filter(file => file.endsWith('.md') && !file.startsWith('.'))

    console.log(`Found ${componentFiles.length} component files:`, componentFiles)

    const components = []

    for (const file of componentFiles) {
      const filePath = join(componentsDir, file)
      const content = await readFile(filePath, 'utf-8')

      // Parse frontmatter and content
      const { data: frontmatter, content: markdownContent } = matter(content)

      // Extract component name from filename (remove number prefix and .md)
      const componentName = basename(file, '.md').replace(/^\d+\./, '')

      console.log(`Processing component: ${componentName}`)

      const componentData = {
        name: componentName,
        title: frontmatter.title || componentName,
        description: frontmatter.description || '',
        sections: []
      }

      // Parse sections from markdown content
      const sections = parseMarkdownSections(markdownContent, componentName)
      console.log(`  Found ${sections.length} sections:`, sections.map(s => s.id))

      componentData.sections = await Promise.all(sections.map(async (section) => {
        if (!section.hasExample) {
          // Special sections don't need example files
          return {
            id: section.id,
            label: section.label,
            description: section.description,
            example: '',
            hasExample: false
          }
        }

        // For demo sections, we need to find the example file using the demo path
        // Extract the example file name from the demo path
        let exampleFileName = section.id // default to section id

        // Re-parse the section content to get the demo path
        const demoMatch = section.originalContent?.match(/::component-demo\{src="([^"]+)"\}/g)
        if (demoMatch) {
          const srcMatch = demoMatch[0].match(/src="([^"]+)"/)
          if (srcMatch) {
            const srcPath = srcMatch[1]
            exampleFileName = srcPath.split('/').pop() || section.id
          }
        }

        const examplePath = join(docsDir, componentName, `${exampleFileName}.vue`)
        let exampleCode = ''

        try {
          exampleCode = await readFile(examplePath, 'utf-8')
          console.log(`    ✓ Found example: ${examplePath}`)
        } catch {
          console.warn(`    ✗ Example file not found: ${examplePath}`)
          exampleCode = `<!-- Example file not found: ${examplePath} -->`
        }

        return {
          id: section.id,
          label: section.label,
          description: section.description,
          example: exampleCode,
          hasExample: true
        }
      }))

      components.push(componentData)
    }

    return components
  } catch (error) {
    console.error('Error generating unified data:', error)
    throw error
  }
}

function parseMarkdownSections(content) {
  const sections = []

  // Split content by ## headers (section headers) - include subsections with ###
  const sectionRegex = /## ([^\n]+)\n((?:(?!##)[\s\S])*?)(?=##|$)/g
  let match

  while ((match = sectionRegex.exec(content)) !== null) {
    const [, title, sectionContent] = match

    // Extract description (text before ::component-demo)
    const descriptionMatch = sectionContent.match(/^([^:]*?)(?=::component-demo|$)/s)
    const description = descriptionMatch ? descriptionMatch[1].trim() : ''

    // Extract component demo source
    const demoMatch = sectionContent.match(/::component-demo\{src="([^"]+)"\}/g)
    const hasExample = !!demoMatch

    // Always use title for section ID (kebab-case)
    const sectionId = title.toLowerCase().replace(/\s+/g, '-')

    sections.push({
      id: sectionId,
      label: title,
      description: description,
      content: hasExample ? undefined : sectionContent.trim(),
      originalContent: hasExample ? sectionContent : undefined, // Store original for demo path lookup
      hasExample: hasExample
    })
  }

  return sections
}

async function main() {
  try {
    console.log('🚀 Generating unified component data...')
    const components = await generateUnifiedData()

    // Ensure the directory exists
    const outputDir = 'server/data'
    await mkdir(outputDir, { recursive: true })

    // Also keep the JSON file for reference
    const jsonPath = join(outputDir, 'components.json')
    await writeFile(jsonPath, JSON.stringify(components))

    console.log(`✅ Generated unified data for ${components.length} components`)
    console.log(`📄 Components JSON: ${jsonPath}`)

    // Count total examples
    const totalExamples = components.reduce((count, component) => {
      return count + component.sections.filter(section => section.hasExample).length
    }, 0)
    console.log(`📄 Included ${totalExamples} component examples with source code`)

    // Print summary
    components.forEach((component) => {
      console.log(`\n📦 ${component.title} (${component.name})`)
      console.log(`   ${component.description}`)
      console.log(`   Sections: ${component.sections.length}`)
      component.sections.forEach((section) => {
        const hasCode = section.hasExample ? ' (with code)' : ''
        console.log(`   - ${section.label}: ${section.description.substring(0, 50)}...${hasCode}`)
      })
    })
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
