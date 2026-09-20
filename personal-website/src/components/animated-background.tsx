"use client"

import { useEffect, useRef } from "react"

const CHARS = "01{}[]<>/\\;:=+-*$#_".split("")
const FONT_SIZE = 16
const FRAME_MS = 60

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const rootStyle = getComputedStyle(document.documentElement)
    const brand = rootStyle.getPropertyValue("--brand").trim()
    const background = rootStyle.getPropertyValue("--background").trim()

    let columns = 0
    let drops: number[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      columns = Math.floor(canvas.width / FONT_SIZE)
      drops = Array.from({ length: columns }, () => Math.random() * -50)
    }
    resize()
    window.addEventListener("resize", resize)

    ctx.font = `${FONT_SIZE}px ui-monospace, monospace`

    const interval = setInterval(() => {
      ctx.fillStyle = `hsl(${background} / 0.15)`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = `hsl(${brand} / 0.45)`
      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = i * FONT_SIZE
        ctx.fillText(char, x, y * FONT_SIZE)

        if (y * FONT_SIZE > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i] += 1
      })
    }, FRAME_MS)

    return () => {
      window.removeEventListener("resize", resize)
      clearInterval(interval)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  )
}
