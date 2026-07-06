import {
  Monitor,
  Laptop,
  Zap,
  LayoutTemplate,
  LayoutDashboard,
  RefreshCcw,
  Plug,
  Bug,
  TestTube,
  Lightbulb,
} from "lucide-react";

const SERVICES = [
  {
    title: "Frontend Development",
    desc: "Building responsive, modern, and interactive user interfaces with React, Next.js, and Tailwind CSS.",
    icon: <Monitor className="w-10 h-10" />,
  },
  {
    title: "Full Stack Solutions",
    desc: "Developing complete web applications, from backend APIs and databases to scalable frontend experiences.",
    icon: <Laptop className="w-10 h-10" />,
  },
  {
    title: "Performance Optimization",
    desc: "Optimizing website speed, Core Web Vitals, and SEO for a faster and smoother user experience.",
    icon: <Zap className="w-10 h-10" />,
  },
  {
    title: "Landing Page",
    desc: "Designing high-converting, responsive landing pages that help grow your business and generate leads.",
    icon: <LayoutTemplate className="w-10 h-10" />,
  },
  {
    title: "Dashboard",
    desc: "Creating intuitive admin dashboards with charts, analytics, authentication, and real-time data.",
    icon: <LayoutDashboard className="w-10 h-10" />,
  },
  {
    title: "Website Redesign",
    desc: "Refreshing outdated websites with modern UI/UX, improved performance, and mobile-friendly layouts.",
    icon: <RefreshCcw className="w-10 h-10" />,
  },
  {
    title: "API Integration",
    desc: "Integrating third-party APIs, payment gateways, authentication services, and external platforms seamlessly.",
    icon: <Plug className="w-10 h-10" />,
  },
  {
    title: "Bug Fixing",
    desc: "Identifying and resolving frontend and backend issues to ensure your application runs smoothly.",
    icon: <Bug className="w-10 h-10" />,
  },
  {
    title: "Testing & Debugging",
    desc: "Performing thorough testing and debugging to deliver reliable, stable, and error-free applications.",
    icon: <TestTube className="w-10 h-10" />,
  },
  {
    title: "Planning & Strategy",
    desc: "Helping define project architecture, technology stack, and development roadmap for long-term success.",
    icon: <Lightbulb className="w-10 h-10" />,
  },
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