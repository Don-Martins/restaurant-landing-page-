import React from 'react';
import { MENU_CATEGORIES } from '../data/restaurantData';
import { Restaurant01Icon, ArrowRight01Icon } from 'hugeicons-react';
import { motion } from 'motion/react';

interface MenuCategoriesProps {
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
}

export const MenuCategories: React.FC<MenuCategoriesProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section id="categories" className="py-16 md:py-24 bg-[#F4F1E8] border-b border-[#CDD2C9] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-12 md:mb-16"
        >
          <span className="font-heading text-xs font-bold text-[#B8A678] tracking-[0.25em] uppercase block">
            EXPLORE FLAVORS
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal text-[#2D3A1F] uppercase tracking-tight">
            OUR MENU CATEGORIES
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-[#CDD2C9]"></div>
            <Restaurant01Icon size={20} className="text-[#B8A678]" />
            <div className="w-12 h-px bg-[#CDD2C9]"></div>
          </div>
        </motion.div>

        {/* Categories Circular Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
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
                    className={`font-heading text-base font-bold transition-colors ${
                      isSelected ? 'text-[#2D3A1F]' : 'text-[#2D3A1F]/80 group-hover:text-[#B8A678]'
                    }`}
                  >
                    {cat.name}
                  </h3>
                  <span className="text-xs text-[#2D3A1F]/60 font-medium flex items-center justify-center gap-1 group-hover:text-[#2D3A1F] transition-colors">
                    Explore <ArrowRight01Icon size={14} className="group-hover:translate-x-1 transition-transform" />
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


