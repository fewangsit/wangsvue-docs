import { readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const src = query.src as string

  if (!src) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing src parameter'
    })
  }

  // Validate src to prevent path traversal
  if (
    src.includes('..')
    || src.includes('../')
    || !src.match(/^[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+$/)
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid src parameter'
    })
  }

  try {
    const filePath = join(process.cwd(), 'app/components/docs', `${src}.vue`)
    const content = await readFile(filePath, 'utf-8')

    return {
      sourceCode: content,
      path: `${src}.vue`
    }
  } catch {
    throw createError({
      statusCode: 404,
      statusMessage: 'Component source not found'
    })
  }
})
