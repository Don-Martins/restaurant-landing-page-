import React, { useState } from 'react';
import { Star, Plus, Eye, Utensils } from 'lucide-react';
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
    <section id="chefs-recommendations" className="py-16 md:py-24 bg-[#FCFAF7] border-b border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-10"
        >
          <span className="font-heading text-xs font-bold text-[#D4AF37] tracking-[0.25em] uppercase block">
            FINEST SELECTION
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] uppercase tracking-tight">
            CHEF'S RECOMMENDATIONS
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-neutral-300"></div>
            <Utensils className="w-4 h-4 text-[#D4AF37]" />
            <div className="w-12 h-px bg-neutral-300"></div>
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
                className={`font-heading text-xs md:text-sm font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#FF5B3E] text-white shadow-md shadow-[#FF5B3E]/20 scale-105'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300'
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
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 p-4 space-y-4 shadow-sm">
                <div className="w-full h-48 bg-neutral-200 rounded-xl"></div>
                <div className="h-5 bg-neutral-200 rounded w-3/4"></div>
                <div className="h-3 bg-neutral-200 rounded w-full"></div>
                <div className="h-3 bg-neutral-200 rounded w-2/3"></div>
                <div className="flex justify-between items-center pt-2">
                  <div className="h-6 bg-neutral-200 rounded w-16"></div>
                  <div className="h-8 bg-neutral-200 rounded-lg w-24"></div>
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
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-neutral-200/80 hover:border-[#D4AF37]/50 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-neutral-100">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {dish.badge && (
                      <span
                        className={`absolute top-3 left-3 text-[11px] font-heading font-bold uppercase px-3 py-1 rounded-md shadow-sm ${
                          dish.badge === 'Bestseller'
                            ? 'bg-[#D4AF37] text-white'
                            : dish.badge === 'New'
                            ? 'bg-[#FF5B3E] text-white'
                            : 'bg-[#111111] text-white'
                        }`}
                      >
                        {dish.badge}
                      </span>
                    )}

                    {/* Quick View Button Overlay */}
                    <button
                      onClick={() => onOpenDishModal(dish)}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-heading font-semibold text-xs tracking-wider uppercase bg-black/60 backdrop-blur-xs cursor-pointer"
                    >
                      <Eye className="w-4 h-4" /> Quick View
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-lg font-bold text-[#111111] group-hover:text-[#FF5B3E] transition-colors line-clamp-1">
                        {dish.name}
                      </h3>
                    </div>

                    {/* Short, clear description */}
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>

                    {/* Rating & Reviews */}
                    <div className="flex items-center gap-1 text-xs text-neutral-600 pt-1">
                      <div className="flex items-center text-[#FFD84D]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="font-bold text-neutral-800 ml-1">({dish.rating})</span>
                      <span className="text-neutral-400">({dish.reviewsCount})</span>
                    </div>
                  </div>
                </div>

                {/* Price & Add To Order */}
                <div className="p-5 pt-0 border-t border-neutral-100 mt-2 flex items-center justify-between">
                  <span className="font-heading font-bold text-xl text-[#FF5B3E]">
                    ${dish.price.toFixed(2)}
                  </span>

                  <button
                    onClick={() => onAddToCart(dish)}
                    className="inline-flex items-center gap-1.5 bg-[#111111] hover:bg-[#FF5B3E] text-white font-heading text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <Plus className="w-3.5 h-3.5" />
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

