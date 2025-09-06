
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { initScrollReveal } from "../utils/ScrollReveal";
import { Experience } from "../components/Experience";
import { Companies } from "../components/Companies";

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal animations
    initScrollReveal();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Companies />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
