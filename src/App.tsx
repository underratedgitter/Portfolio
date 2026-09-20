import { LazyMotion, domAnimation } from "motion/react";
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

function App() {
  return (
    // Only the animation features this site uses (no layout projection or drag), so less JS to load and run.
    // `strict` makes any stray full `motion.*` component fail loudly instead of pulling the full bundle back in.
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen overflow-x-clip bg-black pt-3 text-white sm:pt-4">
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
    </LazyMotion>
  );
}

export default App;
