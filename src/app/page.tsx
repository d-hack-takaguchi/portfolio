import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Career from "@/components/Career";
import Creator from "@/components/Creator";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Cases />
        <Career />
        <Creator />
        <About />
        <Stack />
      </main>
      <Footer />
    </>
  );
}
