"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layout, Terminal, Cpu, Globe } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
  },
  {
    title: "Backend",
    icon: <Terminal className="w-6 h-6 text-primary" />,
    skills: ["Node.js", "Express", "Hono", "Prisma", "NextAuth"]
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Supabase"]
  },
  {
    title: "Tools & DevOps",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    skills: ["Git", "Docker", "AWS", "Vercel", "Postman", "Linux"]
  }
];

export default function SkillsPage() {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Technical Skills</h1>
        <p className="text-muted max-w-2xl mx-auto">
          A comprehensive list of my technical stack and the tools I use to bring ideas to life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="bg-card border-none h-full hover:ring-1 ring-primary/50 transition-all">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-background w-fit rounded-lg">{cat.icon}</div>
                <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="bg-background text-xs py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}