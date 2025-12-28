import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a6153299f58?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50/90 via-white/80 to-primary-50/90 mix-blend-overlay"></div>
      
      {/* Animated Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary-200/40 to-emerald-300/40 blur-[100px]"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-teal-200/40 to-primary-300/40 blur-[120px]"
      ></motion.div>

      <div className="container mx-auto px-4 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left relative"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/50 backdrop-blur-md border border-primary-100 text-primary-700 text-sm font-semibold mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Trusted by 5000+ Travelers
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Explore the World <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Without Limits</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            Your personal gateway to seamless travel. From student visas to work permits, we handle the complexities so you can focus on the journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services" 
              className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/30 text-center flex items-center justify-center gap-2 group"
            >
              Start Your Journey
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.8)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="bg-white/60 backdrop-blur-sm text-gray-800 border border-white/80 px-8 py-4 rounded-full font-bold hover:bg-white transition-all text-center shadow-lg shadow-gray-200/50"
            >
              Book Consultation
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Illustration / 3D Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
            <div className="relative z-10 w-full aspect-square max-w-md mx-auto">
                {/* Main Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-[2rem] shadow-2xl border border-white/50 p-6 flex flex-col justify-between overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    
                    <div className="relative flex justify-between items-start">
                         <div className="text-left">
                             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Destination</p>
                             <h3 className="text-3xl font-black text-gray-800 mt-1">LONDON, UK</h3>
                             <p className="text-sm text-primary-600 font-medium mt-1">Student Visa Approved</p>
                         </div>
                         <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-2xl border border-primary-100">
                            🇬🇧
                         </div>
                    </div>

                    <div className="relative mt-8 flex-grow flex items-center justify-center">
                         <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="text-9xl filter drop-shadow-2xl opacity-90"
                         >
                            ✈️
                         </motion.div>
                    </div>

                    <div className="relative bg-gray-900 text-white p-4 rounded-xl flex justify-between items-center mt-6">
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase">Flight No.</p>
                            <p className="font-mono font-bold">PV-880</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase">Gate</p>
                            <p className="font-mono font-bold">A12</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase">Seat</p>
                            <p className="font-mono font-bold">4F</p>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-10 -right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 z-20 flex items-center gap-3 w-48"
                >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-800">Visa Granted</p>
                        <p className="text-xs text-gray-500">Just now</p>
                    </div>
                </motion.div>

                 <motion.div 
                    animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 z-20 flex items-center gap-3"
                >
                     <div className="flex -space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-primary-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">+2k</div>
                     </div>
                    <div>
                        <p className="text-xs font-bold text-gray-800">Happy Clients</p>
                        <div className="flex text-yellow-400 text-xs">★★★★★</div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
