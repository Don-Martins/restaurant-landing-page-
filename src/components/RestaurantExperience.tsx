import React from 'react';
import { motion } from 'motion/react';

interface RestaurantExperienceProps {
  onOpenReservation: () => void;
}

export const RestaurantExperience: React.FC<RestaurantExperienceProps> = ({ onOpenReservation }) => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#F4F1E8] text-[#2D3A1F] border-b border-[#CDD2C9] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* About Section Wrapper Container matching UI Reference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 border border-[#CDD2C9] shadow-2xl space-y-12"
        >
          {/* Header Row: Title on Left, Description on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            <div className="lg:col-span-6">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3A1F] tracking-tight leading-tight">
                The <span className="text-[#B8A678]">Story</span> Behind <br className="hidden sm:block" />
                Flavoria Dining
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="font-sans text-[#2D3A1F]/75 text-sm sm:text-base leading-relaxed font-light">
                Flavoria delights food enthusiasts through seasonal, chef-curated tasting menus designed for authentic culinary joy. We have cultivated an intimate dining sanctuary where heirloom ingredients meet master technique, and passion creates unforgettable moments.
              </p>
            </div>
          </div>

          {/* Main Content Split: Team Photo Left, Stat Cards Stack Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left: Collaborative Kitchen/Staff Photo */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[420px] shadow-lg border border-[#CDD2C9]/60 group">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
                alt="Flavoria Collaborative Culinary Team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/30 via-transparent to-transparent"></div>
            </div>

            {/* Right: "What Makes Us Different" Stat Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <h3 className="font-heading text-2xl font-bold text-[#2D3A1F] pb-1">
                What Makes Us Different
              </h3>

              {/* Card 1 */}
              <div className="bg-[#F4F1E8]/70 hover:bg-[#F4F1E8] p-5 rounded-2xl border border-[#CDD2C9]/60 flex items-center gap-5 transition-all duration-300 hover:border-[#B8A678] hover:shadow-md">
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#2D3A1F] whitespace-nowrap min-w-[100px]">
                  50K<span className="text-[#B8A678] ml-0.5">+</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#2D3A1F]">
                    Happy Guests Welcomed
                  </h4>
                  <p className="text-xs text-[#2D3A1F]/70 font-sans mt-0.5">
                    Trusted by thousands of local & international diners.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#F4F1E8]/70 hover:bg-[#F4F1E8] p-5 rounded-2xl border border-[#CDD2C9]/60 flex items-center gap-5 transition-all duration-300 hover:border-[#B8A678] hover:shadow-md">
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#2D3A1F] whitespace-nowrap min-w-[100px]">
                  45<span className="text-[#B8A678] ml-0.5">+</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#2D3A1F]">
                    Artisanal Recipes
                  </h4>
                  <p className="text-xs text-[#2D3A1F]/70 font-sans mt-0.5">
                    Curated across 5 seasonal tasting categories.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#F4F1E8]/70 hover:bg-[#F4F1E8] p-5 rounded-2xl border border-[#CDD2C9]/60 flex items-center gap-5 transition-all duration-300 hover:border-[#B8A678] hover:shadow-md">
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#2D3A1F] whitespace-nowrap min-w-[100px]">
                  29<span className="text-[#B8A678] ml-0.5">+</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#2D3A1F]">
                    Expert Chefs & Sommeliers
                  </h4>
                  <p className="text-xs text-[#2D3A1F]/70 font-sans mt-0.5">
                    Trained in world-renowned Michelin-starred kitchens.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#F4F1E8]/70 hover:bg-[#F4F1E8] p-5 rounded-2xl border border-[#CDD2C9]/60 flex items-center gap-5 transition-all duration-300 hover:border-[#B8A678] hover:shadow-md">
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#2D3A1F] whitespace-nowrap min-w-[100px]">
                  4.9
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#2D3A1F]">
                    Consistent Guest Rating
                  </h4>
                  <p className="text-xs text-[#2D3A1F]/70 font-sans mt-0.5">
                    Celebrated for warmth, flavor, and ambient service.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
