import { ArrowLeft, Construction } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetails({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return (
    <div className="min-h-screen bg-[#0F1115] text-white flex flex-col justify-center items-center px-6">
      <div className="max-w-md text-center flex flex-col items-center">
        
        <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl text-primary mb-6 animate-bounce">
          <Construction className="h-8 w-8" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
          Article is Under Construction
        </h1>
        
        <p className="text-zinc-400 text-sm font-light mb-2">
          You are trying to read the post for:
        </p>
        
        <code className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-md text-xs text-primary font-mono mb-8">
          {slug}
        </code>

        <p className="text-zinc-500 text-sm mb-8">
          I am currently writing the content for this blog. You will be able to read the full article here very soon!
        </p>

        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors border border-zinc-800 hover:border-zinc-700 bg-zinc-900/20 px-4 py-2 rounded-xl backdrop-blur-md"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blogs
        </Link>
      </div>
    </div>
  );
}