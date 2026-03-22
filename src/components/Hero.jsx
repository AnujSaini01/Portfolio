import React, { useLayoutEffect, useRef, Suspense } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Code, Sparkles, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Scene3D from './Scene3D';

const Hero = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.from('.hero-title span', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1.2,
    })
    .from('.hero-btn', {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
    }, '-=0.4')
    .from('.hero-badge', {
      x: -50,
      opacity: 0,
      duration: 0.8,
    }, '-=1.2');

    // Floating animation for decorative elements
    gsap.to('.hero-blob', {
      y: 30,
      x: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: container });

  return (
    <section id="home" ref={container} className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="hero-blob absolute top-1/4 -left-20 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full"></div>
      <div className="hero-blob absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 text-center lg:text-left max-w-4xl lg:w-3/5">
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-sm font-medium mb-8">
          <Sparkles size={16} />
          <span>Available for Frontend Developer roles</span>
        </div>

        <h1 className="hero-title text-6xl md:text-8xl font-bold tracking-tight mb-12">
          <div className="overflow-hidden inline-block mr-4"><span>ANUJ</span></div>
          <div className="overflow-hidden inline-block text-emerald-400"><span>SAINI</span></div>
          <br />
          <div className="overflow-hidden inline-block text-slate-400"><span>WEB</span></div>
          <div className="overflow-hidden inline-block"><span>DEVELOPER</span></div>
        </h1>

        <div className="hero-btn flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#contact" className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 transition-all">
            Get in touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          {/* 
            PLACE YOUR RESUME.pdf in 'public' folder and rename it to 'Anuj_Saini_Resume.pdf' 
          */}
          <a 
            href="/Anuj_Saini_Resume.pdf" 
            download="Anuj_Saini_Resume.pdf" 
            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-100 font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            Resume
            <Download size={20} />
          </a>
          <a href="#projects" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-100 font-bold rounded-xl flex items-center justify-center gap-2 transition-all">
            Work
            <Code size={20} />
          </a>
        </div>
      </div>

      {/* Desktop-only 3D Canvas */}
      <div className="hidden lg:block lg:w-2/5 h-[600px] z-20">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-slate-400 rounded-full"
          />
        </div>
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
