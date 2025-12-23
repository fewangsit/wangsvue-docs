import { loadComponentData } from '../utils/component-loader'

const componentSourceMap = new Map<string, string>()

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
    if (componentSourceMap.has(src)) return {
      sourceCode: componentSourceMap.get(src),
      path: `${src}.vue`
    }

    let sourceCode = ''
    const components = await loadComponentData()
    // const filePath = join(process.cwd(), 'app/components/docs', `${src}.vue`)
    // const sourceCode = await readFile(filePath, 'utf-8')

    if (components?.length) {
      const [component] = src.split('/')
      const match = components.find(it => it.name == component)

      if (match) {
        sourceCode
          = match.sections.find(it => it.examplePath == src)?.example ?? ''
      }

      sourceCode
        ||= components
          .flatMap(it => it.sections)
          .find(it => it.examplePath == src)?.example ?? ''

      if (sourceCode) {
        componentSourceMap.set(src, sourceCode)
      }
    }

    return {
      sourceCode: sourceCode,
      path: `${src}.vue`
    }
  } catch {
    throw createError({
      statusCode: 404,
      statusMessage: 'Component source not found'
    })
  }
})
