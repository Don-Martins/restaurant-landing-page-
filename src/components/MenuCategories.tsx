import React, { useState, useEffect } from 'react';
import { MENU_CATEGORIES } from '../data/restaurantData';
import { Restaurant01Icon, ArrowRight01Icon } from 'hugeicons-react';
import { motion, AnimatePresence } from 'motion/react';

interface MenuCategoriesProps {
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
}

export const MenuCategories: React.FC<MenuCategoriesProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  // Mobile automatic slider state
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-slide effect on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % MENU_CATEGORIES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="categories" className="py-16 md:py-24 bg-[#F4F1E8] border-b border-[#CDD2C9] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-10 md:mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2D3A1F] uppercase tracking-tight">
            EXPLORE OUR MENU
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-[#CDD2C9]"></div>
            <span className="text-[#B8A678] inline-flex">
              <Restaurant01Icon size={20} />
            </span>
            <div className="w-12 h-px bg-[#CDD2C9]"></div>
          </div>
        </motion.div>

        {/* Mobile Automatic Slider (Visible only on mobile screens < sm) */}
        <div className="block sm:hidden relative px-2">
          <div className="overflow-hidden py-4">
            <AnimatePresence mode="wait">
              {(() => {
                const cat = MENU_CATEGORIES[activeSlide];
                const isSelected = selectedCategory === cat.slug;
                
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="flex flex-col items-center text-center space-y-4"
                  >
                    <button
                      onClick={() => {
                        onSelectCategory(cat.slug);
                        const el = document.getElementById('chefs-recommendations');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="group flex flex-col items-center focus:outline-none cursor-pointer"
                    >
                      <div
                        className={`relative w-36 h-36 rounded-full p-1.5 transition-all duration-300 ${
                          isSelected
                            ? 'ring-4 ring-[#2D3A1F] ring-offset-4 ring-offset-[#F4F1E8] shadow-xl scale-105'
                            : 'ring-2 ring-[#B8A678] ring-offset-2 ring-offset-[#F4F1E8] shadow-md'
                        }`}
                      >
                        <div className="w-full h-full rounded-full overflow-hidden relative">
                          <img
                            src={cat.image}
                            alt={cat.name}
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80';
                            }}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                        </div>

                        <span className="absolute bottom-1 right-1 bg-[#2D3A1F] text-[#F4F1E8] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#B8A678]/40">
                          {cat.itemCount} Items
                        </span>
                      </div>

                      <div className="mt-3 space-y-1">
                        <h3 className="font-heading text-lg font-semibold text-[#2D3A1F]">
                          {cat.name}
                        </h3>
                        <span className="text-xs text-[#B8A678] font-semibold uppercase tracking-wider flex items-center justify-center gap-1">
                          Tap to view dishes <ArrowRight01Icon size={14} />
                        </span>
                      </div>
                    </button>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Slider Pagination Dots for Mobile */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {MENU_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeSlide === idx
                    ? 'w-6 h-2 bg-[#2D3A1F]'
                    : 'w-2 h-2 bg-[#CDD2C9] hover:bg-[#B8A678]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Categories Circular Grid (Visible on sm screens and larger) */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {MENU_CATEGORIES.map((cat, index) => {
            const isSelected = selectedCategory === cat.slug;

            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => {
                  onSelectCategory(cat.slug);
                  const el = document.getElementById('chefs-recommendations');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex flex-col items-center text-center space-y-3 focus:outline-none cursor-pointer"
              >
                {/* Circle Avatar Container */}
                <div
                  className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1.5 transition-all duration-300 ${
                    isSelected
                      ? 'ring-4 ring-[#2D3A1F] ring-offset-4 ring-offset-[#F4F1E8] shadow-xl scale-105'
                      : 'hover:ring-2 hover:ring-[#B8A678] hover:ring-offset-2 hover:scale-105 shadow-md'
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  </div>

                  {/* Badge showing item count */}
                  <span className="absolute bottom-1 right-1 bg-[#2D3A1F] text-[#F4F1E8] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#B8A678]/40">
                    {cat.itemCount} Items
                  </span>
                </div>

                {/* Category Title */}
                <div className="space-y-0.5">
                  <h3
                    className={`font-heading text-base font-semibold transition-colors ${
                      isSelected ? 'text-[#2D3A1F]' : 'text-[#2D3A1F]/80 group-hover:text-[#B8A678]'
                    }`}
                  >
                    {cat.name}
                  </h3>
                  <span className="text-xs text-[#2D3A1F]/60 font-medium flex items-center justify-center gap-1 group-hover:text-[#2D3A1F] transition-colors">
                    Explore <span className="group-hover:translate-x-1 transition-transform inline-flex"><ArrowRight01Icon size={14} /></span>
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
};


