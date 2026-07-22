import React from 'react';
import { Calendar, ShoppingBag } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenReservation,
  onOpenCart,
  cartCount,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 p-3 lg:hidden shadow-2xl flex items-center gap-3">
      <button
        onClick={onOpenReservation}
        className="flex-1 bg-[#D4AF37] hover:bg-[#b89428] text-white font-heading font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
      >
        <Calendar className="w-4 h-4" /> Book Table
      </button>

      <button
        onClick={onOpenCart}
        className="flex-1 bg-[#111111] hover:bg-[#FF5B3E] text-white font-heading font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95 relative"
      >
        <ShoppingBag className="w-4 h-4" /> Order Online
        {cartCount > 0 && (
          <span className="bg-[#FF5B3E] text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
};
