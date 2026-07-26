import React, { useState } from 'react';
import { StarIcon, Add01Icon, ViewIcon, Restaurant01Icon } from 'hugeicons-react';
import { motion } from 'motion/react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface ChefsRecommendationsProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onAddToCart: (item: MenuItem) => void;
  onOpenDishModal: (item: MenuItem) => void;
}

export const ChefsRecommendations: React.FC<ChefsRecommendationsProps> = ({
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onOpenDishModal,
}) => {
  const [loading, setLoading] = useState(false);

  const categories = [
    { label: 'All Items', value: 'all' },
    { label: 'Starters', value: 'starters' },
    { label: 'Main Course', value: 'main' },
    { label: 'Desserts', value: 'desserts' },
    { label: 'Beverages', value: 'beverages' },
    { label: 'Pizza', value: 'pizza' },
  ];

  const handleCategoryChange = (catVal: string) => {
    if (catVal === selectedCategory) return;
    setLoading(true);
    onSelectCategory(catVal);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  const filteredItems = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="chefs-recommendations" className="py-16 md:py-24 bg-[#E8E2D0] border-b border-[#CDD2C9] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-10"
        >
          <span className="font-heading text-xs font-bold text-[#B8A678] tracking-[0.25em] uppercase block">
            FINEST SELECTION
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal text-[#2D3A1F] uppercase tracking-tight">
            CHEF'S RECOMMENDATIONS
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-[#CDD2C9]"></div>
            <Restaurant01Icon size={18} className="text-[#B8A678]" />
            <div className="w-12 h-px bg-[#CDD2C9]"></div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`font-heading text-xs md:text-sm font-bold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#2D3A1F] text-[#F4F1E8] shadow-md scale-105'
                    : 'bg-[#F4F1E8] text-[#2D3A1F] hover:bg-[#E8E2D0] border border-[#CDD2C9]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Dish Grid with Skeleton Loading Effect */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 animate-pulse">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-[#F4F1E8] rounded-2xl overflow-hidden border border-[#CDD2C9] p-4 space-y-4 shadow-sm">
                <div className="w-full h-48 bg-[#CDD2C9]/50 rounded-xl"></div>
                <div className="h-5 bg-[#CDD2C9]/50 rounded w-3/4"></div>
                <div className="h-3 bg-[#CDD2C9]/50 rounded w-full"></div>
                <div className="h-3 bg-[#CDD2C9]/50 rounded w-2/3"></div>
                <div className="flex justify-between items-center pt-2">
                  <div className="h-6 bg-[#CDD2C9]/50 rounded w-16"></div>
                  <div className="h-8 bg-[#CDD2C9]/50 rounded-lg w-24"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredItems.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#F4F1E8] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#CDD2C9] hover:border-[#B8A678] flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-[#2D3A1F]/10">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {dish.badge && (
                      <span
                        className="absolute top-3 left-3 text-[11px] font-heading font-bold uppercase px-3 py-1 rounded-full shadow-sm bg-[#2D3A1F] text-[#F4F1E8] border border-[#B8A678]/50"
                      >
                        {dish.badge}
                      </span>
                    )}

                    {/* Quick View Button Overlay */}
                    <button
                      onClick={() => onOpenDishModal(dish)}
                      className="absolute inset-0 bg-[#2D3A1F]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-[#F4F1E8] font-heading font-semibold text-xs tracking-wider uppercase backdrop-blur-xs cursor-pointer"
                    >
                      <ViewIcon size={16} /> Quick View
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-lg font-bold text-[#2D3A1F] group-hover:text-[#B8A678] transition-colors line-clamp-1">
                        {dish.name}
                      </h3>
                    </div>

                    {/* Short, clear description */}
                    <p className="text-xs text-[#2D3A1F]/70 line-clamp-2 leading-relaxed font-light">
                      {dish.description}
                    </p>

                    {/* Rating & Reviews */}
                    <div className="flex items-center gap-1 text-xs text-[#2D3A1F]/70 pt-1">
                      <div className="flex items-center text-[#B8A678]">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} size={14} className="fill-current" />
                        ))}
                      </div>
                      <span className="font-bold text-[#2D3A1F] ml-1">({dish.rating})</span>
                      <span className="text-[#2D3A1F]/50">({dish.reviewsCount})</span>
                    </div>
                  </div>
                </div>

                {/* Price & Add To Order */}
                <div className="p-5 pt-0 border-t border-[#CDD2C9]/60 mt-2 flex items-center justify-between">
                  <span className="font-heading font-bold text-xl text-[#2D3A1F]">
                    ${dish.price.toFixed(2)}
                  </span>

                  <button
                    onClick={() => onAddToCart(dish)}
                    className="inline-flex items-center gap-1.5 bg-[#2D3A1F] hover:bg-[#B8A678] text-[#F4F1E8] hover:text-[#2D3A1F] font-heading text-xs font-bold px-4 py-2.5 rounded-full transition-colors cursor-pointer shadow-sm"
                  >
                    <Add01Icon size={14} />
                    <span>Add To Order</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};


