import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { CheckCircle2, ChevronRight, Calendar, Clock, User, Phone, Scissors } from 'lucide-react';

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="pt-48 pb-24 px-6 flex items-center justify-center bg-brand-dark">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-brand-gray p-12 text-center border border-brand-red/30"
        >
          <div className="w-20 h-20 bg-brand-red text-white rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="font-display text-4xl uppercase mb-4 text-white">Booking Confirmed!</h1>
          <p className="text-white/60 font-light mb-8 italic">"You’re one step closer to looking your absolute best."</p>
          <div className="bg-brand-dark/50 p-6 text-left space-y-3 mb-8 border border-white/5 rounded-sm">
             <div className="flex justify-between text-xs uppercase tracking-widest"><span className="text-white/30">Client</span> <span>{formData.name}</span></div>
             <div className="flex justify-between text-xs uppercase tracking-widest"><span className="text-white/30">Service</span> <span>{formData.service}</span></div>
             <div className="flex justify-between text-xs uppercase tracking-widest"><span className="text-white/30">Date</span> <span>{formData.date}</span></div>
             <div className="flex justify-between text-xs uppercase tracking-widest"><span className="text-white/30">Time</span> <span>{formData.time}</span></div>
          </div>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-brand-red uppercase tracking-widest font-bold text-xs hover:underline"
          >
            New Booking
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-brand-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Reservations</span>
            <h1 className="font-display text-7xl uppercase mb-8 leading-[0.9]">
              Secure Your <br /><span className="text-brand-red">Session</span>
            </h1>
            <p className="text-white/50 max-w-sm font-light mb-12">
              Walk-ins are welcome, but preferred sessions go fast. Book ahead to ensure your favorite barber is ready for you.
            </p>
            
            <div className="space-y-8">
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-sm bg-brand-gray border border-white/5 flex items-center justify-center text-brand-red shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Select Your Date</h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed">Choose a day that fits your schedule. We operate Mon-Sat.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-sm bg-brand-gray border border-white/5 flex items-center justify-center text-brand-red shrink-0">
                    <Scissors size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Pick a Service</h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed">From quick fades to full luxury treatments.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-brand-gray p-8 md:p-12 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 -rotate-45 translate-x-10 -translate-y-10" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 block ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input 
                      required
                      type="text" 
                      name="name"
                      placeholder="John Doe"
                      className="w-full bg-brand-dark border border-white/10 p-4 pl-12 rounded-sm text-sm focus:outline-none focus:border-brand-red transition-colors"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 block ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      placeholder="(903) 000-0000"
                      className="w-full bg-brand-dark border border-white/10 p-4 pl-12 rounded-sm text-sm focus:outline-none focus:border-brand-red transition-colors"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 block ml-1">Select Service</label>
                <select 
                  required
                  name="service"
                  className="w-full bg-brand-dark border border-white/10 p-4 rounded-sm text-sm focus:outline-none focus:border-brand-red transition-colors appearance-none"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Choose a service...</option>
                  {SERVICES.map(s => <option key={s.id} value={`${s.name} (${s.price})`}>{s.name} - {s.price}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 block ml-1">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input 
                      required
                      type="date" 
                      name="date"
                      className="w-full bg-brand-dark border border-white/10 p-4 pl-12 rounded-sm text-sm focus:outline-none focus:border-brand-red transition-colors"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 block ml-1">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input 
                      required
                      type="time" 
                      name="time"
                      className="w-full bg-brand-dark border border-white/10 p-4 pl-12 rounded-sm text-sm focus:outline-none focus:border-brand-red transition-colors"
                      value={formData.time}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-brand-red text-white py-5 uppercase tracking-[0.3em] font-bold text-sm mt-4 flex items-center justify-center gap-2 hover:bg-brand-red/90 transition-all disabled:opacity-50"
              >
                {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Confirm Booking <ChevronRight size={18} /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
