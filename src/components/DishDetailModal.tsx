import React, { useState } from 'react';
import { MenuItem } from '../types';
import { X, Star, Clock, Flame, Plus, Minus, ShoppingBag, Check } from 'lucide-react';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onAddToCart: (dish: MenuItem, quantity: number, instructions: string) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onAddToCart,
}) => {
  if (!dish) return null;

  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState('');
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(dish, quantity, instructions);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-[#FF5B3E] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Hero Photo */}
        <div className="relative h-64 overflow-hidden bg-neutral-100">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

          {dish.badge && (
            <span className="absolute top-4 left-4 bg-[#D4AF37] text-white text-xs font-heading font-bold uppercase px-3 py-1 rounded-md shadow-md">
              {dish.badge}
            </span>
          )}

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <h3 className="font-serif text-2xl font-bold">{dish.name}</h3>
            <div className="flex items-center gap-3 text-xs text-neutral-300 mt-1">
              <span className="flex items-center gap-1 text-[#FFD84D]">
                <Star className="w-3.5 h-3.5 fill-current" /> {dish.rating} ({dish.reviewsCount} reviews)
              </span>
              {dish.prepTime && <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {dish.prepTime}</span>}
              {dish.calories && <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5 text-[#FF5B3E]" /> {dish.calories} kcal</span>}
            </div>
          </div>
        </div>

        {/* Dish Info & Customization */}
        <div className="p-6 space-y-5">
          <p className="font-sans text-sm text-neutral-600 leading-relaxed">
            {dish.description}
          </p>

          {/* Dietary Tags */}
          {dish.dietary && dish.dietary.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {dish.dietary.map((tag) => (
                <span key={tag} className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2.5 py-1 rounded-full font-medium">
                  ✓ {tag}
                </span>
              ))}
            </div>
          )}

          {/* Special Instructions */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase text-neutral-700 mb-1">
              Special Kitchen Instructions
            </label>
            <input
              type="text"
              placeholder="e.g. Extra sauce on side, less spicy, no cilantro..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#FF5B3E]"
            />
          </div>

          {/* Quantity Selector & Add Button */}
          <div className="pt-2 flex items-center justify-between gap-4 border-t border-neutral-100">
            {/* Quantity */}
            <div className="flex items-center gap-3 bg-[#FCFAF7] border border-neutral-300 rounded-xl p-1.5">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-white shadow-xs flex items-center justify-center text-neutral-700 hover:bg-neutral-200"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-heading font-bold text-sm w-6 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-white shadow-xs flex items-center justify-center text-neutral-700 hover:bg-neutral-200"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Total & Button */}
            <button
              onClick={handleAdd}
              className={`flex-1 font-heading font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 ${
                added ? 'bg-emerald-600 text-white' : 'bg-[#FF5B3E] hover:bg-[#e04a2f] text-white'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added To Order!
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" /> Add ${(dish.price * quantity).toFixed(2)}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
