import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import FloatingPV from "@/components/FloatingPV";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-white selection:bg-primary/30 transition-colors duration-1000">
      <Navbar />
      <FloatingPV />
      <Hero />
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
