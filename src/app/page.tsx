import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { GlobalBackground } from "@/components/ui/GlobalBackground";

export default function Home() {
  return (
    <>
      <Navbar />
      <GlobalBackground />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Research />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
