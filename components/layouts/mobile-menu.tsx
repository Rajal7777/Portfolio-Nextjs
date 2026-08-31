"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, ArrowRight } from "lucide-react";
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
          className="fixed inset-0 z-55 md:hidden"
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
            className="absolute inset-0 bg-black/25"
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
            className="fixed right-0 top-0 flex h-dvh w-[85vw] max-w-sm flex-col overflow-hidden bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-4">
              <div>
                <h2 className="text-muted-foreground text-lg font-semibold leading-7">
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
                  "h-10 w-10 focus:outline-none",
                )}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav
              aria-label="Mobile navigation"
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4"
            >
              {" "}
              <div className="space-y-1.5">
                {" "}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center rounded-xl px-3 py-3 text-sm font-medium transition-colors duration-200",
                      pathname.startsWith(link.href)
                        ? "bg-accent text-foreground"
                        : "text-foreground/90 hover:bg-accent/70 hover:text-foreground",
                    )}
                  >
                    {" "}
                    {link.label} <ArrowRight className="ml-auto h-4 w-4" />{" "}
                  </Link>
                ))}{" "}
              </div>{" "}
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
                    "h-10 w-10",
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
                    "h-10 w-10",
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
                    "h-10 w-10",
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
