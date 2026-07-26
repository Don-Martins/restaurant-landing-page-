import React, { useState } from 'react';
import { MenuItem } from '../types';
import { Cancel01Icon, StarIcon, Clock01Icon, FireIcon, Add01Icon, Remove01Icon, ShoppingBag01Icon, Tick01Icon } from 'hugeicons-react';

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
      className="fixed inset-0 z-50 bg-[#2D3A1F]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200 overflow-y-auto select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#F4F1E8] text-[#2D3A1F] rounded-3xl overflow-hidden shadow-2xl border border-[#CDD2C9] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#2D3A1F]/60 text-[#F4F1E8] hover:bg-[#2D3A1F] transition-colors cursor-pointer"
        >
          <Cancel01Icon size={20} />
        </button>

        {/* Dish Hero Photo */}
        <div className="relative h-64 overflow-hidden bg-[#E8E2D0]">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/90 via-[#2D3A1F]/30 to-transparent"></div>

          {dish.badge && (
            <span className="absolute top-4 left-4 bg-[#B8A678] text-[#2D3A1F] text-xs font-heading font-bold uppercase px-3 py-1 rounded-md shadow-md">
              {dish.badge}
            </span>
          )}

          <div className="absolute bottom-4 left-6 right-6 text-[#F4F1E8]">
            <h3 className="font-heading text-2xl font-bold">{dish.name}</h3>
            <div className="flex items-center gap-3 text-xs text-[#F4F1E8]/80 mt-1">
              <span className="flex items-center gap-1 text-[#B8A678]">
                <StarIcon size={14} className="fill-current" /> {dish.rating} ({dish.reviewsCount} reviews)
              </span>
              {dish.prepTime && <span className="flex items-center gap-1"><Clock01Icon size={14} /> {dish.prepTime}</span>}
              {dish.calories && <span className="flex items-center gap-1"><FireIcon size={14} className="text-[#B8A678]" /> {dish.calories} kcal</span>}
            </div>
          </div>
        </div>

        {/* Dish Info & Customization */}
        <div className="p-6 space-y-5">
          <p className="font-sans text-sm text-[#2D3A1F]/80 leading-relaxed font-light">
            {dish.description}
          </p>

          {/* Dietary Tags */}
          {dish.dietary && dish.dietary.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {dish.dietary.map((tag) => (
                <span key={tag} className="bg-[#E8E2D0] text-[#2D3A1F] border border-[#CDD2C9] text-xs px-2.5 py-1 rounded-full font-medium">
                  ✓ {tag}
                </span>
              ))}
            </div>
          )}

          {/* Special Instructions */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase text-[#2D3A1F] mb-1">
              Special Kitchen Instructions
            </label>
            <input
              type="text"
              placeholder="e.g. Extra sauce on side, less spicy, no cilantro..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#B8A678] text-[#2D3A1F]"
            />
          </div>

          {/* Quantity Selector & Add Button */}
          <div className="pt-2 flex items-center justify-between gap-4 border-t border-[#CDD2C9]">
            {/* Quantity */}
            <div className="flex items-center gap-3 bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl p-1.5">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-[#F4F1E8] shadow-xs flex items-center justify-center text-[#2D3A1F] hover:bg-[#B8A678]/20 cursor-pointer"
              >
                <Remove01Icon size={14} />
              </button>
              <span className="font-heading font-bold text-sm w-6 text-center text-[#2D3A1F]">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-[#F4F1E8] shadow-xs flex items-center justify-center text-[#2D3A1F] hover:bg-[#B8A678]/20 cursor-pointer"
              >
                <Add01Icon size={14} />
              </button>
            </div>

            {/* Total & Button */}
            <button
              onClick={handleAdd}
              className={`flex-1 font-heading font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 ${
                added ? 'bg-[#2D3A1F] text-[#B8A678]' : 'bg-[#2D3A1F] hover:bg-[#B8A678] text-[#F4F1E8] hover:text-[#2D3A1F]'
              }`}
            >
              {added ? (
                <>
                  <Tick01Icon size={16} /> Added To Order!
                </>
              ) : (
                <>
                  <ShoppingBag01Icon size={16} /> Add ${(dish.price * quantity).toFixed(2)}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

