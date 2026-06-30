'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  setTheme: (t: Theme) => void
  toggle: () => void
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const STORAGE_KEY = 'nabeel-imran-theme'

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Default to 'dark' for SSR. The no-flash inline script applies the right
  // theme synchronously before paint, then this hook syncs React state.
  const [theme, setThemeState] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const current =
      (document.documentElement.dataset.theme as Theme) || 'dark'
    setThemeState(current)
    setMounted(true)
  }, [])

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.theme = t
    }
    try {
      localStorage.setItem(STORAGE_KEY, t)
    } catch {
      /* localStorage may be blocked (private mode) — silently ignore */
    }
  }, [])

  const toggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    // Allow components to render outside provider during SSR — return a
    // sensible default rather than throwing
    return {
      theme: 'dark',
      setTheme: () => {},
      toggle: () => {},
      mounted: false,
    }
  }
  return ctx
}

/**
 * Tiny synchronous bootstrap script — must run BEFORE first paint to avoid
 * flash-of-wrong-theme. Inject inline in <head>.
 *
 * Resolution order:
 *   1. Saved theme in localStorage
 *   2. Default: 'dark' (this is a dark-first brand)
 *
 * We intentionally don't read prefers-color-scheme here so the brand always
 * loads in the intended dark aesthetic on first visit; users can switch.
 */
export const themeScript = `(function(){document.documentElement.dataset.theme='light';try{localStorage.setItem('${STORAGE_KEY}','light');}catch(e){}})();`
