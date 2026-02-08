import React, { useState } from 'react';
import { Building2, Factory, Home, MapPin, FileText, Calendar, Clock, ArrowRight, CheckCircle, Zap } from 'lucide-react';

const QuoteEstimator = () => {
  // State for inputs
  const [facilityType, setFacilityType] = useState('commercial');
  const [frequency, setFrequency] = useState('recurring');
  const [priority, setPriority] = useState('flexible');
  const [location, setLocation] = useState('');
  const [jobDetails, setJobDetails] = useState('');

  // Facility Options
  const facilityOptions = [
    { id: 'residential', label: 'Residential', icon: Home, placeholder: 'Number of bedrooms, deep clean needs...' },
    { id: 'commercial', label: 'Office / Retail', icon: Building2, placeholder: 'Square footage, access hours, number of desks...' },
    { id: 'industrial', label: 'Industrial / Strata', icon: Factory, placeholder: 'Warehouse size, machinery details, safety requirements...' },
  ];

  const currentPlaceholder = facilityOptions.find(opt => opt.id === facilityType)?.placeholder || 'Describe your specific needs...';

  return (
    <section id="request-quote" className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 font-sans scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-hestia-blue mb-4">
            Request a Service
          </h2>
          <div className="inline-flex items-center gap-2 bg-hestia-blue/5 px-4 py-2 rounded-full text-hestia-blue font-semibold text-sm">
             <CheckCircle size={16} className="text-hestia-teal"/>
            <span>Professional Cleaning Solutions for Every Space</span>
          </div>
        </div>

        {/* Component Container */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-hestia-blue/10 overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Left Side: Controls */}
          <div className="flex-1 p-8 lg:p-12 space-y-10">
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Configure Your Service Plan</h3>
              <p className="text-gray-500 text-sm">
                Select your facility type and service preferences below.
              </p>
            </div>

            {/* 1. Facility Type Selection */}
            <div className="space-y-4">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                Facility Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {facilityOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setFacilityType(option.id)}
                    className={`relative p-5 rounded-2xl border transition-all duration-300 ease-out flex flex-col justify-center items-center gap-4 group h-36 ${
                      facilityType === option.id
                        ? 'border-hestia-teal bg-hestia-teal/5 shadow-lg scale-[1.02]'
                        : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`p-3 rounded-full transition-colors duration-300 ${
                      facilityType === option.id ? 'bg-hestia-teal text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                    }`}>
                      <option.icon size={24} />
                    </div>
                    <span className={`font-bold text-sm text-center ${facilityType === option.id ? 'text-hestia-blue' : 'text-gray-600'}`}>
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Frequency & Priority */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Frequency Segmented Control */}
                <div className="space-y-4">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <Calendar size={14} /> Frequency
                    </label>
                    <div className="bg-gray-100 p-1.5 rounded-xl flex relative">
                        {['One-Time', 'Recurring', 'Special'].map((freq) => {
                            const isActive = frequency === freq.toLowerCase();
                            return (
                                <button
                                    key={freq}
                                    onClick={() => setFrequency(freq.toLowerCase())}
                                    className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 relative z-10 ${
                                        isActive ? 'text-hestia-blue shadow-sm bg-white' : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    {freq}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Priority Toggle */}
                <div className="space-y-4">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <Clock size={14} /> Timeline Priority
                    </label>
                    <div className="flex bg-gray-100 p-1.5 rounded-xl">
                        <button
                            onClick={() => setPriority('flexible')}
                            className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                                priority === 'flexible' ? 'bg-white text-hestia-blue shadow-sm' : 'text-gray-500'
                            }`}
                        >
                           <span>Flexible</span>
                        </button>
                        <button
                            onClick={() => setPriority('urgent')}
                            className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                                priority === 'urgent' ? 'bg-white text-rose-500 shadow-sm' : 'text-gray-500'
                            }`}
                        >
                           {priority === 'urgent' && <Zap size={14} className="fill-current" />}
                           <span>Urgent / ASAP</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. Location & Description */}
            <div className="space-y-6">
                 <div className="space-y-4">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                    <MapPin size={14} /> Site Location
                    </label>
                    <div className="relative group">
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter property address"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-hestia-teal/20 focus:border-hestia-teal transition-all pl-10"
                    />
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-hestia-teal transition-colors" size={18} />
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <FileText size={14} /> Job Details
                    </label>
                    <textarea
                        value={jobDetails}
                        onChange={(e) => setJobDetails(e.target.value)}
                        placeholder={currentPlaceholder}
                        className="w-full h-32 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-hestia-teal/20 focus:border-hestia-teal transition-all resize-none placeholder-gray-400"
                    ></textarea>
                </div>
            </div>

          </div>

          {/* Right Side: Proposal Summary & Capture */}
          <div className="w-full lg:w-96 bg-hestia-blue text-white p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-hestia-teal opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-6">Your Custom Plan</h3>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-sm space-y-4">
                   
                   {/* Summary List */}
                   <ul className="space-y-3">
                       <li className="flex items-center gap-3 text-sm font-medium">
                           <div className="bg-hestia-teal p-1.5 rounded-md">
                                {facilityType === 'residential' && <Home size={14} />}
                                {facilityType === 'commercial' && <Building2 size={14} />}
                                {facilityType === 'industrial' && <Factory size={14} />}
                           </div>
                           <span className="capitalize">{facilityType} Cleaning</span>
                       </li>
                       <li className="flex items-center gap-3 text-sm font-medium">
                           <div className="bg-hestia-teal p-1.5 rounded-md">
                                <Calendar size={14} />
                           </div>
                           <span className="capitalize">{frequency} Service</span>
                       </li>
                       <li className="flex items-center gap-3 text-sm font-medium">
                           <div className={`p-1.5 rounded-md ${priority === 'urgent' ? 'bg-rose-500' : 'bg-hestia-teal'}`}>
                                <Clock size={14} />
                           </div>
                           <span className="capitalize">{priority === 'urgent' ? 'Urgent Priority' : 'Flexible Schedule'}</span>
                       </li>
                   </ul>

                   <div className="pt-4 border-t border-white/10">
                        <p className="text-xs text-white/60 leading-relaxed">
                            Complete the form below to receive your tailored quote for this configuration.
                        </p>
                   </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-white/50 uppercase ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:bg-white/10 focus:border-hestia-teal transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-white/50 uppercase ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="jane@company.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:bg-white/10 focus:border-hestia-teal transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-white/50 uppercase ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:bg-white/10 focus:border-hestia-teal transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10">
              <button className="w-full group bg-hestia-gold hover:scale-[1.02] text-hestia-blue font-bold text-lg py-4 rounded-xl shadow-xl shadow-black/20 transition-all duration-300 flex items-center justify-center gap-3">
                Request Custom Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default QuoteEstimator;
