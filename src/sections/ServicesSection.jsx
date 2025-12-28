import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: '🎓',
    title: 'Student Visa',
    description: 'Expert guidance for university admissions and student visa processing for top destinations.'
  },
  {
    icon: '💼',
    title: 'Work Permit',
    description: 'Secure your dream job abroad with our comprehensive work permit assistance.'
  },
  {
    icon: '🛂',
    title: 'Passport Assistance',
    description: 'New passport applications and renewals made easy and hassle-free.'
  },
  {
    icon: '✈️',
    title: 'Tourist Visa',
    description: 'Plan your holiday with ease. We handle the visa formalities for you.'
  },
  {
    icon: '📝',
    title: 'Documentation',
    description: 'Complete assistance with document attestation, translation, and verification.'
  },
  {
    icon: '🌍',
    title: 'Immigration',
    description: 'Professional advice for permanent residency and immigration pathways.'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Premium Services for Global Citizens</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer end-to-end solutions for all your travel and migration needs. Whether you are a student or a professional, we have you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <span className="group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
