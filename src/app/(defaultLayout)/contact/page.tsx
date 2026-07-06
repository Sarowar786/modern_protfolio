"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from 'react-hot-toast';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.email("Enter a valid email."),
  subject: z.string().min(3, "Subject is required."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const sendEmail = async () => {
    if (!formRef.current) return;

    try {
      setLoading(true);

      const result = await emailjs.sendForm(
        "service_kmqsebh",
        "template_mgo8xwr",
        formRef.current,
        "fAtaXmWwW6AsA7STh",
      );

      console.log(result.text);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left Side: Info */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h1>
          <p className="text-muted text-lg mb-10">
            Have a project in mind or just want to say hi? Feel free to reach
            out. I&apos;m currently available for freelance work and full-time
            opportunities.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-muted">Email Me</p>
                <p className="text-white font-medium">sarowar2287@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-primary">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-muted">Call Me</p>
                <p className="text-white font-medium">+880 1308-158614</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-muted">Location</p>
                <p className="text-white font-medium">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-card p-8 rounded-3xl border border-white/5">
          <form
            ref={formRef}
            onSubmit={handleSubmit(sendEmail)}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label>Name</label>

                <Input
                  {...register("name")}
                  name="name"
                  placeholder="John Doe"
                />

                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label>Email</label>

                <Input
                  {...register("email")}
                  name="email"
                  placeholder="john@example.com"
                />

                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label>Subject</label>

              <Input
                {...register("subject")}
                name="subject"
                placeholder="How can I help you?"
              />

              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label>Message</label>

              <Textarea
                {...register("message")}
                name="message"
                placeholder="Tell me about your project..."
                className="min-h-37.5"
              />

              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit" disabled={loading} className="w-full coursor-pointer rounded">
              {loading ? "Sending..." : "Send Message"}

              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
