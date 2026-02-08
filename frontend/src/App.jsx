import React, { useState } from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Menu, X, CheckCircle } from 'lucide-react';
import logo from './assets/logo.png';
import QuoteEstimator from './QuoteEstimator';
import HeroSection from './HeroSection';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-hestia-blue sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              className="h-12 w-auto md:h-14" 
              src={logo} 
              alt="Hestia Facilities Logo" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="hover:text-hestia-teal transition-colors duration-200">Home</a>
            <a href="#services" className="hover:text-hestia-teal transition-colors duration-200">Services</a>
            <a href="#request-quote" className="hover:text-hestia-teal transition-colors duration-200">Contact Us</a>
            <a href="#" className="hover:text-hestia-teal transition-colors duration-200">Blogs</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#request-quote" className="bg-hestia-gold text-gray-900 font-bold py-2 px-6 rounded hover:bg-yellow-500 transition-colors duration-200 inline-block">
              Request a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-hestia-blue pb-4 px-4">
          <a href="#" className="block py-2 hover:text-hestia-teal">Home</a>
          <a href="#services" className="block py-2 hover:text-hestia-teal">Services</a>
          <a href="#request-quote" className="block py-2 hover:text-hestia-teal">Contact Us</a>
          <a href="#" className="block py-2 hover:text-hestia-teal">Blogs</a>
          <a href="#request-quote" className="block w-full mt-4 bg-hestia-gold text-center text-gray-900 font-bold py-2 px-6 rounded hover:bg-yellow-500 transition-colors duration-200">
            Request a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

const servicesData = {
  "Services Overview": [
    { title: "General Maintenance", desc: "Routine cleaning and upkeep for offices and retail spaces." },
    { title: "Floor Care", desc: "Strip, wax, buffing and deep carpet cleaning solutions." },
    { title: "Sanitization", desc: "Hospital-grade disinfection for high-touch surface areas." },
  ],
  "Cleaning Services": [
    { title: "Deep Cleaning", desc: "Intensive cleaning for neglected or high-traffic areas." },
    { title: "Window Washing", desc: "Interior and exterior window cleaning for crystal clear views." },
    { title: "Restroom Hygiene", desc: "Complete sanitization and restocking of restroom facilities." },
  ],
  "Special Requests": [
    { title: "Post-Construction", desc: "Debris removal and final detailing after building projects." },
    { title: "Event Cleanup", desc: "Pre and post-event cleaning services for venues." },
    { title: "Green Cleaning", desc: "Eco-friendly products and practices for sustainable care." },
  ]
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("Services Overview");

  return (
    <div id="services" className="bg-gray-50 py-16 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">
            Services Overview
          </h2>
          <div className="w-24 h-1 bg-hestia-teal mx-auto mt-4 rounded"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(servicesData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-hestia-teal text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData[activeTab].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 bg-gray-200 relative">
                 <img 
                  src={`https://placehold.co/400x300?text=${service.title.replace(' ', '+')}`}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>
                <button className="w-full bg-hestia-teal text-white font-semibold py-2 px-4 rounded hover:bg-teal-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-hestia-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: About */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-hestia-teal inline-block pb-2">
              Hestia Facilities
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Leading the way in commercial cleaning and facility management. We are dedicated to providing a clean, safe, and healthy environment for your business.
            </p>
          </div>

          {/* Col 2: Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-hestia-teal inline-block pb-2">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-hestia-teal" />
                <span>+1 (778) 871-5500</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-hestia-teal" />
                <span>hestiafacilitiesgroup@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-hestia-teal inline-block pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-hestia-gold transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-hestia-gold transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hestia-gold transition-colors">About Us</a></li>
              <li><a href="#request-quote" className="text-gray-300 hover:text-hestia-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 4: Social */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-hestia-teal inline-block pb-2">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-hestia-teal transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-hestia-teal transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-hestia-teal transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-hestia-teal transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Hestia Facilities. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      <Navbar />
      <HeroSection />
      <Services />
      <QuoteEstimator />
      <Footer />
    </div>
  );
}

export default App;