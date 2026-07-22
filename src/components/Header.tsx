import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu as MenuIcon, X, Calendar, Utensils } from 'lucide-react';
import { CartItem } from '../types';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenReservation: () => void;
  onOpenSearch: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  cart,
  onOpenCart,
  onOpenReservation,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full font-sans sticky top-0 z-50 transition-all duration-300">
      {/* Floating Dark Glassmorphism Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-md shadow-2xl py-3 border-b border-neutral-800'
            : 'bg-neutral-950/90 backdrop-blur-sm py-4 border-b border-neutral-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Brand Emblem Logo */}
          <button 
            onClick={() => scrollToSection('hero')} 
            aria-label="Home"
            className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <BrandLogo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-heading text-xs font-bold tracking-widest uppercase text-neutral-200">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-[#FFD84D] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#FFD84D] after:transition-all cursor-pointer"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('categories')}
              className="hover:text-[#FFD84D] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#FFD84D] after:transition-all cursor-pointer"
            >
              MENU
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="hover:text-[#FFD84D] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#FFD84D] after:transition-all cursor-pointer"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('reservation')}
              className="hover:text-[#FFD84D] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#FFD84D] after:transition-all cursor-pointer"
            >
              CONTACT
            </button>
          </nav>

          {/* Right Action Icons & Primary CTA */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-neutral-300 hover:text-[#FFD84D] hover:bg-neutral-800 rounded-full transition-all cursor-pointer"
              title="Search Menu"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Icon button */}
            <button
              onClick={onOpenCart}
              className="p-2.5 text-neutral-300 hover:text-[#FFD84D] hover:bg-neutral-800 rounded-full transition-all relative cursor-pointer"
              title="View Cart / Orders"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF5B3E] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-neutral-950 animate-bounce">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Reserve Table Button (Desktop) */}
            <button
              onClick={onOpenReservation}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#D4AF37] hover:bg-[#b89428] text-white font-heading font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>RESERVE TABLE</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-neutral-950 border-t border-neutral-800 px-6 py-6 space-y-4 font-heading text-sm font-semibold tracking-wider uppercase text-neutral-200 animate-in fade-in duration-200">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left py-2 hover:text-[#FFD84D] transition-colors border-b border-neutral-800"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('categories')}
              className="block w-full text-left py-2 hover:text-[#FFD84D] transition-colors border-b border-neutral-800"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left py-2 hover:text-[#FFD84D] transition-colors border-b border-neutral-800"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('reservation')}
              className="block w-full text-left py-2 hover:text-[#FFD84D] transition-colors border-b border-neutral-800"
            >
              Contact
            </button>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full bg-[#D4AF37] hover:bg-[#b89428] text-white font-heading font-bold text-center py-3 rounded-xl shadow transition-all uppercase flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Reserve A Table
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full bg-neutral-800 text-white font-heading font-semibold text-center py-3 rounded-xl shadow transition-all uppercase flex items-center justify-center gap-2 border border-neutral-700"
              >
                <ShoppingBag className="w-4 h-4 text-[#FFD84D]" /> View Cart ({totalCartCount})
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
