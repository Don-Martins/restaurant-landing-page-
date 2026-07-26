import React, { useState, useEffect, useRef } from 'react';
import { REVIEWS } from '../data/restaurantData';
import { StarIcon, QuoteUpIcon, ArrowLeft01Icon, ArrowRight01Icon } from 'hugeicons-react';
import { motion } from 'motion/react';

export const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slider timer (changes slide every 4 seconds if not hovered)
  useEffect(() => {
    if (!isHovered) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
      }, 4000);
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
      className="py-20 md:py-28 bg-[#F4F1E8] border-b border-[#CDD2C9] overflow-hidden select-none"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-normal text-[#2D3A1F] tracking-tight">
            Loved By Thousands of Diners
          </h2>
          <p className="font-sans text-[#2D3A1F]/80 text-base md:text-lg font-light">
            Read genuine experiences from food critics, families, couples, and regulars who make our restaurant their culinary home.
          </p>
        </motion.div>

        {/* Automatic Slider Showcase Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#E8E2D0] rounded-3xl p-8 sm:p-12 shadow-xl border border-[#CDD2C9] transition-all duration-500 min-h-[340px] flex flex-col justify-between hover:border-[#B8A678]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Watermark Quote Background */}
          <QuoteUpIcon size={80} className="absolute top-6 right-8 text-[#2D3A1F]/10 pointer-events-none" />

          {/* Active Testimonial Card Content with Key-based Fade Transition */}
          <div key={currentReview.id} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500 relative z-10">
            {/* Star Rating */}
            <div className="flex items-center text-[#B8A678] gap-1">
              {[...Array(currentReview.rating)].map((_, i) => (
                <StarIcon key={i} size={20} className="fill-current" />
              ))}
              <span className="text-xs font-bold text-[#2D3A1F] ml-2 bg-[#F4F1E8] px-3 py-1 rounded-full border border-[#CDD2C9]">
                5.0 Perfect Score
              </span>
            </div>

            {/* Comment Body */}
            <p className="font-heading italic text-lg sm:text-2xl text-[#2D3A1F] leading-relaxed">
              "{currentReview.comment}"
            </p>

            {/* Author Profile */}
            <div className="pt-6 border-t border-[#CDD2C9]/60 flex items-center gap-4">
              <img
                src={currentReview.avatar}
                alt={currentReview.customerName}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#B8A678] shadow-md"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-heading font-bold text-base text-[#2D3A1F]">
                  {currentReview.customerName}
                </h4>
                <span className="text-xs text-[#2D3A1F]/70 font-medium block">
                  {currentReview.customerRole}
                </span>
              </div>
            </div>
          </div>

          {/* Slider Controls Bar */}
          <div className="mt-8 pt-6 border-t border-[#CDD2C9]/60 flex items-center justify-between relative z-10">
            
            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#2D3A1F]' : 'w-2.5 bg-[#CDD2C9] hover:bg-[#B8A678]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-[#F4F1E8] shadow-md border border-[#CDD2C9] flex items-center justify-center text-[#2D3A1F] hover:bg-[#2D3A1F] hover:text-[#F4F1E8] transition-all cursor-pointer hover:scale-110"
                aria-label="Previous Review"
              >
                <ArrowLeft01Icon size={20} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#F4F1E8] shadow-md border border-[#CDD2C9] flex items-center justify-center text-[#2D3A1F] hover:bg-[#2D3A1F] hover:text-[#F4F1E8] transition-all cursor-pointer hover:scale-110"
                aria-label="Next Review"
              >
                <ArrowRight01Icon size={20} />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};


