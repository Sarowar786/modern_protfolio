"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left Side: Info */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h1>
          <p className="text-muted text-lg mb-10">
            Have a project in mind or just want to say hi? Feel free to reach out. 
            I&apos;m currently available for freelance work and full-time opportunities.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-muted">Email Me</p>
                <p className="text-white font-medium">hello@alex.dev</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-primary">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-muted">Call Me</p>
                <p className="text-white font-medium">+1 (234) 567-890</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-muted">Location</p>
                <p className="text-white font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-card p-8 rounded-3xl border border-white/5">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="John Doe" className="bg-background border-none h-12 focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input placeholder="john@example.com" className="bg-background border-none h-12 focus-visible:ring-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input placeholder="How can I help you?" className="bg-background border-none h-12 focus-visible:ring-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Tell me about your project..." className="bg-background border-none min-h-[150px] focus-visible:ring-primary" />
            </div>
            <Button className="w-full bg-brand-gradient h-12 text-lg">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}