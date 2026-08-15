import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { Maximize01Icon, Cancel01Icon, ArrowLeft02Icon, ArrowRight02Icon } from 'hugeicons-react';
import { motion, AnimatePresence } from 'motion/react';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : direction < 0 ? -80 : 0,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : direction < 0 ? 80 : 0,
    opacity: 0,
    scale: 0.97,
  }),
};

export const GallerySection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Layout grid span mapping for the 10 images matching reference UI composition
  const getGridSpan = (index: number) => {
    switch (index) {
      case 0: return 'col-span-1 md:col-span-4 lg:col-span-3 h-[240px] sm:h-[270px] lg:h-[300px]';
      case 1: return 'col-span-1 md:col-span-4 lg:col-span-4 h-[240px] sm:h-[270px] lg:h-[300px]';
      case 2: return 'col-span-1 md:col-span-4 lg:col-span-5 h-[240px] sm:h-[270px] lg:h-[300px]';
      case 3: return 'col-span-1 md:col-span-4 lg:col-span-3 h-[240px] sm:h-[270px] lg:h-[300px]';
      case 4: return 'col-span-1 md:col-span-8 lg:col-span-6 h-[240px] sm:h-[270px] lg:h-[300px]'; // Featured Center Bowl
      case 5: return 'col-span-1 md:col-span-4 lg:col-span-3 h-[240px] sm:h-[270px] lg:h-[300px]';
      case 6: return 'col-span-1 md:col-span-6 lg:col-span-3 h-[240px] sm:h-[270px] lg:h-[300px]';
      case 7: return 'col-span-1 md:col-span-6 lg:col-span-3 h-[240px] sm:h-[270px] lg:h-[300px]';
      case 8: return 'col-span-1 md:col-span-6 lg:col-span-3 h-[240px] sm:h-[270px] lg:h-[300px]';
      case 9: return 'col-span-1 md:col-span-6 lg:col-span-3 h-[240px] sm:h-[270px] lg:h-[300px]';
      default: return 'col-span-1 md:col-span-4 lg:col-span-3 h-[240px] sm:h-[270px] lg:h-[300px]';
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null || isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setLightboxIndex((prev) => (prev! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    setTimeout(() => setIsAnimating(false), 450);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null || isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setLightboxIndex((prev) => (prev! + 1) % GALLERY_ITEMS.length);
    setTimeout(() => setIsAnimating(false), 450);
  };

  // Touch Swipe Handlers for gallery light box
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      handleNext();
    } else if (distance < -40) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, isAnimating]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F4F1E8] text-[#2D3A1F] border-b border-[#CDD2C9] select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="font-serif italic lowercase font-normal text-5xl sm:text-6xl md:text-7xl text-[#2D3A1F] tracking-wide leading-none">
            gallery
          </h2>
          <span className="block font-sans text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#B8A678] mt-2">
            OUR RESTAURANT & DISHES
          </span>
        </motion.div>

        {/* Dynamic Multi-span Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 lg:gap-5">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => {
                setDirection(0);
                setLightboxIndex(index);
              }}
              className={`group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-[#CDD2C9] bg-[#E8E2D0] ${getGridSpan(index)}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-[#F4F1E8] flex items-end justify-between gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#B8A678] block">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-sm sm:text-base font-semibold text-[#F4F1E8] leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="p-2 rounded-full bg-[#B8A678] text-[#2D3A1F] shrink-0">
                  <Maximize01Icon size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Expanded Gallery Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 select-none"
            onClick={() => setLightboxIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Bar: Counter & Close Button */}
            <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
              <span className="bg-white/10 backdrop-blur-md text-[#F4F1E8] text-xs sm:text-sm font-heading font-semibold px-4 py-2 rounded-full border border-white/20 shadow-lg">
                Photo {lightboxIndex + 1} of {GALLERY_ITEMS.length}
              </span>

              <button
                onClick={() => setLightboxIndex(null)}
                className="p-3 rounded-full bg-white/10 text-white hover:bg-[#B8A678] hover:text-[#131B0E] hover:rotate-90 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer pointer-events-auto shadow-xl border border-white/20"
                title="Close Lightbox"
              >
                <Cancel01Icon size={22} />
              </button>
            </div>

            {/* Left Previous Button */}
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 min-w-[44px] min-h-[44px] w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 text-white hover:bg-[#B8A678] hover:text-[#131B0E] hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center border border-white/20 shadow-2xl"
              title="Previous Photo"
            >
              <ArrowLeft02Icon size={26} />
            </button>

            {/* Right Next Button */}
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 min-w-[44px] min-h-[44px] w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 text-white hover:bg-[#B8A678] hover:text-[#131B0E] hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center border border-white/20 shadow-2xl"
              title="Next Photo"
            >
              <ArrowRight02Icon size={26} />
            </button>

            {/* Expanded Fullscreen Image Container with Directional Slide Transition */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={lightboxIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full flex items-center justify-center p-4 sm:p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={GALLERY_ITEMS[lightboxIndex].image}
                  alt={GALLERY_ITEMS[lightboxIndex].title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full max-w-[98vw] max-h-[92vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};


