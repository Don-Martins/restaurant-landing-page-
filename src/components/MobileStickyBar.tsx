import React from 'react';
import { Calendar01Icon, ShoppingBag01Icon } from 'hugeicons-react';

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
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#F4F1E8]/95 backdrop-blur-md border-t border-[#CDD2C9] p-3 lg:hidden shadow-2xl flex items-center gap-3 select-none">
      <button
        onClick={onOpenReservation}
        className="flex-1 bg-[#2D3A1F] hover:bg-[#B8A678] text-[#F4F1E8] hover:text-[#2D3A1F] font-heading font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
      >
        <Calendar01Icon size={16} /> Book Table
      </button>

      <button
        onClick={onOpenCart}
        className="flex-1 bg-[#E8E2D0] hover:bg-[#2D3A1F] text-[#2D3A1F] hover:text-[#F4F1E8] border border-[#CDD2C9] font-heading font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95 relative"
      >
        <ShoppingBag01Icon size={16} /> Order Online
        {cartCount > 0 && (
          <span className="bg-[#B8A678] text-[#2D3A1F] text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#F4F1E8]">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
};

