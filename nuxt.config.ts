// https://nuxt.com/docs/api/configuration/nuxt-config
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
    '~/assets/css/main.css'
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
    'nitro:build:public-assets': async (nitro) => {
      // Generate unified component data and sources before build
      console.log('🚀 Generating unified component data and sources...')
      const { default: generate } = await import ('./scripts/generate-unified-data.mjs')
      const components = await generate()

      const { mkdir, writeFile } = await import('fs/promises')
      const { join } = await import('path')

      try {
        const targetDir = join(nitro.options.output.serverDir, 'data')
        const targetPath = join(targetDir, 'components.json')

        await mkdir(targetDir, { recursive: true })
        await writeFile(targetPath, JSON.stringify(components))

        console.log('✅ MCP data generate to: ', targetPath)
      } catch (error) {
        console.warn('⚠️ Failed to copy MCP data:', error)
      }
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
