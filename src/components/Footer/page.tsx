'use client';
import Link from "next/link";
import { Github, Linkedin, Mail, Facebook,Check } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "sarowar2287@gmail.com";

  const handleEmailClick = () => {
    // copy to clipboard
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <footer className="border-t border-white/5 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold bg-brand-gradient bg-clip-text text-muted"
            >
              DEV.SAROWAR
            </Link>
            <p className="mt-4 text-muted max-w-sm">
              Building modern web experiences with focus on performance,
              accessibility and pixel perfect clean code.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Socials</h4>
            <div className="flex gap-4">
              <Link
                href="https://github.com/Sarowar786"
                className="p-2 bg-card rounded-full hover:text-primary"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/mdgolam.sarowar.942"
                className="p-2 bg-card rounded-full hover:text-primary"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/md-golam-sarowar-"
                className="p-2 bg-card rounded-full hover:text-primary"
              >
                <Linkedin size={20} />
              </Link>
              <div className="relative inline-block group">
                <a 
                  href={`mailto:${email}`}
                  onClick={handleEmailClick}
                  className="p-2 bg-card border border-zinc-800 rounded-full hover:text-primary transition-colors duration-300 flex items-center justify-center"
                >
                  {copied ? <Check size={20} className="text-primary animate-scale-in" /> : <Mail size={20} />}
                </a>

                
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] bg-zinc-900 text-zinc-300 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-zinc-800">
                  {copied ? "Email Copied!" : "Click to Mail / Copy"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-muted text-sm pt-8 border-t border-white/5">
          © {new Date().getFullYear()} Sarowar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
