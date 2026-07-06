import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    title: "SaaS Dashboard",
    desc: "A clean analytics platform built with Next.js and Tremor.",
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500"
  },
  {
    title: "AI Chatbot",
    desc: "Real-time AI interaction tool using OpenAI API.",
    tags: ["React", "Node.js", "OpenAI"],
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 mt-5"> Projects</h2>
            <p className="text-muted">Selection of my best works</p>
          </div>
          {/* <Link href="/projects" className="text-primary hover:underline font-medium">View All Projects</Link> */}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <Card key={i} className="bg-card border-none overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-muted mb-4">{p.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map(tag => <Badge key={tag} variant="secondary" className="bg-background text-white">{tag}</Badge>)}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-4">
                <Link href="#"><Github className="h-5 w-5 text-muted hover:text-primary" /></Link>
                <Link href="#"><ExternalLink className="h-5 w-5 text-muted hover:text-primary" /></Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}