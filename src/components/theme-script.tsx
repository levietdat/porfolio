"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export function ThemeScript() {
  const { setTheme } = useTheme()

  useEffect(() => {
    // Check for user preference in localStorage
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Check for system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
    }
    // Only run once on mount
  }, []) // Empty dependency array to run only once

  return null
}

