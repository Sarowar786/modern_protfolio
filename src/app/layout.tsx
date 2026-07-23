import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import CustomCursor from "@/components/ui/CustomCursor";


export const metadata: Metadata = {
  title: {
    default: "Md Golam Sarowar | Frontend Developer",
    template: "%s | Sarowar", // thats why sub-pages has "About | Sarowar"
  },
  description:
    "Professional portfolio of Md Golam Sarowar, a Frontend Developer specializing in Next.js, React, and Node.js. Building modern, high-performance web applications.",
  keywords: [
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Specialist",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Md Golam Sarowar" }],
  creator: "Md Golam Sarowar",
  // OpenGraph (For Facebook, LinkedIn view)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarowar7.vercel.app", // here is your website main domain
    siteName: "Md Golam Sarowar Portfolio",
    title: "Md Golam Sarowar | Senior Full Stack Developer",
    description:
      "Building modern digital experiences with Next.js and Tailwind CSS.",
    images: [
      {
        url: "/og-image.png", // same og-imagel.png in public folder (1200x630 px) 
        width: 1200,
        height: 630,
        alt: "Md Golam Sarowar Portfolio Preview",
      },
    ],
  },
  // For Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Md Golam Sarowar | Frontend Developer",
    description:
      "Building modern digital experiences with Next.js and Tailwind CSS.",
    creator: "@your_twitter_handle",
    images: ["/og-image.png"],
  },
  // Search Engine Crawlers
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logoN.png", // your favicon icon
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-background text-white antialiased`}
      >
        <div className="bg-noise fixed inset-0 z-[-50]"></div>
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">{children}

          <Toaster
          position="bottom-right"
          gutter={12}
          toastOptions={{
            duration: 3000,

            style: {
              background: "rgba(10, 26, 47, 0.75)",
              backdropFilter: "blur(10px)",
              color: "#fff",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
              padding: "12px 14px",
              fontSize: "14px",
              fontWeight: 600,
            },


            // Default icon colors (for loading, normal)
            iconTheme: {
              primary: "#A3E635", // brand-green
              secondary: "#0A1A2F",
            },

            success: {
              style: {
                background: "rgba(11, 79, 74, 0.95)", // brand-teal-ish
                border: "1px solid rgba(163, 230, 53, 0.25)",
              },
              iconTheme: { primary: "#A3E635", secondary: "#0b4f4a" },
            },

            error: {
              style: {
                background: "rgba(255, 121, 108, 0.95)", // brand-coral
                border: "1px solid rgba(255,255,255,0.25)",
              },
              iconTheme: { primary: "#FFFFFF", secondary: "#FF796C" },
            },

            loading: {
              style: {
                background: "#0A1A2F",
                border: "1px solid rgba(255,255,255,0.12)",
              },
            },
          }}
        />
        </main>
        <Footer />
      </body>
    </html>
  );
}
