"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useRouter } from "next/navigation";
import MagneticEffect from "@/components/ui/MagneticEffect";

export default function Hero() {
    const router = useRouter()
      const handleResumeDownload = () => {
    // Trigger the download of the resume file
    const link = document.createElement("a");
    link.href = "/public/Md Golam Sarowar Resume.pdf"; // Update this to your resume file path
    link.download = "Md Golam Sarowar Resume.pdf"; // Update this to the desired file name
    link.click();
  };

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Animated Blobs */}
      <motion.div
        className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none"
        animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-[40%] right-[10%] w-[350px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none"
        animate={{ x: [0, -120, 0], y: [0, 80, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[40%] w-[500px] h-[500px] bg-cyan-600/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none"
        animate={{ x: [0, 80, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-primary font-medium mb-4">Available for Hire</h2>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 relative z-10">
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-primary via-accent to-secondary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(206,17,38,0.3)]">
              Md Golam Sarowar
            </span>
          </h1>
          <div className="text-2xl lg:text-3xl text-muted mb-8 h-12">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "Web Developer", "Open Source Contributor"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex flex-wrap gap-4 relative z-10">
            <MagneticEffect>
              <Button onClick={()=>{router.push("/projects")}} className="animated-border hover:shadow-[0_0_20px_var(--primary)] bg-card text-foreground hover:bg-card/90 px-8 py-6 text-lg transition-all">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </MagneticEffect>
            <MagneticEffect>
              <Button onClick={handleResumeDownload} className="animated-border hover:shadow-[0_0_20px_var(--accent)] bg-card text-foreground hover:bg-card/90 px-8 py-6 text-lg transition-all">
                Download Resume <Download className="ml-2 h-5 w-5" />
              </Button>
            </MagneticEffect>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center"
        >
          {/* Image Blur Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary via-accent to-secondary blur-[60px] opacity-30 rounded-full animate-pulse z-0 pointer-events-none" style={{ transform: 'scale(0.8)' }}></div>
          <div className="relative z-10 w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
             <img src="/images/hero_image.jpg" alt="Professional Image" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}