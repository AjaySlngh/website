"use client"

import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Card } from "@/components/ui/card"

const Education: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const courses = [
    "Software Development and Problem Solving",
    "Personal Software Engineering",
    "Web Engineering",
    "Intro To Software Engineering",
    "Engineering of Software Subsystems",
    "SW Process and SW Management",
    "Embedded Software Engineering",
    "Computer Architecture",
  ]

  return (
    <div className="min-h-screen bg-background relative">
      {/* Decorative background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#F76902]/5" />
        <div className="absolute h-full w-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-32 w-32 rounded-full bg-[#F76902]/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-bold">
            Ajay Singh
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/education" className="text-sm hover:text-[#F76902] transition-colors">
              Education
            </Link>
            <Link href="/projects" className="text-sm hover:text-[#F76902] transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-sm hover:text-[#F76902] transition-colors">
              Contact
            </Link>
            <Link href="/resume" className="text-sm hover:text-[#F76902] transition-colors">
              Resume
            </Link>
            <Link href="/about" className="text-sm hover:text-[#F76902] transition-colors">
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

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 relative z-20">
        <motion.div initial="initial" animate="animate" variants={fadeIn} className="space-y-16">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <motion.div
              className="inline-block"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#F76902] to-[#513127] blur-xl opacity-20" />
                <Card className="relative border-2 border-[#F76902]/20 p-6 backdrop-blur-sm">
                  <h1 className="text-4xl font-bold sm:text-5xl mb-4">Rochester Institute of Technology</h1>
                  <p className="text-xl text-muted-foreground">Bachelor of Science in Software Engineering</p>
                  <p className="text-lg text-[#F76902] mt-2">Expected Graduation: 2027</p>
                </Card>
              </div>
            </motion.div>
          </section>

          {/* Coursework Section */}
          <motion.section className="space-y-8" variants={fadeIn}>
            <h2 className="text-2xl font-semibold text-center">Notable Coursework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {courses.map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 h-full border-[#F76902]/20 hover:border-[#F76902] transition-colors">
                    <p className="text-center">{course}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Achievements Section
          <motion.section className="space-y-8 pb-16" variants={fadeIn}>
            <h2 className="text-2xl font-semibold text-center">Academic Achievements</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 border-[#F76902]/20">
                <h3 className="text-xl font-semibold mb-2">Dean's List</h3>
                <p className="text-muted-foreground">
                  Consistently maintained academic excellence throughout the program
                </p>
              </Card>
              <Card className="p-6 border-[#F76902]/20">
                <h3 className="text-xl font-semibold mb-2">Research Projects</h3>
                <p className="text-muted-foreground">
                  Participated in cutting-edge software engineering research initiatives
                </p>
              </Card>
            </div>
          </motion.section> */}
        </motion.div>
      </main>
    </div>
  )
}

export default Education

