import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[calc(100vh-73px)] flex items-center justify-center bg-neutral-950 overflow-hidden"
    >
      {/* Dark Vignette Overlay & Atmospheric Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80"
          alt="Fine Dining Ambiance"
          className="w-full h-full object-cover opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/95"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 relative z-10 w-full my-auto text-center flex flex-col items-center">
        
        {/* Main Hero Content Animated Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6 text-center max-w-3xl mx-auto"
        >
          {/* Centered Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-[72px] font-bold text-white leading-[1.08] tracking-tight">
            Where Taste <br />
            <span className="text-[#FFD84D] font-serif italic font-normal">Meets Elegance.</span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            A perfect blend of taste, art, and hospitality. Experience handcrafted culinary creations made from fresh seasonal ingredients in an extraordinary atmosphere.
          </p>

          {/* CTAs with Mobile Overlap Effect & Centered Layout */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-4 max-w-sm sm:max-w-none mx-auto w-full">
            
            {/* Primary CTA - Reserve a Table */}
            <button
              onClick={onOpenReservation}
              className="relative z-10 inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#B38F1D] text-white font-heading font-bold text-sm sm:text-base tracking-wider uppercase px-8 py-4 rounded-xl shadow-xl shadow-[#D4AF37]/25 transition-all hover:scale-105 active:scale-95 group cursor-pointer w-full sm:w-auto"
            >
              <span>RESERVE A TABLE</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA - View Menu (Overlaps on mobile) */}
            <button
              onClick={onExploreMenu}
              className="relative z-20 -mt-3 sm:mt-0 inline-flex items-center justify-center bg-black/85 hover:bg-black sm:bg-white/10 sm:hover:bg-white/20 text-white border border-[#D4AF37]/60 sm:border-white/30 font-heading font-semibold text-sm sm:text-base tracking-wider uppercase px-8 py-3.5 sm:py-4 rounded-xl backdrop-blur-md transition-all hover:scale-105 cursor-pointer shadow-2xl w-full sm:w-auto"
            >
              <span>VIEW MENU</span>
            </button>

          </div>

          {/* Rating Indicator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-3 text-neutral-400 text-xs font-heading"
          >
            <div className="flex text-[#FFD84D]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-white font-bold">4.9 / 5.0</span>
            <span className="text-neutral-500">• Over 1,200+ Verified Guest Reviews</span>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

