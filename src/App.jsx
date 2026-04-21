import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#030014]"></div>
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="absolute top-[-10%] left-[-5%] w-80 h-80 bg-indigo-600 rounded-full filter blur-[120px] opacity-15 animate-blob"></div>
        <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-purple-600 rounded-full filter blur-[120px] opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-80 h-80 bg-violet-600 rounded-full filter blur-[120px] opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
