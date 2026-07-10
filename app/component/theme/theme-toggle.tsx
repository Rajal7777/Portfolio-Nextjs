'use client';
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";


export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <Button
                variant='ghost'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'light' ? (<Moon className="w-4 h-4" />) : (<Sun className="w-4 h-4" />)}
            </Button>
        </>
    );
}