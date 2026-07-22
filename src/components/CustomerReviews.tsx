import React, { useState, useEffect, useRef } from 'react';
import { REVIEWS } from '../data/restaurantData';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
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
      className="py-20 md:py-28 bg-white border-b border-neutral-100 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Loved By Thousands of Diners
          </h2>
          <p className="font-sans text-neutral-600 text-base md:text-lg">
            Read genuine experiences from food critics, families, couples, and regulars who make our restaurant their culinary home.
          </p>
        </motion.div>

        {/* Automatic Slider Showcase Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#FCFAF7] rounded-3xl p-8 sm:p-12 shadow-xl border border-neutral-200/80 transition-all duration-500 min-h-[340px] flex flex-col justify-between hover:border-[#D4AF37]/50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Watermark Quote Background */}
          <Quote className="absolute top-6 right-8 w-20 h-20 text-[#FF5B3E]/10 pointer-events-none" />

          {/* Active Testimonial Card Content with Key-based Fade Transition */}
          <div key={currentReview.id} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500 relative z-10">
            {/* Star Rating */}
            <div className="flex items-center text-[#FFD84D] gap-1">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="text-xs font-bold text-neutral-800 ml-2 bg-white px-2.5 py-0.5 rounded-full border border-neutral-200 shadow-xs">
                5.0 Perfect Score
              </span>
            </div>

            {/* Comment Body */}
            <p className="font-serif text-lg sm:text-2xl text-neutral-800 leading-relaxed italic">
              "{currentReview.comment}"
            </p>

            {/* Author Profile */}
            <div className="pt-6 border-t border-neutral-200/70 flex items-center gap-4">
              <img
                src={currentReview.avatar}
                alt={currentReview.customerName}
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-heading font-bold text-base text-[#111111]">
                  {currentReview.customerName}
                </h4>
                <span className="text-xs text-neutral-500 font-medium block">
                  {currentReview.customerRole}
                </span>
              </div>
            </div>
          </div>

          {/* Slider Controls Bar */}
          <div className="mt-8 pt-6 border-t border-neutral-200/40 flex items-center justify-between relative z-10">
            
            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#FF5B3E]' : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-[#111111] hover:text-white transition-all cursor-pointer hover:scale-110"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-[#FF5B3E] hover:text-white transition-all cursor-pointer hover:scale-110"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

