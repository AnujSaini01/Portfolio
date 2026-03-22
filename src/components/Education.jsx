import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, School } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Aggarwal College, Ballabgarh",
      duration: "2022 - 2025",
      details: "Pursuing 3-year degree program focusing on software development and computer science fundamentals.",
    },
    {
      degree: "Intermediate (XII)",
      institution: "Shri Ram Sr. Sec. School",
      duration: "2022",
      details: "Completed schooling with 69% in science stream.",
    },
    {
      degree: "Matriculation (X)",
      institution: "Om Shanti Public School",
      duration: "2020",
      details: "Completed matriculation with 7.4 CGPA.",
    },
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Academic Journey</h2>
          <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative space-y-12 after:absolute after:left-1/2 md:after:left-[50%] after:top-0 after:bottom-0 after:w-px after:bg-slate-800 hidden md:block">
          {educationData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`flex items-center justify-between w-full mb-8 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-5/12"></div>
              
              <div className="z-20 flex items-center order-1 bg-emerald-500 shadow-xl w-10 h-10 rounded-full border-4 border-slate-950">
                <GraduationCap size={16} className="text-slate-950 mx-auto" />
              </div>

              <div className="order-1 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl w-5/12 px-8 py-8 hover:border-emerald-500/50 transition-colors duration-300">
                <div className="flex items-center gap-3 text-emerald-400 mb-4">
                  <Calendar size={18} />
                  <span className="font-bold uppercase tracking-wider text-sm">{item.duration}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-100">{item.degree}</h3>
                <div className="flex items-center gap-2 text-slate-400 mb-4 italic">
                  <School size={16} />
                  <span>{item.institution}</span>
                </div>
                <p className="text-slate-500 leading-relaxed">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-8">
          {educationData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <div className="text-emerald-400 mb-2 font-bold">{item.duration}</div>
              <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
              <p className="text-slate-400 mb-4">{item.institution}</p>
              <p className="text-slate-500 text-sm">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
