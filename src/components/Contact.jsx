import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 blur-[120px] rounded-full -z-10"></div>
        
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together.</h2>
            <p className="text-lg text-slate-400 mb-12 max-w-lg leading-relaxed">
              I'm currently looking for new opportunities in <span className="text-emerald-400">Frontend Technology</span>. 
              If you have a project in mind or just want to say hi, feel free to reach out.
            </p>

            <div className="space-y-8">
              <a href="mailto:anujsaini9006@gmail.com" className="flex items-center gap-6 group">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email Me At</p>
                  <p className="text-xl text-slate-200 font-bold group-hover:text-emerald-400 transition-colors">anujsaini9006@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919899250565" className="flex items-center gap-6 group">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Call Me</p>
                  <p className="text-xl text-slate-200 font-bold group-hover:text-emerald-400 transition-colors">+91 9899250565</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Office Location</p>
                  <p className="text-xl text-slate-200 font-bold">Faridabad, Haryana, India</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="Inquiry about project"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button className="w-full group px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 transition-all">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <footer className="mt-24 pt-12 border-t border-slate-800/50 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Anuj Saini. All rights reserved.</p>
        <p className="mt-2">Designed with Passion & React</p>
      </footer>
    </section>
  );
};

export default Contact;
