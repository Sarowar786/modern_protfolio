export default function ExperiencePage() {
  const experiences = [
    { year: "2026", role: "Frontend Developer", company: "SM Technology", desc: "Built complex frontend projects using Next.js , TypeScript , Redux toolkit, Tailwind Css and REST APIs Integration." },
    { year: "2025", role: "Frontend Developer", company: "Fortis Group", desc: "Built High-performance in-house Web Applications with React.js and REST APIs." },
    { year: "2024", role: "Self Employed", company: "Self", desc: "Started journey with HTML/CSS/JS & React.js." },
  ];

  return ( 
    <div className="pt-32 px-6 max-w-4xl mx-auto pb-20">
      <h1 className="text-4xl font-bold mb-12">Professional Experience</h1>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 border-l-2 border-card">
            <div className="absolute -left-2.5 top-0 w-4 h-4 bg-primary rounded-full" />
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