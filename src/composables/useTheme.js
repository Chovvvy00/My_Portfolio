import { onMounted, ref, watch } from 'vue'

const applyTheme = (value) => {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-theme', value)
}

export function useTheme() {
  const theme = ref('light')

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    theme.value =
      savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : prefersDark ? 'dark' : 'light'

    applyTheme(theme.value)
  })

  watch(theme, (value) => {
    applyTheme(value)
    localStorage.setItem('theme', value)
  })

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggleTheme }
}
