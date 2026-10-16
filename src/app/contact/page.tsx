
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | XTACH",
  description:
    "Connect with XTACH for digital innovation, creative solutions, AI development, and technology services.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#030717] text-white">
      <Navbar />

      <ContactHero />

      <Footer />
    </main>
  );
}
