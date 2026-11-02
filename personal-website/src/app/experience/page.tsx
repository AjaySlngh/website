"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { experiences } from '@/lib/experience';

const Experience: React.FC = () => {
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
                            <span className="text-brand">~/</span>experience
                        </h1>
                    </motion.div>
                    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={experience.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="rounded-lg border bg-card p-6 text-center shadow transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg"
                            >
                                <Link href={experience.href} target="_blank" rel="noopener noreferrer">
                                    <div className="flex justify-center items-center text-4xl text-brand mb-4 h-12">
                                        {experience.image ? (
                                            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white p-1.5">
                                                <img src={experience.image} alt={`${experience.company} logo`} className="h-full w-full object-contain" />
                                            </div>
                                        ) : experience.icon ? (
                                            <experience.icon />
                                        ) : null}
                                    </div>
                                    <h2 className="font-mono text-xl font-semibold text-card-foreground mb-1">
                                        <span className="text-brand">{">"}</span> {experience.company}
                                    </h2>
                                    <p className="text-sm font-mono text-muted-foreground mb-1">{experience.role}</p>
                                    <p className="text-xs text-muted-foreground mb-3">{experience.period}</p>
                                    <p className="text-muted-foreground">{experience.description}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Experience;
