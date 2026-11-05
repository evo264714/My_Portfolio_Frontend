import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contacts from "./Contacts";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience embedded />
      <Projects embedded />
      <Skills embedded />
      <Contacts embedded />
    </>
  );
}
