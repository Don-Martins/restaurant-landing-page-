import React from 'react';
import { AMBIANCE_IMAGE } from '../data/restaurantData';
import { ArrowRight01Icon, CheckmarkCircle02Icon, FireIcon, UserGroupIcon } from 'hugeicons-react';
import { motion } from 'motion/react';

interface RestaurantExperienceProps {
  onOpenReservation: () => void;
}

export const RestaurantExperience: React.FC<RestaurantExperienceProps> = ({ onOpenReservation }) => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#F4F1E8] text-[#2D3A1F] border-b border-[#CDD2C9] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left: Image Stack with Editorial Layout */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative flex flex-col justify-between"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#E8E2D0] group h-full flex flex-col justify-end">
              <img
                src={AMBIANCE_IMAGE}
                alt="Flavoria Restaurant Dining Ambiance"
                className="w-full h-full min-h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/80 via-transparent to-transparent"></div>

              {/* Floating Quote Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#F4F1E8]/95 backdrop-blur-md p-5 rounded-2xl border border-[#CDD2C9] shadow-lg text-[#2D3A1F]">
                <p className="font-heading italic text-sm md:text-base text-[#2D3A1F]">
                  "Food is not just sustenance; it is a story of craft, soil, passion, and human connection."
                </p>
                <div className="mt-2 text-xs font-heading font-bold text-[#B8A678] uppercase tracking-wider">
                  — Chef Alessandro Rossi, Executive Head
                </div>
              </div>
            </div>

            {/* Accent Floating Number Box */}
            <div className="absolute -top-6 -left-6 bg-[#B8A678] text-[#2D3A1F] p-5 rounded-2xl shadow-xl hidden sm:block border border-[#2D3A1F]/10">
              <span className="font-heading text-3xl font-extrabold block">15+</span>
              <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-[#2D3A1F]">Years Of Excellence</span>
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
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2D3A1F] leading-tight">
              Crafted With Passion. <br />
              <span className="font-heading italic font-bold text-[#B8A678]">Served With Gratitude.</span>
            </h2>

            <p className="font-sans text-[#2D3A1F]/80 text-base md:text-lg leading-relaxed font-light">
              At Flavoria, dining is a multi-sensory journey. From the moment you enter our softly lit dining room, every element—from custom porcelain plates to acoustic harmonies—is designed to elevate your time with us.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-[#B8A678]/20 text-[#2D3A1F] rounded-xl mt-0.5 group-hover:bg-[#2D3A1F] group-hover:text-[#F4F1E8] transition-colors">
                  <CheckmarkCircle02Icon size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#2D3A1F] group-hover:text-[#B8A678] transition-colors">100% Farm-Direct Sourcing</h4>
                  <p className="text-sm text-[#2D3A1F]/70">We partner directly with sustainable local farmers for heritage vegetables, organic dairy, and wild seafood.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-[#B8A678]/20 text-[#2D3A1F] rounded-xl mt-0.5 group-hover:bg-[#2D3A1F] group-hover:text-[#F4F1E8] transition-colors">
                  <FireIcon size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#2D3A1F] group-hover:text-[#B8A678] transition-colors">Artisanal Cooking Techniques</h4>
                  <p className="text-sm text-[#2D3A1F]/70">Our open wood-fired kitchen blends ancient charcoal grilling with modern precision sous-vide methods.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-[#B8A678]/20 text-[#2D3A1F] rounded-xl mt-0.5 group-hover:bg-[#2D3A1F] group-hover:text-[#F4F1E8] transition-colors">
                  <UserGroupIcon size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#2D3A1F] group-hover:text-[#B8A678] transition-colors">Uncompromising Warm Hospitality</h4>
                  <p className="text-sm text-[#2D3A1F]/70">Every guest is treated as a honored family member with attentive, personalized table service.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 bg-[#2D3A1F] hover:bg-[#B8A678] hover:text-[#2D3A1F] text-[#F4F1E8] font-heading font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full shadow-md hover:shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>BOOK YOUR EXPERIENCE</span>
                <ArrowRight01Icon size={18} />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};


