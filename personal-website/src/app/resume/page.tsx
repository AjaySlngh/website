"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download, ExternalLink } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { Button } from '@/components/ui/button';

const Resume: React.FC = () => {
    return (
        <div className="min-h-screen relative z-10">
            <SiteHeader />
            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32">
                <section className="py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center"
                    >
                        <Button asChild className="bg-brand text-brand-foreground hover:bg-brand/90">
                            <Link href="/AjaySinghResume.pdf" download>
                                <Download className="mr-2 h-4 w-4" />
                                Download Resume
                            </Link>
                        </Button>
                        <Button variant="outline" asChild className="border-brand/40 hover:border-brand hover:text-brand">
                            <Link href="/AjaySinghResume.pdf" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Open in New Tab
                            </Link>
                        </Button>
                    </motion.div>
                    <div className="mt-10 max-w-4xl mx-auto overflow-hidden rounded-lg border bg-card/60">
                        <div className="flex items-center gap-2 border-b bg-muted/40 px-4 py-2">
                            <span className="h-3 w-3 rounded-full bg-destructive/70" />
                            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                            <span className="h-3 w-3 rounded-full bg-brand/70" />
                            <span className="ml-2 font-mono text-xs text-muted-foreground">~/resume.pdf</span>
                        </div>
                        <iframe
                            src="/AjaySinghResume.pdf"
                            title="Ajay Singh Resume"
                            className="h-[70vh] w-full sm:h-[85vh]"
                        />
                        <p className="border-t px-4 py-3 text-center text-xs text-muted-foreground">
                            Having trouble viewing the PDF? Use the buttons above to download it or open it in a new tab.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Resume;