"use client"

import { useEffect, useState } from "react"

export interface TerminalLine {
  text: string
  className?: string
}

interface TerminalTextProps {
  lines: TerminalLine[]
  speed?: number
  lineDelay?: number
  className?: string
}

export function TerminalText({ lines, speed = 35, lineDelay = 400, className }: TerminalTextProps) {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (lineIndex >= lines.length) return

    const currentLine = lines[lineIndex]

    if (charIndex < currentLine.text.length) {
      const timeout = setTimeout(() => setCharIndex((c) => c + 1), speed)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setLineIndex((l) => l + 1)
      setCharIndex(0)
    }, lineDelay)
    return () => clearTimeout(timeout)
  }, [charIndex, lineIndex, lines, speed, lineDelay])

  const isDone = lineIndex >= lines.length

  return (
    <div className={className}>
      {lines.slice(0, lineIndex).map((line, i) => (
        <div key={i} className={line.className}>
          {line.text}
        </div>
      ))}
      {!isDone && (
        <div className={lines[lineIndex].className}>
          {lines[lineIndex].text.slice(0, charIndex)}
          <span className="animate-pulse text-brand">_</span>
        </div>
      )}
      {isDone && <span className="animate-pulse text-brand">_</span>}
    </div>
  )
}
