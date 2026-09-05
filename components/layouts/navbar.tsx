"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "../theme/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Languages, Mail, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import MobileMenu from "./mobile-menu";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (nextLocale: "en" | "ja") => {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; SameSite=Lax;`;

    // Forces Next.js to fetch a fresh layout response from the server using the new cookie
    router.refresh();
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  //Added Escape-key handling and body scroll lock while the menu is open
  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-gray-200 transition-all duration-200 dark:border-gray-900 mb-4 ",
        scrolled
          ? "border-b bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-background",
      )}
    >
      <nav
        id="mobile-navigation"
        className="wrapper  h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-medium">
          <Image
            src="/logo.png"
            alt="logo image"
            width={32}
            height={32}
            priority
            unoptimized
            className="rounded-full"
          />
        </Link>

        {/* Desktop Navbar*/}
        <div className="hidden md:flex items-center space-x-8 ">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium text-muted-foreground transition-colors",
                  isActive && "text-foreground",
                  !isActive && "hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Toggle btn & Social icons*/}
        <div className="flex  items-center space-x-2">
          <a
            href="https://github.com/Rajal7777"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "hidden md:flex h-10 w-10",
            )}
          >
            <Image
              src="/icons/github.svg"
              alt="github logo"
              width={20}
              height={20}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/rajal-suwal-158986165/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "hidden md:flex h-10 w-10",
            )}
          >
            <Image
              src="/icons/linkedin.png"
              alt="linkedin logo"
              width={30}
              height={30}
            />
          </a>

          <a
            href="mailto:suwalrajal57@gmail.com"
            aria-label="Email Rajal Suwal"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "hidden md:flex h-10 w-10",
            )}
          >
            <Mail className="h-6 w-6" />
          </a>

          {/* Language toggel */}
          <DropdownMenu>
            <DropdownMenuTrigger
              type="button"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "h-10 w-10",
              )}
              aria-label="Change language"
            >
              <Languages className="h-6 w-6" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="z-110">
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => handleLanguageChange("ja")}
              >
                日本語
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => handleLanguageChange("en")}
              >
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* themeToggle btn */}
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-10 w-10 md:hidden",
            )}
            onClick={() => {
              setMobileOpen((prev) => !prev);
            }}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile navbar */}
      {mobileOpen && (
        <MobileMenu
          navLinks={navLinks}
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
