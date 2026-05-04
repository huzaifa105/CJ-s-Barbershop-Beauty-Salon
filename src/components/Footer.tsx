import React, { useEffect, useState } from 'react';
import { Config } from '../types';
import { Scissors, Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  const [config, setConfig] = useState<Config | null>(null);

  useEffect(() => {
    fetch('/api/config')
      .then(res => res.json())
      .then(data => setConfig(data))
      .catch(err => console.error(err));
  }, []);

  const currentYear = config?.year || new Date().getFullYear();
  const businessName = config?.businessName || "CJ's Barbershop & Beauty Salon";

  return (
    <footer className="bg-brand-gray pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="bg-brand-red p-2 rounded-sm">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-2xl uppercase">{businessName}</span>
          </div>
          <p className="text-white/60 leading-relaxed font-light">
            Providing premium grooming services in Longview since 2018. Experience the difference of a professional cut in a modern, welcoming atmosphere.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-brand-red transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-brand-red transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-white/90">Navigation</h4>
          <ul className="space-y-4">
            <li><NavLink to="/" className="text-white/60 hover:text-brand-red transition-colors">Home</NavLink></li>
            <li><NavLink to="/about" className="text-white/60 hover:text-brand-red transition-colors">About Us</NavLink></li>
            <li><NavLink to="/services" className="text-white/60 hover:text-brand-red transition-colors">Our Services</NavLink></li>
            <li><NavLink to="/booking" className="text-white/60 hover:text-brand-red transition-colors">Book Appointment</NavLink></li>
            <li><NavLink to="/contact" className="text-white/60 hover:text-brand-red transition-colors">Contact</NavLink></li>
          </ul>
        </div>

        <div>
           <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-white/90">Contact Info</h4>
           <div className="space-y-4 text-white/60">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red mt-1 flex-shrink-0" />
                <p>123 High St,<br />Longview, TX 75601</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
                <p>(903) 555-0199</p>
              </div>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-center text-xs text-white/40 tracking-widest uppercase">
        <p>© {currentYear} {businessName} | Developed by Serwizen.</p>
      </div>
    </footer>
  );
}
