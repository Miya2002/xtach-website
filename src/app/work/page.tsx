
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import WorkHero from "@/components/work/WorkHero";
import RecentWork from "@/components/work/RecentWork";
import WorkTestimonials from "@/components/work/WorkTestimonials";
import TestimonialsSlider from "@/components/work/TestimonialsSlider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Work | XTACH",
  description:
    "Explore XTACH's creative projects, digital experiences, and innovative technology solutions.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#030717] text-white">
      <Navbar />

      <WorkHero />

      <RecentWork />

      <WorkTestimonials />

      <TestimonialsSlider />

      <Footer />
    </main>
  );
}
