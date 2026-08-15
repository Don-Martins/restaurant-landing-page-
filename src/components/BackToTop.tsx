import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-20 sm:bottom-8 right-6 z-40 p-3.5 bg-[#2D3A1F] text-[#F4F1E8] border border-[#B8A678]/60 rounded-full shadow-2xl hover:bg-[#B8A678] hover:text-[#2D3A1F] hover:scale-110 active:scale-95 transition-all cursor-pointer group flex items-center justify-center"
          title="Back to Top"
        >
          <span className="group-hover:-translate-y-1 transition-transform duration-300 inline-flex items-center justify-center">
            <ArrowUp size={20} />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

