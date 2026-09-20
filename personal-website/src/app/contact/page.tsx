"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';
import { SiteHeader } from '@/components/site-header';

const contactMethods = [
    {
        label: "github",
        href: "https://github.com/AjaySlngh",
        icon: FaGithub,
        description: "Check out my projects and contributions.",
        external: true,
    },
    {
        label: "linkedin",
        href: "https://www.linkedin.com/in/ajay-singh-449265286",
        icon: FaLinkedin,
        description: "Connect with me professionally.",
        external: true,
    },
    {
        label: "email",
        href: "mailto:aos2500@g.rit.edu",
        icon: FaEnvelope,
        description: "Send me a message directly.",
        external: false,
    },
    {
        label: "instagram",
        href: "https://instagram.com/ajaysingh7161",
        icon: FaInstagram,
        description: "Follow me for updates and fun stuff.",
        external: true,
    },
    {
        label: "phone",
        href: "tel:+16513025747",
        icon: FaPhone,
        description: "Call me at +1 (651) 302-5747",
        external: false,
    },
];

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen relative z-10">
            <SiteHeader />
            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 relative z-20">
                <section className="py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-6xl">
                            <span className="text-brand">~/</span>contact
                        </h1>
                    </motion.div>
                    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={method.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                href={method.href}
                                target={method.external ? "_blank" : undefined}
                                rel={method.external ? "noopener noreferrer" : undefined}
                                className="rounded-lg border bg-card p-6 text-center shadow transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg relative z-30"
                            >
                                <div className="flex justify-center text-4xl text-brand mb-4">
                                    <method.icon />
                                </div>
                                <h2 className="font-mono text-xl font-semibold text-card-foreground mb-2">
                                    <span className="text-brand">$</span> {method.label}
                                </h2>
                                <p className="text-muted-foreground">{method.description}</p>
                            </motion.a>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;