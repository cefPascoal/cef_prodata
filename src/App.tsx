import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Approach } from "./sections/Approach";
import { Expertise } from "./sections/Expertise";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Architecture } from "./sections/Architecture";
import { Experience } from "./sections/Experience";
import { LearningJourney } from "./sections/LearningJourney";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Approach />
        <Expertise />
        <Skills />
        <Projects />
        <Architecture />
        <Experience />
        <LearningJourney />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
