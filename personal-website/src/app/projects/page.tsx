"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { projects } from '@/lib/projects';

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen relative z-10">
            <SiteHeader />
            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32">
                <section className="py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-6xl">
                            <span className="text-brand">~/</span>projects
                        </h1>
                    </motion.div>
                    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="rounded-lg border bg-card p-6 text-center shadow transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg"
                            >
                                <Link href={project.href} target="_blank" rel="noopener noreferrer">
                                    <div className="flex justify-center items-center text-4xl text-brand mb-4 h-12">
                                        {project.image ? (
                                            <img src={project.image} alt={`${project.title} logo`} className="h-12 w-12 object-contain" />
                                        ) : project.icon ? (
                                            <project.icon />
                                        ) : null}
                                    </div>
                                    <h2 className="font-mono text-xl font-semibold text-card-foreground mb-2">
                                        <span className="text-brand">{">"}</span> {project.title}
                                    </h2>
                                    <p className="text-muted-foreground">{project.description}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Projects;