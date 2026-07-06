import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-32 px-6 max-w-5xl mx-auto pb-20">
      <Link href="/projects" className="text-muted hover:text-primary flex items-center gap-2 mb-8">
        <ArrowLeft size={18} /> Back to Projects
      </Link>

      <img 
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200" 
        alt="Project Banner" 
        className="w-full h-[400px] object-cover rounded-3xl mb-12"
      />

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4 capitalize">{params.slug.replace(/-/g, ' ')}</h1>
            <p className="text-muted text-lg leading-relaxed">
              This project was built to solve the inefficiency in managing remote team tasks. 
              It provides a real-time collaborative dashboard with automated reporting.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">The Problem</h3>
            <p className="text-muted">Teams were struggling with fragmented communication across multiple tools, leading to missed deadlines and poor visibility into project progress.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">The Solution</h3>
            <p className="text-muted">I developed a centralized platform using Next.js and WebSockets that integrates task management, time tracking, and instant messaging into one fluid interface.</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-card p-6 rounded-2xl border border-white/5">
            <h4 className="font-bold mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"].map(t => (
                <Badge key={t} variant="secondary" className="bg-background">{t}</Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button className="bg-brand-gradient w-full">Live Demo <ExternalLink className="ml-2 h-4 w-4" /></Button>
            <Button variant="outline" className="w-full border-white/10">View Code <Github className="ml-2 h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}