"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
    const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-brand-gradient bg-clip-text text-transparent">
          DEV.ALEX
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <Link key={link.name} href={link.href} className={`text-gray-400 hover:text-white transition-colors ${isActive(link.href) ? 'text-white' : ''}`}>
              {link.name}
            </Link>
          ))}
          <Button className="bg-brand-gradient">Hire Me</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-white/5 p-6 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}