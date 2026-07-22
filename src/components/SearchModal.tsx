import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';
import { Search, X, Star, Plus } from 'lucide-react';

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
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-20 p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 p-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-neutral-200 pb-4">
          <Search className="w-5 h-5 text-neutral-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search dishes (e.g. Salmon, Tiramisu, Pizza, Risotto)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm md:text-base text-[#111111] placeholder-neutral-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-[#111111]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
          <div className="text-xs font-heading font-bold uppercase text-neutral-400 tracking-wider">
            {query.trim() === '' ? 'Popular Menu Recommendations' : `Found ${filtered.length} Dishes`}
          </div>

          {filtered.length === 0 ? (
            <p className="text-xs text-neutral-500 py-6 text-center">No dishes found matching "{query}".</p>
          ) : (
            filtered.map((dish) => (
              <div
                key={dish.id}
                onClick={() => {
                  onSelectDish(dish);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#FCFAF7] border border-transparent hover:border-neutral-200 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-14 h-14 rounded-xl object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#111111] group-hover:text-[#FF5B3E] transition-colors">
                      {dish.name}
                    </h4>
                    <p className="text-xs text-neutral-500 line-clamp-1">{dish.description}</p>
                    <div className="flex items-center gap-1 text-[11px] text-[#FFD84D] mt-0.5">
                      <Star className="w-3 h-3 fill-current" /> <span className="font-bold text-neutral-700">{dish.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-heading font-bold text-sm text-[#FF5B3E]">
                    ${dish.price.toFixed(2)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(dish);
                    }}
                    className="p-2 rounded-lg bg-[#111111] text-white hover:bg-[#FF5B3E] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
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
