import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Youth Price",
    description:
      "A multivendor e-commerce platform for buying and selling products.",
    listItem: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "JWT",
      "Stripe",
    ],
    image: "/images/alexkunle_image.png",
    link: "https://alexkunle1990-frontend-web.vercel.app",
  },
  {
    title: "Long Vacation",
    description:
      "An all-in-one travel booking platform where users can discover and book resorts & vacation packages while also reserving flights for a seamless travel experience.",
    listItem: ["Next.js", "Tailwind css", "TypeScript", "Redux toolkit"],
    link: "https://travel-agency-app-iota.vercel.app/",
    image: "/images/long_vacation_images.png",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-muted">Selection of my best works</p>
          </div>
          <Link
            href="/projects"
            className="text-primary hover:underline font-medium"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <Card
              key={i}
              className="bg-card border-none overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/*fixed image window container height ) */}
                <div className="relative h-64 w-full overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full absolute top-0 left-0 object-cover object-top transition-transform duration-4000 ease-in-out group-hover:-translate-y-[calc(100%-16rem)]"
                  />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground mb-4">{p.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {p.listItem.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="bg-background text-foreground"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>

              <CardFooter className="p-6 pt-0 flex gap-4">
                <Link href={p.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
