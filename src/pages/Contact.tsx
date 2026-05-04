import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await fetch('/api/contact', {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
            <h1 className="font-display text-7xl uppercase mb-8 leading-[0.9]">
              Connect <br /><span className="text-brand-red">With Us</span>
            </h1>
            <p className="text-white/50 max-w-sm font-light mb-12">
              Have questions about our services or need to reschedule? Send us a message and we'll respond as soon as possible.
            </p>

            <div className="space-y-10">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-gray border border-white/5 flex items-center justify-center text-brand-red shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Location</h4>
                    <p className="text-white/60 font-light leading-relaxed">
                      123 High St,<br />
                      Longview, TX 75601
                    </p>
                  </div>
               </div>
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-gray border border-white/5 flex items-center justify-center text-brand-red shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Phone</h4>
                    <p className="text-white/60 font-light leading-relaxed">(903) 555-0199</p>
                  </div>
               </div>
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-gray border border-white/5 flex items-center justify-center text-brand-red shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Email</h4>
                    <p className="text-white/60 font-light leading-relaxed">hello@cjsbarbershop.com</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-brand-gray p-8 md:p-12 border border-white/5">
            {isSubmitted ? (
               <motion.div 
                 initial={{ opacity: 0, y: 10 }} 
                 animate={{ opacity: 1, y: 0 }}
                 className="h-full flex flex-col items-center justify-center text-center py-12"
               >
                  <CheckCircle2 size={64} className="text-brand-red mb-6" />
                  <h3 className="font-display text-4xl uppercase mb-4">Message Received</h3>
                  <p className="text-white/60 font-light max-w-xs mx-auto">Thanks for reaching out, {formData.name.split(' ')[0]}! We'll get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-brand-red text-xs uppercase tracking-widest font-bold hover:underline"
                  >
                    Send another message
                  </button>
               </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 block ml-1">Your Name</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    placeholder="John Doe"
                    className="w-full bg-brand-dark border border-white/10 p-4 rounded-sm text-sm focus:outline-none focus:border-brand-red transition-colors"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 block ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    placeholder="john@example.com"
                    className="w-full bg-brand-dark border border-white/10 p-4 rounded-sm text-sm focus:outline-none focus:border-brand-red transition-colors"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 block ml-1">Message</label>
                  <textarea 
                    required
                    rows={6}
                    name="message"
                    placeholder="How can we help you today?"
                    className="w-full bg-brand-dark border border-white/10 p-4 rounded-sm text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-brand-red text-white py-5 uppercase tracking-[0.3em] font-bold text-sm mt-4 flex items-center justify-center gap-2 hover:bg-brand-red/90 transition-all disabled:opacity-50"
                >
                  {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Send Message <Send size={18} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
         <div className="h-96 w-full bg-brand-gray border border-white/5 rounded-sm overflow-hidden flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000" />
            <div className="relative z-10 text-center">
               <MapPin className="text-brand-red mx-auto mb-4" size={48} />
               <h4 className="font-display text-2xl uppercase">Visit Us In Longview</h4>
               <p className="text-white/40 text-xs tracking-widest uppercase mt-2">123 High St, TX 75601</p>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
