import { SiteProvider } from './context/SiteContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <SiteProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </SiteProvider>
  );
}
