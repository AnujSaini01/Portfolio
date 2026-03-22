import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section id="about" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square rounded-2xl bg-slate-800 overflow-hidden border border-slate-700/50 flex items-center justify-center">
               {/* Placeholder for Profile - Suggesting high-end vibe */}
               <User size={120} className="text-slate-700 group-hover:text-emerald-500/50 transition-colors duration-500" />
            </div>
          </div>

          <div className="md:w-1/2">
            <motion.h2 
              {...fadeIn}
              className="text-4xl md:text-5xl font-bold mb-8 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent"
>
              Building digital experiences that matter.
            </motion.h2>
            
            <motion.p 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 mb-8 leading-relaxed"
            >
              I am <span className="text-emerald-400 font-semibold">Anuj Saini</span>, a passionate Web Developer focused on crafting high-level frontend experiences. With a strong foundation in modern JavaScript and React, I specialize in building responsive, accessible, and performant web applications.
            </motion.p>

            <motion.div 
               {...fadeIn}
               transition={{ delay: 0.4 }}
               className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="text-slate-200 font-medium">Faridabad, Haryana</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-slate-200 font-medium">anujsaini9006@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="text-slate-200 font-medium">+91 9899250565</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
