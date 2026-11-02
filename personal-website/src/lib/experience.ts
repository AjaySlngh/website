import type { IconType } from "react-icons"

export interface Experience {
  slug: string
  company: string
  role: string
  period: string
  description: string
  href: string
  icon?: IconType
  image?: string
}

export const experiences: Experience[] = [
  {
    slug: "migalabs",
    company: "MigaLabs",
    role: "Software Engineering Intern",
    period: "June 2026 - August 2026",
    description: "Learned about full stack software engineering.",
    href: "https://migalabs.io",
    image: "/migalabs-logo-light.png",
  },
]
