"use client"

import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { SiteHeader } from "@/components/site-header"

const About: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const skills = ["React/Next.js", "TypeScript", "Node.js", "Python", "SQL", "Java", "C/C++", "Docker"]

  return (
    <div className="min-h-screen relative z-10">
      <SiteHeader />
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 relative z-20">
        <motion.div initial="initial" animate="animate" variants={fadeIn} className="space-y-16">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <motion.h1 className="font-mono text-4xl font-bold sm:text-5xl" variants={fadeIn}>
              <span className="text-brand">$</span> whoami
              <br />
              Hey There, I&apos;m Ajay!
            </motion.h1>
          </section>

          {/* Skills Section */}
          <motion.section className="space-y-6" variants={fadeIn}>
            <h2 className="font-mono text-2xl font-semibold text-center">
              <span className="text-brand">{"//"}</span> Technical Skills
            </h2>
            <div className="mx-auto max-w-3xl rounded-lg border bg-card p-6 font-mono text-sm sm:text-base">
              <div className="text-muted-foreground">const skills = [</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 pl-6 sm:grid-cols-3">
                {skills.map((skill) => (
                  <div key={skill}>
                    <span className="text-foreground">&quot;{skill}&quot;</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                ))}
              </div>
              <div className="text-muted-foreground">]</div>
            </div>
          </motion.section>

          {/* About Me Section */}
          <motion.section className="space-y-6 max-w-3xl mx-auto" variants={fadeIn}>
            <h2 className="font-mono text-2xl font-semibold text-center">
              <span className="text-brand">{"//"}</span> About Me
            </h2>
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
            <h2 className="font-mono text-2xl font-semibold">
              <span className="text-brand">{"//"}</span> Let&apos;s Connect
            </h2>
            <div className="flex justify-center gap-6">
              <Link href="mailto:aos2500@g.rit.edu" className="transition-colors hover:text-brand">
                <FaEnvelope className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/AjaySlngh"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand"
              >
                <FaGithub className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/ajay-singh-449265286"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand"
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