import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Clock, ArrowRight } from 'lucide-react';
import { SERVICES, PACKAGES } from '../constants';
import { NavLink } from 'react-router-dom';

export default function Services() {
  const categories = ["Haircuts", "Beard & Shave", "Beauty & Styling", "Exclusive Packages"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-brand-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4 block">The Menu</span>
          <h1 className="font-display text-7xl uppercase mb-8 leading-[0.9]">
            Professional <br /> Services
          </h1>
          <p className="text-white/60 max-w-xl font-light">
            We offer a comprehensive range of grooming services and exclusive bundles. Each appointment includes a consultation to ensure we match your style and needs perfectly.
          </p>
        </header>

        <div className="space-y-32">
          {categories.map((cat) => (
            <div key={cat}>
              <h2 className="text-2xl uppercase tracking-[0.2em] font-bold mb-12 flex items-center gap-4">
                <span className="text-brand-red">{cat}</span>
                <div className="h-px bg-white/10 flex-grow" />
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {cat === "Exclusive Packages" ? (
                  PACKAGES.map((pkg) => (
                    <div key={pkg.id} className="group border border-white/5 bg-brand-gray/30 p-8 rounded-sm hover:border-brand-red/30 transition-all">
                       <div className="flex justify-between items-start mb-6">
                          <h3 className="text-xl font-bold uppercase group-hover:text-brand-red transition-colors">{pkg.name}</h3>
                          <span className="text-2xl font-display text-white/90">{pkg.price}</span>
                       </div>
                       <ul className="space-y-3 mb-6">
                          {pkg.services.map((s, i) => (
                            <li key={i} className="text-[10px] uppercase tracking-[0.15em] text-white/40 flex items-center gap-2">
                              <div className="w-1 h-1 bg-brand-red rounded-full" /> {s}
                            </li>
                          ))}
                       </ul>
                       <p className="text-white/30 text-xs italic font-light">{pkg.description}</p>
                    </div>
                  ))
                ) : (
                  SERVICES.filter(s => s.category === cat).map((service) => (
                    <div key={service.id} className="group flex justify-between items-start border-b border-white/5 pb-8">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-brand-red transition-colors">{service.name}</h3>
                        <p className="text-white/40 font-light text-sm mb-4 max-w-md">{service.description}</p>
                        <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/30">
                          <span className="flex items-center gap-1"><Clock size={12} /> {service.duration}</span>
                        </div>
                      </div>
                      <div className="text-2xl font-display text-white/90 ml-6">
                        {service.price}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-32 p-12 bg-brand-gray border border-white/5 rounded-sm flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold uppercase mb-2">Not sure what you need?</h3>
            <p className="text-white/50 font-light">Our master barbers are happy to provide recommendations during your visit.</p>
          </div>
          <NavLink 
            to="/booking" 
            className="bg-brand-red text-white px-10 py-4 uppercase tracking-[0.2em] font-bold text-sm flex items-center gap-2 hover:bg-brand-red/90 transition-all"
          >
            Book Now <ArrowRight size={18} />
          </NavLink>
        </section>
      </div>
    </motion.div>
  );
}
