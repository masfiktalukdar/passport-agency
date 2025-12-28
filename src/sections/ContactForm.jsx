import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Student Visa',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
        // Add a new document with a generated id.
        await addDoc(collection(db, "inquiries"), {
            ...formData,
            timestamp: new Date()
        });
        
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: 'Student Visa', message: '' });
    } catch (error) {
        console.error("Error adding document: ", error);
        setStatus('error'); // You might want to handle error state in UI
        alert("Failed to send message. Please check your connection or Firebase config.");
    } finally {
        setLoading(false);
        setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            
            {/* Contact Info Side */}
            <div className="bg-primary-600 p-10 text-white flex flex-col justify-between">
                <div>
                    <h3 className="text-3xl font-bold mb-2">Let's Connect</h3>
                    <p className="text-primary-100 mb-8">We'd love to hear from you. Start your journey with us today.</p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary-500/50 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Visit Us</h4>
                                <p className="text-primary-100 text-sm leading-relaxed">123 Embassy Road,<br/> Dhaka 1212, Bangladesh</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                             <div className="w-10 h-10 rounded-full bg-primary-500/50 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                             </div>
                            <div>
                                <h4 className="font-semibold text-lg">Call Us</h4>
                                <p className="text-primary-100 text-sm">+880 1234 567890</p>
                                <p className="text-primary-100 text-sm text-xs mt-1">Mon-Fri, 9am - 6pm</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary-500/50 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Email Us</h4>
                                <p className="text-primary-100 text-sm">info@passportvisa.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-10 border-t border-primary-500/30">
                    <p className="text-sm text-primary-200"> Follow us on social media for updates.</p>
                    <div className="flex gap-4 mt-4">
                         {/* Social Icons Placeholder */}
                         {[1, 2, 3].map(i => (
                             <div key={i} className="w-8 h-8 rounded-lg bg-primary-500/30 hover:bg-white hover:text-primary-600 transition-all flex items-center justify-center cursor-pointer">
                                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
                             </div>
                         ))}
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Full Name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Phone</label>
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                                placeholder="+880..."
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Service Required</label>
                        <select 
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                        >
                            <option>Student Visa</option>
                            <option>Work Permit</option>
                            <option>Passport Assistance</option>
                            <option>Tourist Visa</option>
                            <option>Consultancy</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Message</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                            placeholder="Tell us about your requirements..."
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-primary-600 text-white font-semibold py-4 rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                        {!loading && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
                    </button>

                    {status === 'success' && (
                        <p className="text-green-600 text-center text-sm font-medium animate-pulse">Message sent successfully! We will contact you soon.</p>
                    )}
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
