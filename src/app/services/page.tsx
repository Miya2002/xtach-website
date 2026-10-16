
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | XTACH",
  description:
    "Explore the upcoming digital innovation services from XTACH.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#030717] text-white">
      <Navbar />

      <ServicesHero />

      <Footer />
    </main>
  );
}
