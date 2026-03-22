import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Global Scroll Animations for sections
    const sections = gsap.utils.toArray('section');
    sections.forEach((section) => {
        gsap.fromTo(section, 
            { opacity: 0, y: 50 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-950 text-slate-50 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <motion.div 
        initial={{ scaleX: 0 }}
        id="scroll-progress"
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-400 to-cyan-400 z-60 origin-left"
      />
    </div>
  );
}

// Separate component for progress bar logic to avoid re-renders
const ScrollProgress = () => {
    useEffect(() => {
        gsap.to("#scroll-progress", {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.3
            }
        });
    }, []);
    return null;
}

export default function Root() {
    return (
        <>
            <App />
            <ScrollProgress />
        </>
    );
}
