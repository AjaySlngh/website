"use client"

import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Card } from "@/components/ui/card"

const About: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const skills = ["React/Next.js", "TypeScript", "Node.js", "Python", "SQL", "Java", "C/C++", "Docker"]

  return (
    <div className="min-h-screen bg-background relative z-10">
      <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-bold">
            Ajay Singh
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/education" className="text-sm hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="/projects" className="text-sm hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/resume" className="text-sm hover:text-primary transition-colors">
              Resume
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="https://github.com/AjaySlngh" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com/in/ajay-singh-449265286" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 relative z-20">
        <motion.div initial="initial" animate="animate" variants={fadeIn} className="space-y-16">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <motion.h1 className="text-4xl font-bold sm:text-5xl" variants={fadeIn}>
              Hello, I'm Ajay Singh
            </motion.h1>
          </section>

          {/* Skills Section */}
          <motion.section className="space-y-6" variants={fadeIn}>
            <h2 className="text-2xl font-semibold text-center">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <Card key={skill} className="p-4 text-center hover:border-primary transition-colors">
                  {skill}
                </Card>
              ))}
            </div>
          </motion.section>

          {/* About Me Section */}
          <motion.section className="space-y-6 max-w-3xl mx-auto" variants={fadeIn}>
            <h2 className="text-2xl font-semibold text-center">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a software engineer with a strong foundation in full-stack development. My journey in technology
                began with a curiosity about how things work, which evolved into a passion for creating elegant
                solutions to complex problems.
              </p>
              <p>
                Beyond coding, I'm actively involved in my university's calisthenics club and intramural soccer. 
                I'm always eager to collaborate on new projects, whether it's in embedded systems, AI, or full-stack development. 
                If you're working on something exciting—let's connect!
              </p>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section className="space-y-6 text-center pb-16" variants={fadeIn}>
            <h2 className="text-2xl font-semibold">Let's Connect</h2>
            <div className="flex justify-center gap-6">
              <Link href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                <FaEnvelope className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/AjaySlngh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/ajay-singh-449265286"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </Link>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
}

export default About

/**
 * 
  <li>GCIS-123: Software Development and Problem Solving I</li>
  <li>GCIS-124: Software Development and Problem Solving II</li>
  <li>SWEN-250: Personal Software Engineering</li>
  <li>SWEN-261: Intro To Software Engineering</li>
  <li>SWEN-344: Web Engineering</li>
  <li>SWEN-262: Engineering of Software Subsystems</li>
  <li>SWEN-256: Software Process and Software Management</li>
 */