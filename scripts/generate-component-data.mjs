#!/usr/bin/env node

import { readFile, readdir, writeFile } from 'fs/promises'
import { join, basename } from 'path'
import matter from 'gray-matter'

async function generateComponentData() {
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
        // Read the corresponding Vue example file
        const examplePath = join(docsDir, componentName, `${section.id}.vue`)
        let exampleCode = ''

        try {
          exampleCode = await readFile(examplePath, 'utf-8')
          console.log(`    ✓ Found example: ${examplePath}`)
        } catch {
          console.warn(`    ✗ Example file not found: ${examplePath}`)
          exampleCode = `<!-- Example file not found: ${examplePath} -->`
        }

        return {
          ...section,
          example: exampleCode
        }
      }))

      components.push(componentData)
    }

    return components
  } catch (error) {
    console.error('Error generating component data:', error)
    throw error
  }
}

function parseMarkdownSections(content) {
  const sections = []

  // Split content by ### headers (section headers)
  const sectionRegex = /### ([^\n]+)\n([^#]*?)(?=###|$)/g
  let match

  while ((match = sectionRegex.exec(content)) !== null) {
    const [, title, sectionContent] = match

    // Extract description (text before ::component-demo)
    const descriptionMatch = sectionContent.match(/^([^:]*?)(?=::component-demo|$)/s)
    const description = descriptionMatch ? descriptionMatch[1].trim() : ''

    // Extract component demo source
    const demoMatch = sectionContent.match(/::component-demo\{src="([^"]+)"\}/g)
    if (demoMatch) {
      // Extract the source path from the first demo
      const srcMatch = demoMatch[0].match(/src="([^"]+)"/)
      if (srcMatch) {
        const srcPath = srcMatch[1]
        // Extract the example name (last part after /)
        const exampleName = srcPath.split('/').pop() || title

        sections.push({
          id: exampleName.toLowerCase(),
          label: title,
          description: description
        })
      }
    }
  }

  return sections
}

async function main() {
  try {
    console.log('🚀 Generating component data...')
    const components = await generateComponentData()

    // Write to JSON file
    const outputPath = 'component-data.json'
    await writeFile(outputPath, JSON.stringify(components, null, 2))

    console.log(`✅ Generated component data for ${components.length} components`)
    console.log(`📄 Output saved to: ${outputPath}`)

    // Print summary
    components.forEach((component) => {
      console.log(`\n📦 ${component.title} (${component.name})`)
      console.log(`   ${component.description}`)
      console.log(`   Sections: ${component.sections.length}`)
      component.sections.forEach((section) => {
        console.log(`   - ${section.label}: ${section.description.substring(0, 50)}...`)
      })
    })
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

main()
