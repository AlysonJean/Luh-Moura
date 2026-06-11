"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    // Check if browser supports View Transitions API
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      document.startViewTransition(() => {
        setTheme(theme === "light" ? "dark" : "light")
      })
    } else {
      setTheme(theme === "light" ? "dark" : "light")
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 transition-all hover:bg-secondary active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/20"
      aria-label="Alternar tema"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary" />
    </button>
  )
}
