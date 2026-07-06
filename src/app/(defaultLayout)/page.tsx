"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Animated Blob */}
      <div className="absolute top-0 -z-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-primary font-medium mb-4">Available for Hire</h2>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Hi, I&apos;m <span className="bg-brand-gradient bg-clip-text text-transparent">Alex Smith</span>
          </h1>
          <div className="text-2xl lg:text-3xl text-muted mb-8 h-12">
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "UI/UX Enthusiast", "Open Source Contributor"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-brand-gradient hover:opacity-90 px-8 py-6 text-lg">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-card bg-card px-8 py-6 text-lg">
              Download Resume <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center"
        >
          <div className="w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-3xl overflow-hidden border-2 border-card shadow-2xl">
             <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" alt="Professional Image" className="object-cover w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}