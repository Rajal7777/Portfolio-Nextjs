//Navbar types

export interface NavLink {
  href: string;
  label: string;
}

export interface MobileNavProps {
  navLinks: NavLink[];
  isOpen: boolean;
  onClose: () => void;
}


export type ProjectCardProps = {
    title: string;
    description: string;
    techStack: string[];
    imageSrc: string;
    imageAlt: string;
    liveProjectUrl: string;
    liveCodeUrl: string;
    className?: string;
};