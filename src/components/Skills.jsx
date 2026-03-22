import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Cpu, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Mastery",
      icon: <Layout className="text-emerald-400" />,
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-emerald-500/20 to-cyan-500/20"
    },
    {
      title: "Backend & API",
      icon: <Server className="text-blue-400" />,
      skills: ["Node.js", "Express.js", "RESTful API"],
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Database Design",
      icon: <Database className="text-purple-400" />,
      skills: ["MongoDB", "Database Design", "Mongoose"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Tools & Extras",
        icon: <Globe className="text-amber-400" />,
        skills: ["Git & GitHub", "NPM", "Vite", "Postman", "JWT Authentication"],
        color: "from-amber-500/20 to-orange-500/20"
      }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Modern technologies I use to bring creative ideas to life on the web.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-3xl bg-slate-900 border border-slate-800 group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-2xl bg-slate-950 border border-slate-800 inline-block">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
