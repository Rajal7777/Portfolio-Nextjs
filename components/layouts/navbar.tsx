"use client";

import { useCallback, useEffect, useState } from "react";


import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "../theme/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Languages, Mail } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navlinks = [
    { href: "/#about", label: "About", type: "section" },
    { href: "/projects", label: "Projects", type: "page" },
    { href: "/contact", label: "Contact", type: "page" },
];


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    // const { } = useTranslations();

    const handleLanguageChange = (nextLocale: "en" | "ja") => {
        document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
        window.location.reload();
    };

    const onScroll = useCallback(() => {
        setScrolled(window.scrollY > 20);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    return (
        <header className={cn("sticky top-0 left-0 z-50 transition-all border-gray-200 dark:border-gary-900 duration-200", scrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-transparent")}>
            <nav className="wrapper  h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/icons/logo.png"
                        alt="logo image"
                        width={32}
                        height={32}
                    />
                </Link>

                {/* Desktop Navbar*/}
                <div className="hidden md:flex items-center space-x-8 ">
                    {Navlinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "font-medium transition-colors duration-100 hover:text-blue-500",
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Toggle btn & Social icons*/}
                <div className="flex  items-center space-x-2">
                    <a
                        href="https://github.com/Rajal7777"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "hidden md:flex h-10 w-10")}
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
                        rel="noreferrer"
                        aria-label="Linkedin"
                        className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "hidden md:flex h-10 w-10")}
                    >
                        <Image
                            src="/icons/linkedin.png"
                            alt="github logo"
                            width={30}
                            height={30}
                        />
                    </a>

                    <a
                        href="mailto:suwalrajal57@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "hidden md:flex h-10 w-10")}
                    >
                        <Mail className="h-6 w-6" />
                    </a>
                    {/* Language toggel */}
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            type="button"
                            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-10 w-10")}
                            aria-label="Change language"
                        >
                            <Languages className="h-6 w-6" />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
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
                </div>

            </nav>
        </header>
    );
};

export default Navbar;
