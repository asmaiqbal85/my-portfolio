import About from "@/components/About";
import ContactMe from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <Hero />
    <Projects />
    <Skills />
    <About />
    <ContactMe />
   </main>
  );
}
