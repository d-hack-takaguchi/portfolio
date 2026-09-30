import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AICreator from "@/components/AICreator";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SiteExperience from "@/components/SiteExperience";

export default function Home() {
  return (
    <>
      <SiteExperience />
      <Header />
      <main>
        <Hero />
        <Features />
        <CaseStudies />
        <AICreator />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
