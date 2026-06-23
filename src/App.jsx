import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Engagements from "./components/Engagements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-shell">
      <div className="bg-pattern pillar-left" />
      <div className="bg-pattern pillar-right" />
      <div className="bg-scale" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Engagements />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}