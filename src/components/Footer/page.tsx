import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold bg-brand-gradient bg-clip-text text-muted">
              DEV.ALEX
            </Link>
            <p className="mt-4 text-muted max-w-sm">
              Building modern web experiences with focus on performance, 
              accessibility and clean code.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted">
              <li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
              <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Socials</h4>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-card rounded-full hover:text-primary"><Github size={20} /></Link>
              <Link href="#" className="p-2 bg-card rounded-full hover:text-primary"><Twitter size={20} /></Link>
              <Link href="#" className="p-2 bg-card rounded-full hover:text-primary"><Linkedin size={20} /></Link>
              <Link href="#" className="p-2 bg-card rounded-full hover:text-primary"><Mail size={20} /></Link>
            </div>
          </div>
        </div>
        <div className="text-center text-muted text-sm pt-8 border-t border-white/5">
          © {new Date().getFullYear()} Alex Dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}