import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Creator from "@/components/Creator";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Cases />
        <Creator />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
