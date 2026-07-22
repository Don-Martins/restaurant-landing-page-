import React from 'react';
import { AMBIANCE_IMAGE } from '../data/restaurantData';
import { ArrowRight, Tag } from 'lucide-react';

interface SpecialOfferBannerProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const SpecialOfferBanner: React.FC<SpecialOfferBannerProps> = ({
  onExploreMenu,
}) => {
  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={AMBIANCE_IMAGE}
          alt="Warm candlelit dining atmosphere"
          className="w-full h-full object-cover opacity-35 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-6">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto">
          Get <span className="text-[#FFD84D] font-serif italic">20% Off</span> On Your First Order
        </h2>

        <p className="font-sans text-neutral-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Experience world-class culinary craftsmanship at an exclusive welcoming price. 
          Use code <span className="text-[#FFD84D] font-mono font-bold bg-white/10 px-2 py-0.5 rounded">FLAVORIA20</span> at checkout or mention to your server.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreMenu}
            className="inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#B38F1D] text-white font-heading font-semibold text-sm md:text-base tracking-wider uppercase px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            ORDER NOW
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};
