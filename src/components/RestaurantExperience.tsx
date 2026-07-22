import React from 'react';
import { AMBIANCE_IMAGE } from '../data/restaurantData';
import { ArrowRight, CheckCircle2, Flame, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

interface RestaurantExperienceProps {
  onOpenReservation: () => void;
}

export const RestaurantExperience: React.FC<RestaurantExperienceProps> = ({ onOpenReservation }) => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-white border-b border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left: Image Stack with Editorial Layout */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative flex flex-col justify-between"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group h-full flex flex-col justify-end">
              <img
                src={AMBIANCE_IMAGE}
                alt="Flavoria Restaurant Dining Ambiance"
                className="w-full h-full min-h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating Quote Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-neutral-100 shadow-lg text-[#111111]">
                <p className="font-serif italic text-sm md:text-base text-neutral-800">
                  "Food is not just sustenance; it is a story of craft, soil, passion, and human connection."
                </p>
                <div className="mt-2 text-xs font-heading font-bold text-[#FF5B3E] uppercase tracking-wider">
                  — Chef Alessandro Rossi, Executive Head
                </div>
              </div>
            </div>

            {/* Accent Floating Number Box */}
            <div className="absolute -top-6 -left-6 bg-[#FFD84D] text-[#111111] p-5 rounded-2xl shadow-xl hidden sm:block border border-black/10">
              <span className="font-heading text-3xl font-extrabold block">15+</span>
              <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-neutral-800">Years Of Excellence</span>
            </div>
          </motion.div>

          {/* Right: Editorial Storytelling Copy */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 space-y-6 flex flex-col justify-between"
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">
              Crafted With Passion. <br />
              <span className="font-serif italic font-normal text-[#FF5B3E]">Served With Gratitude.</span>
            </h2>

            <p className="font-sans text-neutral-600 text-base md:text-lg leading-relaxed">
              At Flavoria, dining is a multi-sensory journey. From the moment you enter our softly lit dining room, every element—from custom porcelain plates to acoustic harmonies—is designed to elevate your time with us.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 group">
                <div className="p-1.5 bg-[#FF5B3E]/10 text-[#FF5B3E] rounded-lg mt-0.5 group-hover:bg-[#FF5B3E] group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#111111] group-hover:text-[#FF5B3E] transition-colors">100% Farm-Direct Sourcing</h4>
                  <p className="text-sm text-neutral-500">We partner directly with sustainable local farmers for heritage vegetables, organic dairy, and wild seafood.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-1.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-lg mt-0.5 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#111111] group-hover:text-[#D4AF37] transition-colors">Artisanal Cooking Techniques</h4>
                  <p className="text-sm text-neutral-500">Our open wood-fired kitchen blends ancient charcoal grilling with modern precision sous-vide methods.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-1.5 bg-[#111111]/10 text-[#111111] rounded-lg mt-0.5 group-hover:bg-[#111111] group-hover:text-white transition-colors">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#111111] transition-colors">Uncompromising Warm Hospitality</h4>
                  <p className="text-sm text-neutral-500">Every guest is treated as a honored family member with attentive, personalized table service.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#FF5B3E] text-white font-heading font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                BOOK YOUR EXPERIENCE
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

