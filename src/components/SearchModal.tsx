import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';
import { Search01Icon, Cancel01Icon, StarIcon, Add01Icon } from 'hugeicons-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDish: (dish: MenuItem) => void;
  onAddToCart: (dish: MenuItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDish,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filtered = query.trim() === ''
    ? MENU_ITEMS.slice(0, 4)
    : MENU_ITEMS.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div
      className="fixed inset-0 z-50 bg-[#2D3A1F]/80 backdrop-blur-sm flex items-start justify-center pt-20 p-4 animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#F4F1E8] text-[#2D3A1F] rounded-3xl overflow-hidden shadow-2xl border border-[#CDD2C9] p-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-[#CDD2C9] pb-4">
          <span className="text-[#2D3A1F]/50 inline-flex">
            <Search01Icon size={20} />
          </span>
          <input
            type="text"
            autoFocus
            placeholder="Search dishes (e.g. Salmon, Tiramisu, Pizza, Risotto)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm md:text-base text-[#2D3A1F] placeholder-[#2D3A1F]/40 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#E8E2D0] text-[#2D3A1F]/70 hover:text-[#2D3A1F] transition-colors cursor-pointer"
          >
            <Cancel01Icon size={20} />
          </button>
        </div>

        {/* Results */}
        <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
          <div className="text-xs font-heading font-bold uppercase text-[#2D3A1F]/60 tracking-wider">
            {query.trim() === '' ? 'Popular Menu Recommendations' : `Found ${filtered.length} Dishes`}
          </div>

          {filtered.length === 0 ? (
            <p className="text-xs text-[#2D3A1F]/60 py-6 text-center font-light">No dishes found matching "{query}".</p>
          ) : (
            filtered.map((dish) => (
              <div
                key={dish.id}
                onClick={() => {
                  onSelectDish(dish);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-2xl bg-[#E8E2D0] hover:bg-[#E8E2D0]/80 border border-[#CDD2C9] transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80';
                    }}
                    className="w-14 h-14 rounded-xl object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#2D3A1F] group-hover:text-[#B8A678] transition-colors">
                      {dish.name}
                    </h4>
                    <p className="text-xs text-[#2D3A1F]/70 line-clamp-1 font-light">{dish.description}</p>
                    <div className="flex items-center gap-1 text-[11px] text-[#B8A678] mt-0.5">
                      <span className="fill-current inline-flex"><StarIcon size={12} /></span> <span className="font-bold text-[#2D3A1F]">{dish.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-heading font-bold text-sm text-[#2D3A1F]">
                    ${dish.price.toFixed(2)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(dish);
                    }}
                    className="p-2 rounded-lg bg-[#2D3A1F] text-[#F4F1E8] hover:bg-[#B8A678] hover:text-[#2D3A1F] transition-colors cursor-pointer"
                  >
                    <Add01Icon size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

