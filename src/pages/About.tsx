import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Users, Heart, Target } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Serving', value: '6+' },
    { label: 'Happy Clients', value: '5k+' },
    { label: 'Master Barbers', value: '4' },
    { label: 'Styles Mastered', value: '50+' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-brand-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Story</span>
            <h1 className="font-display text-7xl uppercase mb-8 leading-[0.9]">
              Grooming <br />With <span className="text-brand-red">Passion</span>
            </h1>
            <div className="space-y-6 text-white/70 leading-relaxed font-light text-lg">
              <p>
                Founded in 2018 by CJ, a master barber with over 15 years of industry experience, CJ's Barbershop & Beauty Salon started with a simple vision: to provide a grooming sanctuary where tradition meets modern excellence.
              </p>
              <p>
                Located in the heart of Longview, TX, we've built a community around precision, craft, and authentic conversation. We aren't just cutting hair; we're building confidence.
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[4/5] bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-red p-8 hidden md:block">
                <Scissors className="w-full h-full text-white/20 absolute bottom-4 right-4" />
                <span className="relative z-10 font-display text-4xl block">EST. 2018</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-y border-white/5 py-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-5xl text-brand-red mb-2">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Target />, title: "Our Mission", text: "To provide every client with a superior grooming experience through technical mastery and personalized service." },
              { icon: <Heart />, title: "Our Values", text: "Integrity, excellence, and community. We treat every head like a canvas and every client like family." },
              { icon: <Users />, title: "Expert Team", text: "Our barbers are artists. We continuously train on modern trends while respecting classic techniques." },
            ].map((item, i) => (
              <div key={i} className="bg-brand-gray p-10 border border-white/5">
                <div className="text-brand-red mb-6">{React.cloneElement(item.icon as React.ReactElement, { size: 32 })}</div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
