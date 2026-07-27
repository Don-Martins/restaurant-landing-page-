import React, { useState } from 'react';
import { ViewIcon, Restaurant01Icon } from 'hugeicons-react';
import { motion } from 'motion/react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface ChefsRecommendationsProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onAddToCart?: (item: MenuItem) => void;
  onOpenDishModal: (item: MenuItem) => void;
}

export const ChefsRecommendations: React.FC<ChefsRecommendationsProps> = ({
  selectedCategory,
  onSelectCategory,
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
            FRESH & AUTHENTIC
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal text-[#2D3A1F] uppercase tracking-tight">
            OUR MENU
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

        {/* Dish Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-[#F4F1E8] rounded-2xl overflow-hidden border border-[#CDD2C9] p-6 space-y-4 shadow-sm">
                <div className="w-full h-60 bg-[#CDD2C9]/50 rounded-xl"></div>
                <div className="h-6 bg-[#CDD2C9]/50 rounded w-3/4"></div>
                <div className="h-4 bg-[#CDD2C9]/50 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredItems.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#F4F1E8] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-[#CDD2C9] hover:border-[#B8A678] flex flex-col group cursor-pointer"
                onClick={() => onOpenDishModal(dish)}
              >
                {/* Image Container */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-[#2D3A1F]/10">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* View Details Overlay */}
                  <div className="absolute inset-0 bg-[#2D3A1F]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-[#F4F1E8] font-heading font-semibold text-xs tracking-wider uppercase backdrop-blur-xs">
                    <ViewIcon size={18} /> View Dish Details
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#2D3A1F] group-hover:text-[#B8A678] transition-colors line-clamp-1 mb-2">
                      {dish.name}
                    </h3>

                    {/* Short, human-sounding description */}
                    <p className="text-sm text-[#2D3A1F]/75 line-clamp-2 leading-relaxed font-normal">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};


