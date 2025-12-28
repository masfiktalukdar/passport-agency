import React from 'react';
import Layout from './components/Layout';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import MembersSection from './sections/MembersSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactForm from './sections/ContactForm';

function App() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <MembersSection />
      <TestimonialsSection />
      <ContactForm />
    </Layout>
  );
}

export default App;
