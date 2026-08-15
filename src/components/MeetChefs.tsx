import React, { useState } from 'react';
import { CHEFS } from '../data/restaurantData';
import { motion, AnimatePresence } from 'motion/react';
import { TwitterIcon, Linkedin01Icon, InstagramIcon } from 'hugeicons-react';

export const MeetChefs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeChef = CHEFS[activeIndex] || CHEFS[0];

  return (
    <section id="chefs" className="py-20 md:py-28 bg-[#F4F1E8] text-[#2D3A1F] border-b border-[#CDD2C9] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Clean typography without background cards or tags */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Heading (No tag pill) */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D3A1F] tracking-tight leading-[1.15]">
              Meet Our Team
            </h2>

            {/* Selected Member Active Info - Direct text with NO card covering it */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChef.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-4 pt-2"
              >
                <div>
                  <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8A678] block mb-1">
                    {activeChef.role}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-[#2D3A1F]">
                    {activeChef.name}
                  </h3>
                </div>

                <p className="font-sans text-[#2D3A1F]/80 text-sm sm:text-base font-light leading-relaxed max-w-md">
                  {activeChef.bio}
                </p>

                {/* Social Media Links */}
                <div className="flex items-center gap-3 pt-1">
                  {activeChef.socials?.twitter && (
                    <a
                      href={activeChef.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${activeChef.name} Twitter`}
                      className="w-9 h-9 rounded-full bg-[#2D3A1F]/10 text-[#2D3A1F] hover:bg-[#2D3A1F] hover:text-[#F4F1E8] transition-all flex items-center justify-center cursor-pointer hover:scale-110"
                    >
                      <TwitterIcon size={16} />
                    </a>
                  )}
                  {activeChef.socials?.linkedin && (
                    <a
                      href={activeChef.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${activeChef.name} LinkedIn`}
                      className="w-9 h-9 rounded-full bg-[#2D3A1F]/10 text-[#2D3A1F] hover:bg-[#2D3A1F] hover:text-[#F4F1E8] transition-all flex items-center justify-center cursor-pointer hover:scale-110"
                    >
                      <Linkedin01Icon size={16} />
                    </a>
                  )}
                  {activeChef.socials?.instagram && (
                    <a
                      href={activeChef.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${activeChef.name} Instagram`}
                      className="w-9 h-9 rounded-full bg-[#2D3A1F]/10 text-[#2D3A1F] hover:bg-[#2D3A1F] hover:text-[#F4F1E8] transition-all flex items-center justify-center cursor-pointer hover:scale-110"
                    >
                      <InstagramIcon size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: 3 Team Member Images on Same Horizontal Line with Dynamic Expansion */}
          <div className="lg:col-span-7">
            <div className="flex flex-row gap-2.5 sm:gap-4 h-[360px] sm:h-[480px] w-full">
              {CHEFS.slice(0, 3).map((chef, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={chef.id}
                    onClick={() => setActiveIndex(index)}
                    layout
                    transition={{
                      layout: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
                    }}
                    className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border-0 ${
                      isActive
                        ? 'flex-[3] sm:flex-[3.5] shadow-2xl'
                        : 'flex-[1] sm:flex-[1] opacity-75 hover:opacity-100'
                    }`}
                  >
                    {/* Background Image */}
                    <img
                      src={chef.image}
                      alt={chef.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle Overlay on hover/inactive */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        isActive
                          ? 'opacity-0'
                          : 'bg-[#131B0E]/20 hover:bg-transparent opacity-100'
                      }`}
                    ></div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
