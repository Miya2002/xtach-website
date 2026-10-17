
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import BlogHero from "@/components/blog/BlogHero";
import BlogJournal from "@/components/blog/BlogJournal";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | XTACH",
  description:
    "Explore upcoming XTACH insights on AI, digital innovation, technology, design, and development.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#030717] text-white">
      <Navbar />

      <BlogHero />
 <BlogJournal />
 <Process />
      <Footer />
    </main>
  );
}
