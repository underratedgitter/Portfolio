import { useActiveSection } from "./hooks/useActiveSection";
import { NavBar } from "./components/NavBar";
import { StatusBar } from "./components/StatusBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const SECTION_IDS = ["about", "experience", "projects", "skills", "contact"];

function App() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <div className="min-h-screen">
      <NavBar active={active} />
      <StatusBar active={active} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
