import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}