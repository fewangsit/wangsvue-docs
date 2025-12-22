import { createHighlighter, type Highlighter } from 'shiki'

let highlighter: Highlighter | null = null

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { code, lang = 'vue' } = body

  if (!code) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing code parameter'
    })
  }

  try {
    // Initialize highlighter if not already done
    if (!highlighter) {
      highlighter = await createHighlighter({
        themes: ['github-light', 'github-dark'],
        langs: ['vue']
      })
    }

    // Generate highlighted HTML
    const html = await highlighter.codeToHtml(code, {
      lang,
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      }
    })

    return {
      html,
      lang
    }
  } catch (error) {
    console.error('Failed to highlight code:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to highlight code'
    })
  }
})
