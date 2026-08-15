import React, { useState } from 'react';
import { ViewIcon, Restaurant01Icon } from 'hugeicons-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
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
  onAddToCart,
  onOpenDishModal,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    { label: 'All Items', value: 'all' },
    { label: 'Starters', value: 'starters' },
    { label: 'Main Course', value: 'main' },
    { label: 'Desserts', value: 'desserts' },
    { label: 'Beverages', value: 'beverages' },
    { label: 'Pizza', value: 'pizza' },
  ];

  const handleCategoryChange = (catVal: string) => {
    if (catVal === selectedCategory || isAnimating) return;
    setIsAnimating(true);
    onSelectCategory(catVal);
    // Debounce guard to prevent rapid clicks from overlapping animations
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  const filteredItems = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  // Easing curve specified: cubic-bezier(0.22, 1, 0.36, 1)
  const customEase = [0.22, 1, 0.36, 1];

  return (
    <section id="chefs-recommendations" className="py-16 md:py-24 bg-[#E8E2D0] border-b border-[#CDD2C9] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-10"
        >
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2D3A1F] uppercase tracking-tight">
            POPULAR DISHES & SPECIALS
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-[#CDD2C9]"></div>
            <span className="text-[#B8A678] inline-flex"><Restaurant01Icon size={18} /></span>
            <div className="w-12 h-px bg-[#CDD2C9]"></div>
          </div>
        </motion.div>

        {/* Filter Tabs with Smooth Active State Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12 relative z-10"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                disabled={isAnimating}
                className={`relative font-heading text-xs md:text-sm font-bold tracking-wider uppercase px-5 py-2.5 rounded-full cursor-pointer transition-colors duration-200 outline-none ${
                  isActive ? 'text-[#F4F1E8]' : 'text-[#2D3A1F] hover:text-[#B8A678]'
                }`}
              >
                {/* Active Tab Sliding Background Highlight */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#2D3A1F] rounded-full shadow-md z-0"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                {/* Non-active background border */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-full bg-[#F4F1E8] border border-[#CDD2C9] -z-10"></div>
                )}

                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Dish Grid Container with Stable Min-Height to Prevent Layout Jumping */}
        <div className="min-h-[480px] md:min-h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial="exit"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {filteredItems.map((dish, index) => {
                // Stagger delay calculation: Card 1: 0ms, Card 2: 50ms, Card 3: 100ms, Card 4: 150ms...
                const staggerDelay = shouldReduceMotion ? 0 : index * 0.05;

                return (
                  <motion.div
                    key={dish.id}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.15 : 0.4,
                      ease: customEase,
                      delay: staggerDelay,
                    }}
                    className="bg-[#F4F1E8] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-[#CDD2C9] hover:border-[#B8A678] flex flex-col group cursor-pointer"
                    onClick={() => onOpenDishModal(dish)}
                  >
                    {/* Image Container */}
                    <div className="relative h-60 sm:h-64 overflow-hidden bg-[#2D3A1F]/10">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />

                      {/* Badge if present */}
                      {dish.badge && (
                        <span className="absolute top-4 left-4 bg-[#2D3A1F] text-[#F4F1E8] text-[10px] font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#B8A678]/40 shadow-sm">
                          {dish.badge}
                        </span>
                      )}

                      {/* View Details Overlay */}
                      <div className="absolute inset-0 bg-[#2D3A1F]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-[#F4F1E8] font-heading font-semibold text-xs tracking-wider uppercase backdrop-blur-xs">
                        <ViewIcon size={18} /> View Dish Details
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="font-heading text-xl font-semibold text-[#2D3A1F] group-hover:text-[#B8A678] transition-colors line-clamp-1">
                          {dish.name}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-[#2D3A1F]/75 line-clamp-2 leading-relaxed font-normal">
                          {dish.description}
                        </p>
                      </div>

                      {/* Bottom Footer Row */}
                      <div className="pt-3 border-t border-[#CDD2C9]/60 flex items-center justify-between">
                        <span className="text-xs text-[#B8A678] font-semibold uppercase tracking-wider">
                          {dish.prepTime || '15 mins'}
                        </span>
                        <span className="text-xs text-[#2D3A1F]/60 font-medium">
                          Chef's Special
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};



