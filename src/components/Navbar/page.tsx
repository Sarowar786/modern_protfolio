"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/", delay: 0.1 },
  { name: "About", href: "/about", delay: 0.2 },
  { name: "Experience", href: "/experience", delay: 0.3},
  { name: "Projects", href: "/projects", delay: 0.4 },
  { name: "Skills", href: "/skills", delay: 0.5 },
  { name: "Services", href: "/services", delay: 0.6 },
  { name: "Blog", href: "/blog", delay: 0.7 },
  // { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact", delay: 0.8 },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-brand-gradient bg-clip-text text-muted"
        >
          DEV.SAROWAR
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-gray-400 hover:text-white transition-colors ${isActive(link.href) ? "text-white" : ""}`}
            >
              <motion.p
                onClick={() => setShow(false)}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay:link?.delay }}
              >
                {link.name}
              </motion.p>
            </Link>
          ))}
          {/* <Button className="bg-brand-gradient">Hire Me</Button> */}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-white/5 p-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
