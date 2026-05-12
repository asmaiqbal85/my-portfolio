import About from "@/components/About";
import ContactMe from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";


export default function Home() {
  return (
   <main>
    <Hero />
    <ProjectsSection />
    <Skills />
    <About />
    <ContactMe />
   </main>
  );
}
