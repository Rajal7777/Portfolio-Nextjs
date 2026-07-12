'use client';

import { motion } from 'framer-motion';
import { Mail, X } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { MobileNavProps } from '@/types';
import { buttonVariants } from '../ui/button';
import Link from 'next/link';

const MobileMenu = ({ navLinks, isOpen, onClose }: MobileNavProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0  z-20 md:hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
                className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            />

            <motion.aside
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                onClick={(e) => e.stopPropagation()}
                className="absolute inset-y-0 right-0 flex h-full w-full max-w-[320px] flex-col border-l border-border bg-background/95 shadow-2xl"
            >
                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                    <div>
                        <p className="text-sm font-semibold tracking-wide text-foreground">Menu</p>
                        <p className="text-xs text-muted-foreground">Navigate links</p>
                    </div>

                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={onClose}
                        className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-10 w-10')}
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-2">
                     {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                className="flex items-center rounded-lg px-3 py-3  font-medium text-muted-foreground transition-colors hover:text-blue-700"
                            >
                              {link.label}
                              </Link>
                        ))}
                 </nav>

                <div className="border-t border-border px-5 py-4">
                    <div className="flex items-center gap-2">
                        <a
                            href="https://github.com/Rajal7777"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-10 w-10')}
                        >
                            <Image src="/icons/github.svg" alt="github logo" width={20} height={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/rajal-suwal-158986165/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Linkedin"
                            className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-10 w-10')}
                        >
                            <Image src="/icons/linkedin.png" alt="LinkedIn logo" width={28} height={28} />
                        </a>

                        <a
                            href="mailto:suwalrajal57@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Email"
                            className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-10 w-10')}
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </motion.aside>
        </div>
    );
};

export default MobileMenu;