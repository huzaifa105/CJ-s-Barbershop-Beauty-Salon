import React from 'react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Scissors, Star, Clock, MapPin, ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import { TESTIMONIALS, SERVICES, PACKAGES } from '../constants';

const PageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export default function Home() {
  return (
    <motion.div
      variants={PageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-brand-dark"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full pt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Longview's Premium Grooming</span>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.85] mb-8">
              Precision <br />
              <span className="text-brand-red">Meets</span> Style.
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-md font-light leading-relaxed">
              Experience the art of grooming at CJ's. From classic tapers to modern styling, we deliver sharp looks and exceptional vibes.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink 
                to="/booking" 
                className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 uppercase tracking-widest font-bold text-sm flex items-center gap-2 transition-all hover:gap-4"
              >
                Book Appointment <ArrowRight size={18} />
              </NavLink>
              <NavLink 
                to="/services" 
                className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 uppercase tracking-widest font-bold text-sm transition-all"
              >
                Our Services
              </NavLink>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-white/20 to-transparent rounded-full" />
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-24 px-6 bg-brand-gray">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Premium Offerings</span>
              <h2 className="font-display text-5xl uppercase">Popular Services</h2>
            </div>
            <NavLink to="/services" className="text-sm uppercase tracking-widest text-white/60 hover:text-brand-red font-bold transition-colors mb-2">
              View All Services
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-brand-dark p-8 border border-white/5 hover:border-brand-red/30 transition-all"
              >
                <div className="text-brand-red mb-6 group-hover:scale-110 transition-transform flex justify-between items-start">
                  <Scissors className="w-8 h-8" />
                  <span className="font-display text-2xl text-white/90">{service.price}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{service.name}</h3>
                <p className="text-white/50 text-sm font-light mb-6 line-clamp-2">{service.description}</p>
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
                  <span className="flex items-center gap-1"><Clock size={14} /> {service.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages Section */}
      <section className="py-24 px-6 bg-brand-dark overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 skew-x-12 translate-x-32" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Curated Experiences</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase mb-6">Premium Packages</h2>
            <p className="text-white/40 max-w-xl mx-auto font-light">Elevate your grooming routine with our handcrafted bundles designed for the modern gentleman.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-1 border ${pkg.tag ? 'border-brand-red/50 scale-105 z-10' : 'border-white/5 opacity-80'} bg-brand-gray/50 backdrop-blur-sm group`}
              >
                {pkg.tag && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] uppercase tracking-widest px-4 py-1 font-bold">
                    {pkg.tag}
                  </div>
                )}
                <div className="p-8 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="font-display text-2xl uppercase tracking-tight">{pkg.name}</h3>
                    <div className="text-3xl font-display text-brand-red">{pkg.price}</div>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.services.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/70">
                        <CheckCircle2 size={14} className="text-brand-red shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-white/40 italic mb-8 font-light leading-relaxed border-t border-white/5 pt-6">
                    {pkg.description}
                  </p>
                  <NavLink 
                    to="/booking" 
                    className={`w-full py-4 text-center uppercase tracking-widest font-bold text-xs transition-all ${pkg.tag ? 'bg-brand-red text-white' : 'border border-white/10 text-white/80 hover:bg-white/5'}`}
                  >
                    Select Package
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-brand-gray border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 text-white/5 font-display text-[20rem] -translate-x-1/4 -translate-y-1/4 select-none">"</div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 mb-20 text-center md:text-left">
            <div>
              <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Client Trust</span>
              <h2 className="font-display text-5xl md:text-6xl uppercase">The CJ Style Experience</h2>
            </div>
            <div className="flex items-center gap-4 bg-brand-dark p-4 border border-white/5 px-8">
               <div className="text-center pr-8 border-r border-white/10">
                  <div className="font-display text-3xl text-brand-red">4.9/5</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Google Rating</div>
               </div>
               <div className="pl-4">
                  <div className="flex gap-1 text-brand-red mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Based on 500+ reviews</div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-brand-dark p-10 border border-white/5 relative group hover:border-brand-red/30 transition-all duration-500"
              >
                <Quote className="text-brand-red mb-6 opacity-40 group-hover:opacity-100 transition-opacity" size={32} />
                <p className="text-white/80 font-light leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gray border border-brand-red/20 flex items-center justify-center font-display text-brand-red uppercase">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-[0.2em] font-bold">{t.name}</span>
                    <span className="block text-[10px] text-brand-red uppercase tracking-widest opacity-60">Verified Client</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-red text-center px-6">
        <h2 className="font-display text-6xl md:text-8xl uppercase mb-8 leading-none">Ready for a <br />New Look?</h2>
        <p className="text-white/90 mb-12 max-w-lg mx-auto font-medium">Join the elite list of gentlemen in Longview who trust CJ's for their grooming needs.</p>
        <NavLink 
          to="/booking" 
          className="bg-brand-dark text-white hover:bg-brand-dark/90 px-12 py-5 uppercase tracking-[0.2em] font-bold text-sm inline-block transition-transform hover:scale-105"
        >
          Book Your Spot Now
        </NavLink>
      </section>
    </motion.div>
  );
}
