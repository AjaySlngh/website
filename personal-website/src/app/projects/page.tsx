"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCode, FaRobot, FaLaptopCode, FaGithub, FaLinkedin, FaCamera} from 'react-icons/fa';

const Projects: React.FC = () => {
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
            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32">
            <div className="text-xs text-gray-800 mb-2">If you can't see any projects, please reload the page.</div>
                <section className="py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                            My Projects
                        </h1>
                    </motion.div>
                    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
                        >
                            <Link href="/projects/bits-n-bytes">
                                <div className="flex justify-center text-4xl text-blue-600 mb-4">
                                    <FaRobot />
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    Bits N' Bytes
                                </h2>
                                <p className="text-gray-600">
                                    An AI-powered smart cabinet for seamless, contactless shopping.
                                </p>
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
                        >
                            <Link href="http://noteai.cs.house">
                                <div className="flex justify-center text-4xl text-green-600 mb-4">
                                    <FaCode />
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    NoteAI
                                </h2>
                                <p className="text-gray-600">
                                    An intelligent note-taking app that organizes, summarizes, and enhances your notes using AI-powered insights.
                                </p>
                            </Link>
                        </motion.div>
                        {/* Add more projects as needed */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
                        >
                            <Link href="http://flicks.cs.house">
                                <div className="flex justify-center text-4xl text-red-600 mb-4">
                                    <FaCamera />
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    Flicks
                                </h2>
                                <p className="text-gray-600">
                                    My very first react project, a place to store my photography.
                                </p>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Projects;