import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Bot, Sparkles } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Interview AI Agent",
      description:
        "An advanced AI-powered platform designed to simulate real-world technical interviews, providing instant feedback and performance analytics. Breaking the barriers between preparation and performance.",
      tags: ["React", "Node.js", "Gemini AI", "Tailwind"],
      link: "#",
      github: "#",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
            Featured Projects
            <Sparkles className="text-emerald-400" />
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all duration-500 flex flex-col lg:flex-row"
            >
              {/* Image Side */}
              <div className="lg:w-1/2 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-emerald-400 mb-6 bg-emerald-500/10 w-fit px-4 py-1.5 rounded-full border border-emerald-500/20">
                  <Bot size={18} />
                  <span className="text-sm font-bold uppercase tracking-wider">
                    AI Powered
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-300 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-white hover:text-emerald-400 font-bold transition-colors"
                  >
                    Live Demo <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-400 hover:text-white font-bold transition-colors"
                  >
                    GitHub <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
