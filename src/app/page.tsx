
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030717]">
      <Navbar />
      <Hero />
      <Services />
      <About />
       <Process />
       <Footer />
    </main>
  );
}
