import FeaturedProjects from "@/components/home/FraturesProjects";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Short About Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Crafting Digital Experiences</h2>
            <p className="text-muted text-lg mb-6 leading-relaxed">
              I specialize in building robust backend systems and pixel-perfect frontends. 
              My goal is to create products that provide value and a great user experience.
            </p>
            <Link href="/about">
              <Button className="border-white/10 bg-transparent hover:bg-primary cursor-pointer rounded">Read My Story <MoveRight /> </Button>
            </Link>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
             {/* Dynamic Stats for Home */}
             <div className="p-8 bg-background rounded-2xl border border-white/5">
                <h3 className="text-3xl font-bold text-primary">50+</h3>
                <p className="text-sm text-muted">Projects</p>
             </div>
             <div className="p-8 bg-background rounded-2xl border border-white/5">
                <h3 className="text-3xl font-bold text-secondary">3+</h3>
                <p className="text-sm text-muted">Years</p>
             </div>
          </div>
        </div>
      </section>

      <FeaturedProjects />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-brand-gradient p-12 rounded-[3rem] text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s build something amazing</h2>
          <p className="text-white/80 mb-10 text-lg">
            Ready to start your next project? Get in touch today.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-xl rounded-full">
              Contact Me Now
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}