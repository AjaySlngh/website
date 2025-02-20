"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-bold">
            Ajay Singh
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/projects" className="text-sm hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">
              Contact
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

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32">
        {/* Hero Section */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Software Engineer
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Building the future
              </span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              I'm a software engineer passionate about creating innovative solutions and bringing ideas to life through
              code.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild>
                <Link href="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Projects Section
        <section id="projects" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((project) => (
                <motion.div
                  key={project}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: project * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-video w-full bg-muted" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Project {project}</h3>
                    <p className="mt-2 text-muted-foreground">
                      A brief description of the project and the technologies used to build it.
                    </p>
                    <Button variant="link" className="mt-4 p-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section> */}

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg border bg-card p-8"
          >
            <h2 className="text-3xl font-bold tracking-tight">Skills & Technologies</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {["Frontend", "Backend", "DevOps"].map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold">{category}</h3>
                  <div className="space-y-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Skill {i + 1}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg border bg-card p-8 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight">Let's Work Together</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <Button asChild className="mt-8">
              <Link href="mailto:aos2500@g.rit.edu">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ajay Singh. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

