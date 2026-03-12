import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <CaseStudies />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
