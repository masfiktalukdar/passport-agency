import React from "react";
import { motion } from "framer-motion";

const MembersSection = () => {
  // Placeholder members
  const members = [
    {
      name: "Kawsar Ahmed",
      role: 772607,
      images: null,
    },
    {
      name: "Sakib al hasan",
      role: 772575,
      images: null,
    },
    {
      name: "Sami",
      role: 772574,
      images: null,
    },
    {
      name: "Siam",
      role: 772613,
      images: null,
    },
  ];

  return (
    <section id="members" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary-200/20 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
            Meet the Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Dedicated professionals working tirelessly to make your global
            dreams come true.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500"
            >
              {/* Image Area */}
              <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/60 z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Placeholder Avatar / Icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 group-hover:scale-105 transition-transform duration-700">
                  <svg
                    className="w-24 h-24 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>

              {/* Info Area */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="h-1 w-12 bg-primary-400 mb-4 rounded-full"></div>
                <h3 className="text-xl font-bold leading-tight mb-1 group-hover:text-primary-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm font-medium tracking-wide uppercase opacity-90">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
