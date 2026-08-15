import React, { useState, useEffect, useRef } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/restaurantData';
import { Cancel01Icon, StarIcon, Clock01Icon, FireIcon, ArrowLeft02Icon, ArrowRight02Icon } from 'hugeicons-react';
import { motion, AnimatePresence } from 'motion/react';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  allDishes?: MenuItem[];
}

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

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  allDishes = MENU_ITEMS,
}) => {
  const [currentDishId, setCurrentDishId] = useState<string | null>(dish?.id || null);
  const [direction, setDirection] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    if (dish) {
      setCurrentDishId(dish.id);
      setDirection(0);
    }
  }, [dish]);

  const currentIndex = allDishes.findIndex((d) => d.id === currentDishId);
  const currentDish = currentIndex !== -1 ? allDishes[currentIndex] : dish;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isAnimating || allDishes.length <= 1) return;
    setIsAnimating(true);
    setDirection(-1);
    const prevIndex = (currentIndex - 1 + allDishes.length) % allDishes.length;
    setCurrentDishId(allDishes[prevIndex].id);
    setTimeout(() => setIsAnimating(false), 450);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isAnimating || allDishes.length <= 1) return;
    setIsAnimating(true);
    setDirection(1);
    const nextIndex = (currentIndex + 1) % allDishes.length;
    setCurrentDishId(allDishes[nextIndex].id);
    setTimeout(() => setIsAnimating(false), 450);
  };

  // Touch Swipe Handlers for mobile swipe gesture
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
      if (!dish) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, allDishes, dish, isAnimating]);

  return (
    <AnimatePresence>
      {dish && currentDish && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-[#131B0E]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto select-none"
          onClick={onClose}
        >
          {/* Main Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl bg-[#F4F1E8] text-[#2D3A1F] rounded-3xl overflow-hidden shadow-2xl border border-[#CDD2C9] my-6 sm:my-8"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Controls: Close Button & Counter */}
            <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
              <span className="bg-[#2D3A1F]/80 backdrop-blur-md text-[#F4F1E8] text-xs font-heading font-semibold px-3.5 py-1.5 rounded-full border border-[#B8A678]/40 shadow-md">
                Dish {currentIndex + 1} of {allDishes.length}
              </span>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-[#2D3A1F]/80 text-[#F4F1E8] hover:bg-[#B8A678] hover:text-[#2D3A1F] hover:rotate-90 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer pointer-events-auto shadow-lg border border-white/20"
                title="Close"
              >
                <Cancel01Icon size={18} />
              </button>
            </div>

            {/* Left & Right Navigation Arrows */}
            {allDishes.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  disabled={isAnimating}
                  className="absolute left-3 top-48 -translate-y-1/2 z-30 min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#2D3A1F]/80 text-[#F4F1E8] hover:bg-[#B8A678] hover:text-[#2D3A1F] hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center border border-white/20 shadow-xl"
                  title="Previous Dish"
                >
                  <ArrowLeft02Icon size={22} />
                </button>

                <button
                  onClick={handleNext}
                  disabled={isAnimating}
                  className="absolute right-3 top-48 -translate-y-1/2 z-30 min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#2D3A1F]/80 text-[#F4F1E8] hover:bg-[#B8A678] hover:text-[#2D3A1F] hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center border border-white/20 shadow-xl"
                  title="Next Dish"
                >
                  <ArrowRight02Icon size={22} />
                </button>
              </>
            )}

            {/* Animated Dish Content Container */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentDish.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                {/* Dish Photo - Designed to fit image perfectly with rich proportion */}
                <div className="relative h-72 sm:h-88 md:h-96 overflow-hidden bg-[#E8E2D0] flex items-center justify-center">
                  <img
                    src={currentDish.image}
                    alt={currentDish.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/90 via-[#2D3A1F]/20 to-transparent pointer-events-none"></div>

                  {/* Dish Title & Metrics */}
                  <div className="absolute bottom-4 left-5 right-5 text-[#F4F1E8]">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#B8A678] block">
                      {currentDish.category}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-semibold mb-1 leading-snug">{currentDish.name}</h3>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-[#F4F1E8]/90 mt-1 flex-wrap">
                      <span className="flex items-center gap-1 text-[#B8A678] font-semibold">
                        <span className="fill-current inline-flex">
                          <StarIcon size={16} />
                        </span> {currentDish.rating} ({currentDish.reviewsCount} reviews)
                      </span>
                      {currentDish.prepTime && (
                        <span className="flex items-center gap-1">
                          <Clock01Icon size={15} /> {currentDish.prepTime}
                        </span>
                      )}
                      {currentDish.calories && (
                        <span className="flex items-center gap-1">
                          <span className="text-[#B8A678] inline-flex">
                            <FireIcon size={15} />
                          </span> {currentDish.calories} kcal
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Dish Story & Details (NO Price Tag, NO Add to Cart button) */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-1">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#B8A678]">
                      Dish Story & Description
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-[#2D3A1F]/85 leading-relaxed font-light">
                      {currentDish.description}
                    </p>
                  </div>

                  {/* Dietary Tags */}
                  {currentDish.dietary && currentDish.dietary.length > 0 && (
                    <div>
                      <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#2D3A1F]/60 mb-2">
                        Dietary & Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentDish.dietary.map((tag) => (
                          <span
                            key={tag}
                            className="bg-[#E8E2D0] text-[#2D3A1F] border border-[#CDD2C9] text-xs px-3 py-1 rounded-full font-medium"
                          >
                            ✓ {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Swipe Hint on Mobile */}
                  <div className="text-center text-[11px] text-[#2D3A1F]/60 font-sans italic sm:hidden">
                    ← Swipe left or right to view more dishes →
                  </div>

                  {/* Action Button: Single Close Button */}
                  <div className="pt-2 border-t border-[#CDD2C9] flex items-center justify-end">
                    <button
                      onClick={onClose}
                      className="w-full py-3 px-5 bg-[#2D3A1F] text-[#F4F1E8] hover:bg-[#B8A678] hover:text-[#2D3A1F] font-heading text-xs font-bold uppercase tracking-widest rounded-2xl transition-all cursor-pointer border border-[#CDD2C9] shadow-sm"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
