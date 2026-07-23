"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Sarah Johnson",
    role: "CEO at StartupX",
    text: "Sarowar delivered our project in record time. The code quality is top-notch and the UI is beautiful.",
    img: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    text: "Extremely professional and easy to work with. Highly recommended for complex Next.js projects.",
    img: "https://i.pravatar.cc/150?u=james"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">What Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-card p-8 rounded-3xl border border-white/5 relative"
            >
              <Quote className="absolute top-6 right-8 text-primary/20 w-12 h-12" />
              <p className="text-muted text-lg mb-8 italic">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full border-2 border-primary" />
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-muted">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}