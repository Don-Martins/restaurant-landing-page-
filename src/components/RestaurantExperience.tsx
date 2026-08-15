import React from 'react';
import { motion } from 'motion/react';
import { Calendar01Icon, Award01Icon } from 'hugeicons-react';

interface RestaurantExperienceProps {
  onOpenReservation: () => void;
}

export const RestaurantExperience: React.FC<RestaurantExperienceProps> = ({ onOpenReservation }) => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#F4F1E8] text-[#2D3A1F] border-b border-[#CDD2C9] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-16 md:space-y-24">
        
        {/* Row 1: Image on Left, Text on Right (Equal Aligned Heights) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"
        >
          {/* Left Column: Image Container (Executive Chef Plating) */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#CDD2C9] min-h-[300px] lg:min-h-full group flex flex-col h-full bg-[#2D3A1F]">
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80"
              alt="Flavoria Chef Plating Masterpiece"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80';
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/75 via-transparent to-transparent"></div>
            
            {/* Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#2D3A1F]/85 backdrop-blur-md border border-[#B8A678]/40 text-[#F4F1E8] flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#B8A678] text-[#2D3A1F]">
                <Award01Icon size={18} />
              </div>
              <div>
                <h4 className="font-heading text-xs font-semibold text-[#F4F1E8]">Our Experienced Kitchen Team</h4>
                <p className="text-[11px] text-[#CDD2C9] font-light">Cooking fresh, delicious meals with care every day</p>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content (Card Container Removed for Clean Editorial Layout) */}
          <div className="flex flex-col justify-between space-y-6 h-full py-2">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2D3A1F] leading-tight tracking-tight">
                The Story Behind <br />
                <span className="text-[#B8A678]">Flavoria Restaurant</span>
              </h2>

              <p className="font-sans text-[#2D3A1F]/85 text-base sm:text-lg leading-relaxed font-light">
                We started Flavoria with a simple goal: to serve good, honest food in a warm and welcoming space. Every day, we prepare fresh Mediterranean-inspired dishes using quality ingredients and recipes passed down through generations.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="py-3 px-4 rounded-2xl bg-white/40">
                  <div className="font-heading font-semibold text-2xl text-[#2D3A1F]">50K+</div>
                  <div className="text-xs text-[#2D3A1F]/70 font-sans mt-0.5">Happy Guests Served</div>
                </div>
                <div className="py-3 px-4 rounded-2xl bg-white/40">
                  <div className="font-heading font-semibold text-2xl text-[#2D3A1F]">4.9 / 5</div>
                  <div className="text-xs text-[#2D3A1F]/70 font-sans mt-0.5">Average Guest Rating</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#CDD2C9] flex items-center justify-between">
              <span className="text-xs sm:text-sm text-[#2D3A1F]/70 font-medium">Ready to join us? Reserve your table today.</span>
            </div>
          </div>
        </motion.div>

        {/* Row 2: Text on Left, Image on Right (Card Container Removed) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"
        >
          {/* Left Column: Text Content (Card Container Removed) */}
          <div className="flex flex-col justify-between space-y-6 h-full py-2">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2D3A1F] leading-tight tracking-tight">
                A Comfortable Place <br />
                <span className="text-[#B8A678]">To Eat & Relax</span>
              </h2>

              <p className="font-sans text-[#2D3A1F]/85 text-base sm:text-lg leading-relaxed font-light">
                Whether you are stopping by for a quick lunch, enjoying a family dinner, or celebrating a special day, our dining room is designed to feel warm and comfortable. Good food, refreshing drinks, and friendly service guaranteed.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-3 text-sm text-[#2D3A1F]/85 font-medium">
                  <div className="w-2 h-2 rounded-full bg-[#B8A678] shrink-0"></div>
                  <span>Fresh ingredients from local suppliers</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#2D3A1F]/85 font-medium">
                  <div className="w-2 h-2 rounded-full bg-[#B8A678] shrink-0"></div>
                  <span>Private dining spaces available for family events</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#2D3A1F]/85 font-medium">
                  <div className="w-2 h-2 rounded-full bg-[#B8A678] shrink-0"></div>
                  <span>Friendly staff dedicated to great service</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#CDD2C9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <span className="text-xs sm:text-sm text-[#2D3A1F]/70 font-medium font-sans">Open daily for Lunch & Dinner</span>
              <a
                href="#chefs-recommendations"
                className="px-5 py-2.5 rounded-full bg-[#2D3A1F] hover:bg-[#B8A678] text-[#F4F1E8] hover:text-[#2D3A1F] font-heading text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
              >
                Explore Menu
              </a>
            </div>
          </div>

          {/* Right Column: Image Container (Warm Dining Room Setting) */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#CDD2C9] min-h-[300px] lg:min-h-full group flex flex-col h-full bg-[#2D3A1F]">
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
              alt="Flavoria Restaurant Dining Ambiance"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80';
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/70 via-transparent to-transparent"></div>

            {/* Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#2D3A1F]/80 backdrop-blur-md border border-[#B8A678]/40 text-[#F4F1E8] flex items-center justify-between">
              <div>
                <h4 className="font-heading text-xs font-semibold text-[#F4F1E8]">Cozy Dining Space</h4>
                <p className="text-[11px] text-[#CDD2C9] font-light">Perfect for couples, families, and group get-togethers</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#B8A678] text-[#2D3A1F] font-heading text-[9px] font-bold uppercase tracking-widest">
                ATMOSPHERE
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};


