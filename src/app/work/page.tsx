
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import WorkHero from "@/components/work/WorkHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Work | XTACH",
  description:
    "Discover XTACH's portfolio of creative projects, digital experiences, and innovative technology solutions.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#030717] text-white">
      <Navbar />

      <WorkHero />

      <Footer />
    </main>
  );
}
