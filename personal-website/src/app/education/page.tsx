"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const EducationPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-background">
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
                <section className="py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                            Education
                        </h1>
                        <section className="mt-10">
                            <h2 className="text-3xl font-bold tracking-tight">Rochester Institute of Technology</h2>
                            <h4 className="mt-4 text-xl text-muted-foreground">Expected Graduation: May 2027</h4>
                            <h4 className="mt-4 text-xl text-muted-foreground">2nd Year Software Engineering Major</h4>
                        </section>
                        <section className="mt-10">
                            <h2 className="text-3xl font-bold tracking-tight">Relevant Classes</h2>
                            <ul className="mt-4 space-y-2 text-xl text-muted-foreground">
                                <li>GCIS-123: Software Development and Problem Solving I</li>
                                <li>GCIS-124: Software Development and Problem Solving II</li>
                                <li>SWEN-250: Personal Software Engineering</li>
                                <li>SWEN-261: Intro To Software Engineering</li>
                                <li>SWEN-344: Web Engineering</li>
                                <li>SWEN-262: Engineering of Software Subsystems</li>
                                <li>SWEN-256: Software Process and Software Management</li>
                            </ul>
                        </section>
                    </motion.div>
                </section>
            </main>
        </div>
    );
};

export default EducationPage;