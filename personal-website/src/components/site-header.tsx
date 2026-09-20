"use client"

import { useState } from "react"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const navLinks = [
  { href: "/education", label: "~/education" },
  { href: "/projects", label: "~/projects" },
  { href: "/contact", label: "~/contact" },
  { href: "/resume", label: "~/resume" },
  { href: "/about", label: "~/about" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-mono text-lg font-bold" onClick={() => setOpen(false)}>
          ajay<span className="text-brand">@</span>singh
          <span className="ml-0.5 animate-pulse text-brand">_</span>
        </Link>
        <nav className="hidden md:flex gap-6 font-mono text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/AjaySlngh" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">
            <FaGithub className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com/in/ajay-singh-449265286" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">
            <FaLinkedin className="h-5 w-5" />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-muted-foreground transition-colors hover:text-brand md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b bg-background/95 font-mono text-sm backdrop-blur-sm md:hidden"
          >
            <div className="container mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-muted-foreground transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
