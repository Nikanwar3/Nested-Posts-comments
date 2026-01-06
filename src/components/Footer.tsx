import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Study Visa',
    'Work Visa',
    'Tourist Visa',
    'PR Process',
    'Documentation',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-yellow-400" />
              <div>
                <h3 className="font-bold text-xl">Lexora</h3>
                <p className="text-sm text-blue-200">Global Visa Consultancy</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Your Gateway to Global Opportunities. We provide comprehensive visa solutions for study, work, tourism, and permanent residency worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/testimonials"
                  className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-yellow-400">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-yellow-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-blue-200 text-sm">
                  123 Business Plaza, Downtown Area<br />
                  New York, NY 10001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 text-sm">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="mailto:info@lexora.com" className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 text-sm">
                  info@lexora.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © {currentYear} Lexora Global Visa Consultancy. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors duration-300">
                Terms & Conditions
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors duration-300">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;