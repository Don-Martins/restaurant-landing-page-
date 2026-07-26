import React from 'react';
import { ArrowRight01Icon, Calendar01Icon, StarIcon } from 'hugeicons-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section 
      id="hero" 
      className="relative w-full min-h-screen pt-24 pb-16 flex items-center bg-[#131B0E] text-[#F4F1E8] overflow-hidden select-none"
    >
      {/* Decorative Natural Palm Leaves Accents */}
      {/* Top Left Leaf */}
      <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 pointer-events-none opacity-40 z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#3A4B29] fill-current">
          <path d="M0,0 Q60,90 10,180 Q100,80 0,0 Q120,40 180,0 Q80,100 0,0" />
        </svg>
      </div>

      {/* Bottom Right Leaf */}
      <div className="absolute bottom-0 right-0 w-72 md:w-1/3 h-72 md:h-1/3 pointer-events-none opacity-30 z-10 transform rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#3A4B29] fill-current">
          <path d="M0,0 Q60,90 10,180 Q100,80 0,0 Q120,40 180,0 Q80,100 0,0" />
        </svg>
      </div>

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,_rgba(184,166,120,0.12)_0%,_transparent_65%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content Area */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 md:space-y-8 text-left">
            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl xl:text-[64px] font-bold leading-[1.15] tracking-tight text-[#F4F1E8]">
              Your Next Favorite <br />
              Meal Starts <span className="text-[#B8A678] italic">Here.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-[#CDD2C9] leading-relaxed max-w-xl font-light">
              Discover a restaurant where every dish is prepared fresh, every guest is welcomed warmly, and every visit feels worth coming back for. Join us for an unforgettable dining experience.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreMenu}
                className="bg-[#B8A678] hover:bg-[#A39266] text-[#131B0E] font-heading font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>VIEW OUR MENU</span>
                <ArrowRight01Icon size={18} />
              </button>

              <button
                onClick={onOpenReservation}
                className="border border-[#B8A678]/40 hover:border-[#B8A678] bg-white/5 hover:bg-white/10 text-[#F4F1E8] font-heading font-semibold text-sm tracking-widest uppercase px-7 py-4 rounded-md backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>BOOK A TABLE</span>
                <Calendar01Icon size={18} />
              </button>
            </div>

            {/* Ratings & Guests Badge */}
            <div className="pt-4 flex items-center gap-3 text-xs font-sans text-[#CDD2C9]/80 border-t border-[#CDD2C9]/15 max-w-md">
              <div className="flex text-[#B8A678]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={16} className="fill-current" />
                ))}
              </div>
              <span className="font-bold text-[#F4F1E8]">4.9 / 5.0</span>
              <span>• Michelin Star Culinary Experience</span>
            </div>
          </div>

          {/* Right Plate Visual Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end relative"
          >
            {/* Seamless Blended Gourmet Plate Display */}
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] aspect-square rounded-full p-2 bg-[#131B0E] flex items-center justify-center group mx-auto lg:mr-0">
              
              {/* Soft Ambient Radial Background Glow */}
              <div className="absolute inset-0 rounded-full bg-radial from-[#B8A678]/20 via-[#2A3B22]/40 to-transparent blur-xl pointer-events-none transform group-hover:scale-110 transition-transform duration-700"></div>

              {/* Outer Decorative Gold Ring */}
              <div className="absolute inset-2 rounded-full border border-[#B8A678]/30 border-dashed animate-spin-slow pointer-events-none"></div>

              {/* Main Dish Image with Soft Edge Blend Vignette */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-[#B8A678]/20">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                  alt="Signature Gourmet Dish"
                  className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Radial Vignette Overlay for Seamless Dark Forest Green Edge Blending */}
                <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-inset ring-[#B8A678]/30 bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(19,27,14,0.6)_100%)]"></div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


