import { FadeIn } from "../common/fade-in";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <FadeIn>
            <footer className="border-t">
                <div className="text-center p-2">
                    <p className="mt-1 text-sm text-foreground">
                        © {currentYear} All rights reserved. Built with Next.js & Tailwind.
                    </p>
                    <p className="text-xs  text-muted-foreground">
                        <span className="bg-gray-700 p-0.5 rounded-md  text-white">Portfolio</span>  Rajal Suwal
                    </p>
                </div>
            </footer>
        </FadeIn>
    );
}
