'use client';


import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";


export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

      // useEffect only runs on the client, forcing a re-render after hydration
      useEffect(() => {
        setMounted(true)
      },[])

      if(!mounted){
        return (
            <Button variant='ghost' size='icon' disabled>
                <div className="w-6 h-6 rounded-full bg-muted/20"  />
            </Button>
        )
      }

    return (
        <>
            <Button
                variant='ghost'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </Button>
        </>
    );
}