"use client"

import type React from "react"
import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
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
    "Human-Centered Requirements and Design",
    "Software Design for Computer Systems",
    "Engineering Secure Software",
  ]

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <SiteHeader />

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
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand to-brand/30 blur-xl opacity-20" />
                <Card className="relative border-2 border-brand/20 p-6 backdrop-blur-sm">
                  <h1 className="text-4xl font-bold sm:text-5xl mb-4">Rochester Institute of Technology</h1>
                  <p className="text-xl text-muted-foreground">Bachelor of Science in Software Engineering</p>
                  <p className="text-lg text-brand mt-2">Expected Graduation: December 2027</p>
                </Card>
              </div>
            </motion.div>
          </section>

          {/* Coursework Section */}
          <motion.section className="space-y-8" variants={fadeIn}>
            <h2 className="font-mono text-2xl font-semibold text-center">
              <span className="text-brand">{"//"}</span> Notable Coursework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {courses.map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 h-full border-brand/20 hover:border-brand transition-colors">
                    <p className="text-center">{course}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
}

export default Education

