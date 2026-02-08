import React from 'react';
import { ArrowRight } from 'lucide-react';
import mainImage from './assets/mainImage.jpeg';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mainImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-hestia-blue/90 via-hestia-blue/80 to-hestia-teal/70" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-sm">
            Excellence in Commercial <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
              Hygiene & Maintenance
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed max-w-2xl font-light">
            Elevate your business environment with our professional cleaning services. 
            We deliver reliable, high-quality solutions tailored for offices, strata, and industrial facilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#request-quote"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 bg-hestia-gold rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 transform group"
            >
              REQUEST A QUOTE
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white/30 bg-white/5 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              VIEW SERVICES
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
