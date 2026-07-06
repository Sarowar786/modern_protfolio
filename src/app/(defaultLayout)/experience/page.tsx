export default function ExperiencePage() {
  const experiences = [
    { year: "2026", role: "Senior Developer", company: "Tech Flow", desc: "Lead frontend architecture using Next.js." },
    { year: "2025", role: "Frontend Developer", company: "Web Solved", desc: "Built 20+ client projects with Tailwind CSS." },
    { year: "2024", role: "Freelancer", company: "Self", desc: "Started journey with HTML/CSS/JS." },
  ];

  return (
    <div className="pt-32 px-6 max-w-4xl mx-auto pb-20">
      <h1 className="text-4xl font-bold mb-12">Professional Experience</h1>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 border-l-2 border-card">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />
            <span className="text-primary font-bold">{exp.year}</span>
            <h3 className="text-2xl font-semibold mt-2">{exp.role}</h3>
            <p className="text-muted mb-4">{exp.company}</p>
            <p className="bg-card p-6 rounded-xl text-gray-300 leading-relaxed">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}