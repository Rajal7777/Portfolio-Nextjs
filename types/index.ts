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
