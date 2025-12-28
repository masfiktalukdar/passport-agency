import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Passport&Visa</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for international travel documentation. We simplify the process for students and employees.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Passport Assistance</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Visa Application</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Consultancy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Document Verification</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>123 Embassy Road</li>
              <li>Dhaka, Bangladesh</li>
              <li>+880 1234 567890</li>
              <li>info@passportvisa.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Passport & Visa Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
