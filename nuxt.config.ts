// https://nuxt.com/docs/api/configuration/nuxt-config

// Helper function to generate component data
async function generateComponentData(nitro?: { options: { output: { serverDir: string } } }) {
  console.log('🚀 Generating unified component data and sources...')

  try {
    const { default: generate } = await import('./scripts/generate-unified-data.mjs')
    const components = await generate()

    const { mkdir, writeFile } = await import('fs/promises')
    const { join } = await import('path')

    // Determine target directory based on environment
    let targetDir: string
    let targetPath: string

    if (nitro) {
      // Build time - use nitro output directory
      targetDir = join(nitro.options.output.serverDir, 'data')
      targetPath = join(targetDir, 'components.json')
    } else {
      // Development time - use server directory
      targetDir = 'server/data'
      targetPath = join(targetDir, 'components.json')
    }

    await mkdir(targetDir, { recursive: true })
    await writeFile(targetPath, JSON.stringify(components, null, 2))

    console.log('✅ MCP data generated to:', targetPath)
    console.log(`📦 Generated data for ${components.length} components`)
  } catch (error) {
    console.warn('⚠️ Failed to generate MCP data:', error)
  }
}

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    '@nuxtjs/mcp-toolkit',
    '@vueuse/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: [
    '~/assets/css/main.css',
    '@fewangsit/wangsvue/style.css',
    '@fewangsit/wangsvue-presets/wangsvue/style.css'
  ],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  experimental: {
    asyncContext: true
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },

  hooks: {
    // Run during development server startup
    'ready': async () => {
      if (process.env.NODE_ENV === 'development') {
        await generateComponentData()

        // Set up file watching for automatic regeneration
        const chokidar = await import('chokidar').catch(() => null)
        if (chokidar) {
          const watcher = chokidar.default.watch([
            'content/4.components/**/*.md',
            'app/components/docs/**/*.vue'
          ], {
            ignoreInitial: true,
            persistent: true
          })

          watcher.on('change', async (path) => {
            console.log(`📝 Component file changed: ${path}`)
            await generateComponentData()
          })

          watcher.on('add', async (path) => {
            console.log(`➕ Component file added: ${path}`)
            await generateComponentData()
          })

          watcher.on('unlink', async (path) => {
            console.log(`🗑️ Component file removed: ${path}`)
            await generateComponentData()
          })

          console.log('👀 Watching component files for changes...')
        } else {
          console.warn('⚠️ chokidar not available - file watching disabled')
        }
      }
    },

    // Run during build
    'nitro:build:public-assets': async (nitro) => {
      await generateComponentData(nitro)
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  llms: {
    domain: 'https://docs-template.nuxt.dev/',
    title: 'Nuxt Docs Template',
    description: 'A template for building documentation with Nuxt UI and Nuxt Content.',
    full: {
      title: 'Nuxt Docs Template - Full Documentation',
      description: 'This is the full documentation for the Nuxt Docs Template.'
    },
    sections: [
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' }
        ]
      },
      {
        title: 'Essentials',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/essentials%' }
        ]
      }
    ]
  },

  mcp: {
    name: 'Wangsvue Docs'
  }
})
