import { Inter } from "next/font/google";
import "./globals.css";

// import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-white antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}