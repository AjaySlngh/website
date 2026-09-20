import type { IconType } from "react-icons"
import { FaCode, FaCamera, FaDice } from "react-icons/fa"

export interface Project {
  slug: string
  title: string
  description: string
  href: string
  icon?: IconType
  image?: string
}

export const projects: Project[] = [
  {
    slug: "bits-n-bytes",
    title: "bits-n-bytes/",
    description: "An AI-powered smart cabinet for seamless, contactless shopping.",
    href: "http://bitsnbytes.cs.house",
    image: "https://bitsnbytes.cs.house/assets/BnBLogo-_0Q8eAzs.svg",
  },
  {
    slug: "noteai",
    title: "noteai/",
    description: "An intelligent note-taking app that organizes, summarizes, and enhances your notes using AI-powered insights.",
    href: "http://noteai.cs.house",
    icon: FaCode,
  },
  {
    slug: "flicks",
    title: "flicks/",
    description: "My very first react project, a place to store my photography.",
    href: "http://flicks.cs.house",
    icon: FaCamera,
  },
  {
    slug: "precon-league",
    title: "precon-league/",
    description: "A website made with my friends to host our card game league for Magic: The Gathering.",
    href: "http://preconleague.cs.house",
    icon: FaDice,
  },
]
