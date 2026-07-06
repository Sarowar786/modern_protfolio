import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const BLOGS = [
  {
    title: "Mastering Next.js Server Components",
    date: "Oct 12, 2024",
    category: "Tutorial",
    img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500"
  },
  {
    title: "Why TypeScript is Essential for Large Teams",
    date: "Sep 28, 2024",
    category: "Insight",
    img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500"
  },
  {
    title: "Building Beautiful UI with Tailwind CSS",
    date: "Aug 15, 2024",
    category: "Design",
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Latest Articles</h1>
        <p className="text-muted">Sharing my thoughts on technology and design.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOGS.map((blog, i) => (
          <Link key={i} href={`/blog/${blog.title.toLowerCase().replace(/ /g, '-')}`}>
            <Card className="bg-card border-none overflow-hidden group hover:ring-1 ring-primary transition-all">
              <div className="h-52 overflow-hidden">
                <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-primary uppercase">{blog.category}</span>
                  <span className="text-xs text-muted">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                  {blog.title}
                </h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}