import React, { useState, useEffect, useRef } from 'react';
import { REVIEWS } from '../data/restaurantData';
import { StarIcon, QuoteUpIcon, ArrowLeft01Icon, ArrowRight01Icon } from 'hugeicons-react';
import { motion, AnimatePresence } from 'motion/react';

export const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slider timer (changes slide every 4.5 seconds)
  useEffect(() => {
    if (!isHovered) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
      }, 4500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-[#131B0E] text-[#F4F1E8] border-b border-[#2A3B22] overflow-hidden select-none relative"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(184,166,120,0.08)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-16"
        >
          <span className="font-heading text-xs font-bold text-[#B8A678] tracking-[0.25em] uppercase block">
            GUEST EXPERIENCES
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-normal text-[#F4F1E8] tracking-tight">
            What Our Guests Say
          </h2>
          <p className="font-sans text-[#CDD2C9]/80 text-base md:text-lg font-light">
            Real stories from people who have shared memorable dining moments with us.
          </p>
        </motion.div>

        {/* Unique Dark Modern Automatic Slider Container */}
        <div
          className="relative bg-[#1E2B18] rounded-3xl p-8 sm:p-14 shadow-2xl border border-[#B8A678]/20 transition-all duration-500 min-h-[360px] flex flex-col justify-between group overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Auto-Slide Progress Bar at Top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
            {!isHovered && (
              <motion.div
                key={currentIndex}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 4.5, ease: 'linear' }}
                className="h-full bg-[#B8A678]"
              />
            )}
          </div>

          {/* Watermark Quote Icon */}
          <QuoteUpIcon size={110} className="absolute -top-4 -right-4 text-[#B8A678]/10 pointer-events-none" />

          {/* Active Testimonial Card with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 relative z-10"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 text-[#B8A678]">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <StarIcon key={i} size={18} className="fill-current" />
                ))}
              </div>

              {/* Comment Body */}
              <p className="font-heading italic text-xl sm:text-2xl md:text-3xl text-[#F4F1E8] leading-relaxed font-light">
                "{currentReview.comment}"
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-[#CDD2C9]/15 flex items-center gap-4">
                <img
                  src={currentReview.avatar}
                  alt={currentReview.customerName}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#B8A678] shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-heading font-bold text-lg text-[#F4F1E8]">
                    {currentReview.customerName}
                  </h4>
                  <span className="text-xs text-[#B8A678] font-medium block">
                    {currentReview.customerRole}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls Bar */}
          <div className="mt-10 pt-6 border-t border-[#CDD2C9]/15 flex items-center justify-between relative z-10">
            
            {/* Custom Dot Indicators */}
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#B8A678]' : 'w-2 bg-[#CDD2C9]/30 hover:bg-[#B8A678]/60'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-[#131B0E] border border-[#B8A678]/30 flex items-center justify-center text-[#F4F1E8] hover:bg-[#B8A678] hover:text-[#131B0E] transition-all cursor-pointer hover:scale-105"
                aria-label="Previous Review"
              >
                <ArrowLeft01Icon size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-[#131B0E] border border-[#B8A678]/30 flex items-center justify-center text-[#F4F1E8] hover:bg-[#B8A678] hover:text-[#131B0E] transition-all cursor-pointer hover:scale-105"
                aria-label="Next Review"
              >
                <ArrowRight01Icon size={18} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};


