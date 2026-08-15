import React, { useState, useEffect } from 'react';
import { Menu01Icon, Cancel01Icon } from 'hugeicons-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenCart?: () => void;
  onOpenReservation?: () => void;
  onOpenSearch?: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('menu');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = [
        { id: 'hero', tab: 'menu' },
        { id: 'chefs-recommendations', tab: 'menu' },
        { id: 'categories', tab: 'menu' },
        { id: 'experience', tab: 'about' },
        { id: 'reservation', tab: 'contact' },
        { id: 'footer', tab: 'contact' },
      ];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section.tab);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, tabName: string) => {
    setActiveTab(tabName);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'chefs-recommendations', tab: 'menu', label: 'Menu' },
    { id: 'experience', tab: 'about', label: 'About' },
    { id: 'reservation', tab: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Backdrop overlay for closing mobile menu on click outside */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/25 z-40 md:hidden pointer-events-auto backdrop-blur-[2px]"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 pt-2.5 sm:pt-3 px-3 sm:px-8 md:px-12 font-sans pointer-events-none"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          {/* Main Navbar Floating Pill */}
          <div className={`w-full h-[58px] sm:h-[64px] pointer-events-auto rounded-full shadow-lg px-3.5 sm:px-6 flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'bg-[#F4F1E8]/98 backdrop-blur-md shadow-xl border border-[#CDD2C9]/70' : 'bg-[#F4F1E8]/92 backdrop-blur-sm border border-[#CDD2C9]/50'
          }`}>
            
            {/* Brand Logo on the LEFT */}
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveTab('menu');
                setMobileMenuOpen(false);
              }} 
              aria-label="Fauget Restaurant Home"
              className="flex items-center gap-2.5 cursor-pointer outline-none"
            >
              <BrandLogo size="nav" variant="dark" background="transparent" badge={false} />
            </button>

            {/* Navigation Links & Mobile Toggle on the RIGHT */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Desktop Navigation Links */}
              <nav className="hidden md:flex items-center gap-1 sm:gap-2 relative">
                {navItems.map((item) => {
                  const isActive = activeTab === item.tab;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id, item.tab)}
                      className={`relative px-4 py-1.5 rounded-full font-heading text-xs uppercase tracking-widest font-semibold cursor-pointer transition-colors duration-200 outline-none ${
                        isActive
                          ? 'text-[#F4F1E8]'
                          : 'text-[#2D3A1F] hover:text-[#B8A678]'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavPill"
                          className="absolute inset-0 bg-[#2D3A1F] rounded-full shadow-sm z-0"
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 32,
                          }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Mobile Hamburger Drawer Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
                className="md:hidden p-2 text-[#2D3A1F] hover:bg-[#E8E2D0] active:scale-95 rounded-full cursor-pointer transition-all flex items-center justify-center w-10 h-10 outline-none"
              >
                {mobileMenuOpen ? <Cancel01Icon size={22} /> : <Menu01Icon size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="pointer-events-auto mt-2 w-full max-w-full bg-[#F4F1E8] border border-[#CDD2C9] rounded-2xl shadow-2xl p-4 space-y-2 font-heading text-xs font-bold uppercase tracking-wider text-[#2D3A1F]"
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id, item.tab)}
                    className={`block w-full text-left py-3 px-4 rounded-xl cursor-pointer transition-colors ${
                      activeTab === item.tab ? 'bg-[#2D3A1F] text-[#F4F1E8]' : 'hover:bg-[#E8E2D0]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};





