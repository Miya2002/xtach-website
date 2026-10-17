
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactProcess from "@/components/contact/ContactProcess";
import ContactLocation from "@/components/contact/ContactLocation";
import ContactFAQ from "@/components/contact/ContactFAQ";
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
<ContactForm />
<ContactProcess />
<ContactLocation />
<ContactFAQ />
      <Footer />
    </main>
  );
}
