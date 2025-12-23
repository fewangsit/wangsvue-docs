export default defineNuxtPlugin(() => {
  // Auto-highlight all code blocks on page load and navigation
  const { highlightAll } = useSyntaxHighlight()

  // Highlight on initial load
  onMounted(() => {
    nextTick(() => {
      highlightAll()
    })
  })

  // Highlight on route changes (for SPA navigation)
  const router = useRouter()
  router.afterEach(() => {
    nextTick(() => {
      highlightAll()
    })
  })
})
