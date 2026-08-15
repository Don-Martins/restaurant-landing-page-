import React from 'react';
import { AMBIANCE_IMAGE } from '../data/restaurantData';
import { ArrowRight01Icon, Tag01Icon } from 'hugeicons-react';

interface SpecialOfferBannerProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const SpecialOfferBanner: React.FC<SpecialOfferBannerProps> = ({
  onExploreMenu,
}) => {
  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden bg-[#2D3A1F] text-[#F4F1E8]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={AMBIANCE_IMAGE}
          alt="Warm candlelit dining atmosphere"
          className="w-full h-full object-cover opacity-20 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D3A1F]/95 via-[#2D3A1F]/80 to-[#2D3A1F]/95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-[#B8A678]/20 border border-[#B8A678]/40 text-[#B8A678] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          <Tag01Icon size={14} /> Exclusive Welcome Offer
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#F4F1E8] max-w-4xl mx-auto">
          Get <span className="text-[#B8A678] font-bold italic">20% Off</span> On Your First Tasting Order
        </h2>

        <p className="font-sans text-[#CDD2C9] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
          Experience world-class culinary craftsmanship at an exclusive welcoming price. 
          Use code <span className="text-[#B8A678] font-mono font-bold bg-[#E8E2D0]/10 border border-[#B8A678]/30 px-2.5 py-1 rounded-md">FLAVORIA20</span> at checkout or mention to your server.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreMenu}
            className="inline-flex items-center justify-center bg-[#B8A678] hover:bg-[#A39266] text-[#2D3A1F] font-heading font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            ORDER NOW
            <span className="ml-2 inline-flex">
              <ArrowRight01Icon size={18} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

