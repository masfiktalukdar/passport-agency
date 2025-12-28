import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "The team made my student visa process incredibly smooth. I'm now studying at my dream university in Canada!",
    author: "Fatima Rahman",
    role: "Student, University of Toronto",
    initial: "FR"
  },
  {
    id: 2,
    content: "Excellent service for work permits. They guided me through every step of the documentation. Highly recommended.",
    author: "Tanvir Ahmed",
    role: "Software Engineer, Berlin",
    initial: "TA"
  },
  {
    id: 3,
    content: "My family's tourist visas for the UK were approved in record time. Professional and reliable agency.",
    author: "Mrs. Khan",
    role: "Business Owner",
    initial: "MK"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary-900 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-800 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-700 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <span className="text-primary-300 font-semibold tracking-wider uppercase text-sm">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">What Our Clients Say</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-3xl font-serif">
                "
            </div>

            <div className="relative h-[300px] md:h-[200px] flex items-center justify-center">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="text-center"
                    >
                        <p className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed text-gray-100">
                            "{testimonials[currentIndex].content}"
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-lg">
                                {testimonials[currentIndex].initial}
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-white">{testimonials[currentIndex].author}</h4>
                                <p className="text-primary-300 text-sm">{testimonials[currentIndex].role}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 md:absolute md:top-1/2 md:-translate-y-1/2 md:w-full md:left-0 md:px-4 pointer-events-none">
                 <button 
                    onClick={prev}
                    className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors md:-ml-16 backdrop-blur-md"
                 >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                 </button>
                 <button 
                    onClick={next}
                    className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors md:-mr-16 backdrop-blur-md"
                 >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                 </button>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary-400 w-6' : 'bg-white/20 hover:bg-white/40'}`}
                    />
                ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
