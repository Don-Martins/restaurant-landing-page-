import React from 'react';
import { ArrowRight01Icon, StarIcon } from 'hugeicons-react';
import { motion } from 'motion/react';
import { HERO_IMAGE } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section 
      id="hero" 
      className="relative w-full min-h-screen pt-40 sm:pt-48 md:pt-56 pb-24 md:pb-32 flex items-center bg-[#131B0E] text-[#F4F1E8] overflow-hidden select-none"
    >
      {/* Background Image from Uploaded Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={HERO_IMAGE} 
          alt="Restaurant Ambiance Background" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80';
          }}
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Dark Vignette Overlay for Crisp Contrast and Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#131B0E]/95 via-[#131B0E]/80 to-[#131B0E]/40 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131B0E] via-transparent to-[#131B0E]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-20 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content Area */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 md:space-y-8 text-left">
            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl sm:text-6xl xl:text-[64px] font-semibold leading-[1.15] tracking-tight text-[#F4F1E8]"
            >
              Your Next Favorite <br />
              Meal Starts <span className="text-[#B8A678] italic font-normal">Here.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-base sm:text-lg text-[#CDD2C9] leading-relaxed max-w-xl font-light drop-shadow-sm"
            >
              Discover a restaurant where every dish is prepared fresh, every guest is welcomed warmly, and every visit feels worth coming back for. Join us for an unforgettable dining experience.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={onExploreMenu}
                className="bg-[#B8A678] hover:bg-[#A39266] text-[#131B0E] font-heading font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <span>VIEW OUR MENU</span>
                <ArrowRight01Icon size={18} />
              </button>
            </motion.div>

            {/* Ratings & Guests Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-4 flex items-center gap-3 text-xs font-sans text-[#CDD2C9]/80 border-t border-[#CDD2C9]/20 max-w-md backdrop-blur-xs"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#B8A678] fill-current inline-flex">
                    <StarIcon size={16} />
                  </span>
                ))}
              </div>
              <span className="font-bold text-[#F4F1E8]">4.9 / 5.0</span>
              <span>• Michelin Star Culinary Experience</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};


