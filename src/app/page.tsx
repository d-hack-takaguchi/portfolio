import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
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
        <CaseStudies />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
