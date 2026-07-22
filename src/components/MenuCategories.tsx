import React from 'react';
import { MENU_CATEGORIES } from '../data/restaurantData';
import { Sparkles, ArrowRight } from 'lucide-react';
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
    <section id="categories" className="py-16 md:py-24 bg-white border-b border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-12 md:mb-16"
        >
          <span className="font-heading text-xs font-bold text-[#D4AF37] tracking-[0.25em] uppercase block">
            EXPLORE FLAVORS
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] uppercase tracking-tight">
            OUR MENU CATEGORIES
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-neutral-300"></div>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <div className="w-12 h-px bg-neutral-300"></div>
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
                      ? 'ring-4 ring-[#FF5B3E] ring-offset-4 shadow-xl scale-105'
                      : 'hover:ring-2 hover:ring-[#D4AF37] hover:ring-offset-2 hover:scale-105 shadow-md'
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
                  <span className="absolute bottom-1 right-1 bg-[#111111] text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white">
                    {cat.itemCount} Items
                  </span>
                </div>

                {/* Category Title */}
                <div className="space-y-0.5">
                  <h3
                    className={`font-heading text-base font-bold transition-colors ${
                      isSelected ? 'text-[#FF5B3E]' : 'text-[#111111] group-hover:text-[#D4AF37]'
                    }`}
                  >
                    {cat.name}
                  </h3>
                  <span className="text-xs text-neutral-400 font-medium flex items-center justify-center gap-1 group-hover:text-[#FF5B3E] transition-colors">
                    Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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

