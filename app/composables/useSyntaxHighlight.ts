import Prism from 'prismjs'

// Import language components
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-yaml'

// Language mapping for common aliases
const languageMap: Record<string, string> = {
  vue: 'markup',
  html: 'markup',
  ts: 'typescript',
  json: 'json',
  css: 'css',
  shell: 'bash',
  sh: 'bash',
  yml: 'yaml'
}

export const useSyntaxHighlight = () => {
  const highlightCode = (code: string, language: string = 'javascript'): string => {
    if (!code) return ''

    // Map language to Prism language
    const prismLang = languageMap[language] || language

    // Check if language is supported
    if (!Prism.languages[prismLang]) {
      // Fallback to plain text if language not supported
      return escapeHtml(code)
    }

    try {
      // Generate highlighted HTML
      return Prism.highlight(code, Prism.languages[prismLang], prismLang)
    } catch (error) {
      console.warn(`Failed to highlight code with language "${language}":`, error)
      // Fallback to plain text on error
      return escapeHtml(code)
    }
  }

  const highlightElement = (element: HTMLElement) => {
    Prism.highlightElement(element)
  }

  const highlightAll = () => {
    Prism.highlightAll()
  }

  return {
    highlightCode,
    highlightElement,
    highlightAll
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;'
  }
  return text.replace(/[&<>"']/g, m => map[m])
}
