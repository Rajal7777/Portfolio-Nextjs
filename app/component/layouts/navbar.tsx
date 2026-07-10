'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";



const Navlinks = [
    { href: '#about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/projects', label: 'Project' },
];
{/*  */ }
const Navbar = () => {
    return (
        <header className="border-b border-gray-200 dark:border-gary-900 transition-colors duration-200">
            <nav className="wrapper h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href='/'>
                    <Image src='/icons/logo.png' alt="logo image" width={32} height={32} />
                </Link>

                {/* Desktop Navbar*/}
                <div className="hidden md:flex items-center space-x-8 ">
                    {Navlinks.map((link) => (
                        <Link key={link.href} href={link.href}
                            className="font-medium hover:text-gray-600"
                        >{link.label}</Link>
                    ))}
                </div>

                {/* Toggle btn & Social icons*/}
                <div className="flex items-center">
                    <Button variant="ghost">
                        <a
                            href="https://github.com/Rajal7777"
                            target="_blank"
                            aria-label="GitHub">
                            <Image src='icons/github.svg' alt="github logo" width={20} height={20} />
                        </a>
                    </Button>

                    <Button variant="ghost">
                        <a
                            href="https://www.linkedin.com/in/rajal-suwal-158986165/"
                            target="_blank"
                            aria-label="Linkedin">
                            <Image src='/icons/linkedin.png' alt="github logo" width={30} height={30} />
                        </a>
                    </Button>

                </div>
              
            </nav>
        </header>

    );
};

export default Navbar;