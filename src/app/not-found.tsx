import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-extrabold text-primary opacity-20">404</h1>
      <div className="absolute">
        <h2 className="text-3xl font-bold mb-4">Lost in Space?</h2>
        <p className="text-muted mb-8 max-w-md">
          The page you are looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>
        <Link href="/">
          <Button className="bg-brand-gradient px-8 py-6 text-lg">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}