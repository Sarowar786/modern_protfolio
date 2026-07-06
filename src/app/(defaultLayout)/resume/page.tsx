import { Button } from "@/components/ui/button";
import { Download, Printer, Briefcase, GraduationCap, Award } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="pt-32 px-6 max-w-4xl mx-auto pb-20">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">Resume</h1>
        <div className="flex gap-4">
          <Button variant="outline" className="border-white/10">
            <Printer className="mr-2 h-4 w-4" /> Print
          </Button>
          <Button className="bg-brand-gradient">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
        </div>
      </div>

      <div className="space-y-12 bg-card p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
        {/* Header Info */}
        <section className="border-b border-white/5 pb-8">
          <h2 className="text-3xl font-bold mb-2">Alex Smith</h2>
          <p className="text-primary font-medium mb-4">Senior Full Stack Developer</p>
          <p className="text-muted leading-relaxed max-w-2xl">
            Passionate developer with 3+ years of experience building scalable web applications. 
            Expertise in React, Next.js, and Node.js.
          </p>
        </section>

        {/* Experience */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-primary" />
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <h4 className="text-xl font-bold">Senior Frontend Engineer</h4>
                <span className="text-muted italic">2024 — Present</span>
              </div>
              <p className="text-primary text-sm mb-3">TechFlow Solutions</p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Led the migration from Page Router to App Router in Next.js.</li>
                <li>Reduced bundle size by 40% through code splitting.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-primary" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <h4 className="text-xl font-bold">BSc in Computer Science</h4>
              <span className="text-muted italic">2020 — 2024</span>
            </div>
            <p className="text-muted">University of Technology, California</p>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-primary" />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["AWS Certified Developer", "Meta Frontend Professional", "Google UX Design"].map((cert) => (
              <div key={cert} className="bg-background p-4 rounded-xl border border-white/5">
                {cert}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}