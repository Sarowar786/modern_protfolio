import { Monitor, Smartphone, Zap, Search, Shield, Settings } from "lucide-react";

const SERVICES = [
  {
    title: "Frontend Development",
    desc: "Building responsive, fast, and interactive user interfaces using React and Next.js.",
    icon: <Monitor className="w-10 h-10" />
  },
  {
    title: "Full Stack Solutions",
    desc: "Complete web applications from database design to deployment and scaling.",
    icon: <Smartphone className="w-10 h-10" />
  },
  {
    title: "Performance Optimization",
    desc: "Improving Core Web Vitals and ensuring lightning-fast load times for SEO.",
    icon: <Zap className="w-10 h-10" />
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">What I Offer</h1>
        <p className="text-muted">Tailored solutions for your digital needs.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((service, i) => (
          <div 
            key={i} 
            className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/50 transition-all group"
          >
            <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-muted leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}