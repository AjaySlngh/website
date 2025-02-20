"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';

const Contact: React.FC = () => {
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
            <div className="text-xs text-gray-800 mb-2">If you can't see any contacts, please reload the page.</div>
                <section className="py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                            Contact Me
                        </h1>
                    </motion.div>
                    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            href="https://github.com/AjaySlngh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center relative z-30"
                        >
                            <div className="flex justify-center text-4xl text-gray-800 mb-4">
                                <FaGithub />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">GitHub</h2>
                            <p className="text-gray-600">Check out my projects and contributions.</p>
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            href="https://www.linkedin.com/in/ajay-singh-449265286"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center relative z-30"
                        >
                            <div className="flex justify-center text-4xl text-blue-600 mb-4">
                                <FaLinkedin />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">LinkedIn</h2>
                            <p className="text-gray-600">Connect with me professionally.</p>
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            href="mailto:aos2500@g.rit.edu"
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center relative z-30"
                        >
                            <div className="flex justify-center text-4xl text-red-600 mb-4">
                                <FaEnvelope />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Email</h2>
                            <p className="text-gray-600">Send me a message directly.</p>
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            href="https://instagram.com/ajaysingh7161"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center relative z-30"
                        >
                            <div className="flex justify-center text-4xl text-pink-600 mb-4">
                                <FaInstagram />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Instagram</h2>
                            <p className="text-gray-600">Follow me for updates and fun stuff.</p>
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            href="tel:+16513025747"
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center relative z-30"
                        >
                            <div className="flex justify-center text-4xl text-green-600 mb-4">
                                <FaPhone />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Phone</h2>
                            <p className="text-gray-600">Call me at +1 (651) 302-5747</p>
                        </motion.a>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;