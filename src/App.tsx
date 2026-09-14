import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Proofs } from "./components/Proofs";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FooterWordmark } from "./components/FooterWordmark";
import { SmoothScroll } from "./components/SmoothScroll";

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-black pt-3 text-white sm:pt-4">
      <SmoothScroll />
      <div className="mx-3 border-x border-b border-white sm:mx-4">
        <NavBar />
        <main>
          <Hero />
          <Proofs />
          <Projects />
          <Experience />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>

      <FooterWordmark />
    </div>
  );
}

export default App;
