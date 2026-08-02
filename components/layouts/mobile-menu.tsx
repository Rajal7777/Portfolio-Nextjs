"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { MobileNavProps } from "@/types";
import { buttonVariants } from "../ui/button";

const MobileMenu = ({ navLinks, isOpen, onClose }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-120 md:hidden h-4/5"
          role="dialog"
          aria-modal="true"
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/35 backdrop-blur-md"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 28,
            }}
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-y-0 right-0 flex h-full w-[85vw] max-w-85 flex-col border-l border-border bg-background shadow-2xl will-change-transform"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b  px-5 py-4">
              <div>
                <h2 className="text-white text-lg font-semibold leading-7">
                  Menu
                </h2>
                <p className="truncate text-xs text-muted-foreground">
                  Navigate links
                </p>
              </div>

              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  }),
                  "h-10 w-10 focus:outline-none"
                )}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav
              aria-label="Mobile navigation"
              className="flex-1 space-y-1.5 overflow-y-auto overscroll-contain px-3 py-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center rounded-xl px-2 py-2 text-base font-light  transition-colors duration-200",
                    pathname.startsWith(link.href)
                      ? "bg-accent text-foreground"
                      : "text-foreground/90 hover:bg-accent/70 hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div className="shrink-0 border-t border-border px-5 py-4">
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Rajal7777"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    }),
                    "h-10 w-10"
                  )}
                >
                  <Image
                    src="/icons/github.svg"
                    alt="GitHub"
                    width={20}
                    height={20}
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/rajal-suwal-158986165/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    }),
                    "h-10 w-10"
                  )}
                >
                  <Image
                    src="/icons/linkedin.png"
                    alt="LinkedIn"
                    width={28}
                    height={28}
                  />
                </a>

                <a
                  href="mailto:suwalrajal57@gmail.com"
                  aria-label="Email"
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    }),
                    "h-10 w-10"
                  )}
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;