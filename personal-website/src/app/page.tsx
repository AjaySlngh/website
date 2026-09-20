"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { TerminalText } from "@/components/terminal-text"
import { projects } from "@/lib/projects"

export default function Page() {
  return (
    <div className="min-h-screen relative z-10">
      <SiteHeader />

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32">
        {/* Hero Section */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="rounded-lg border bg-card/60 p-6 font-mono text-sm sm:text-base">
              <TerminalText
                lines={[
                  { text: "$ whoami", className: "text-muted-foreground" },
                  { text: "> Ajay Singh - Student, Software Engineer, & Builder", className: "text-foreground font-semibold" },
                  { text: "$ status", className: "text-muted-foreground" },
                  {
                    text: "> Building towards the future, one commit at a time.",
                    className: "text-brand",
                  },
                ]}
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="bg-brand text-brand-foreground hover:bg-brand/90">
                <Link href="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-brand/40 hover:border-brand hover:text-brand">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-3xl font-bold tracking-tight">
              <span className="text-brand">{"//"}</span> Featured Projects
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 3).map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg"
                >
                  <div className="flex aspect-video w-full items-center justify-center bg-muted text-4xl text-brand">
                    {project.image ? (
                      <img src={project.image} alt={`${project.title} logo`} className="h-16 w-16 object-contain" />
                    ) : project.icon ? (
                      <project.icon />
                    ) : null}
                  </div>
                  <div className="p-6">
                    <h3 className="font-mono text-xl font-bold">
                      <span className="text-brand">{">"}</span> {project.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{project.description}</p>
                    <Button variant="link" asChild className="mt-4 p-0 text-brand">
                      <Link href={project.href} target="_blank" rel="noopener noreferrer">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="outline" asChild className="border-brand/40 hover:border-brand hover:text-brand">
                <Link href="/projects">
                  See all projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg border bg-card p-8"
          >
            <h2 className="font-mono text-3xl font-bold tracking-tight">
              <span className="text-brand">{"//"}</span> Skills & Technologies
            </h2>
            <div className="mt-10 rounded-lg border bg-background/60 p-6 font-mono text-sm sm:text-base">
              <div className="text-muted-foreground">const skills = {"{"}</div>
              {[
                { key: "frontend", items: ["HTML", "CSS", "JavaScript", "React", "TypeScript"] },
                { key: "backend", items: ["Node.js", "REST API", "PostgreSQL", "Flask", "Spring Boot"] },
                { key: "devops", items: ["Docker", "Kubernetes", "Azure", "CI/CD"] },
              ].map((category, index) => (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="pl-6"
                >
                  <span className="text-brand">{category.key}</span>
                  <span className="text-muted-foreground">: [</span>
                  {category.items.map((skill, i) => (
                    <span key={skill}>
                      <span className="text-foreground">&quot;{skill}&quot;</span>
                      {i < category.items.length - 1 && <span className="text-muted-foreground">, </span>}
                    </span>
                  ))}
                  <span className="text-muted-foreground">],</span>
                </motion.div>
              ))}
              <div className="text-muted-foreground">{"}"}</div>
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
            <Button asChild className="mt-8 bg-brand text-brand-foreground hover:bg-brand/90">
              <Link href="mailto:aos2500@g.rit.edu">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

