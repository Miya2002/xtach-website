import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutProcess from "@/components/about/AboutProcess";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030617]">
      <Navbar />
      <AboutHero />
      <AboutValues />
      <AboutStory />
      <AboutProcess />
      
      <Footer />
    </main>
  );
}