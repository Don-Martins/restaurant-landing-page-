import React, { useState, useEffect } from 'react';
import { Menu01Icon, Cancel01Icon } from 'hugeicons-react';
import { CartItem } from '../types';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  cart?: CartItem[];
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
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 font-sans pointer-events-none">
      <div className={`max-w-7xl mx-auto w-full pointer-events-auto rounded-full shadow-xl px-5 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between ${
        scrolled ? 'bg-[#F4F1E8]/98 backdrop-blur-md shadow-2xl' : 'bg-[#F4F1E8]/90 backdrop-blur-sm'
      }`}>
        
        {/* Brand Logo on the LEFT */}
        <button 
          onClick={() => scrollToSection('hero', 'menu')} 
          aria-label="Flavoria Home"
          className="flex items-center cursor-pointer hover:opacity-90"
        >
          <BrandLogo size="sm" />
        </button>

        {/* Navigation Links on the RIGHT */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Desktop Navigation Links (Clean layout without background box) */}
          <nav className="hidden md:flex items-center gap-2 sm:gap-4">
            {navItems.map((item) => {
              const isActive = activeTab === item.tab;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, item.tab)}
                  className={`px-5 py-2 rounded-full font-heading text-xs uppercase tracking-widest font-bold cursor-pointer transition-colors ${
                    isActive
                      ? 'bg-[#2D3A1F] text-[#F4F1E8]'
                      : 'text-[#2D3A1F] hover:bg-[#2D3A1F]/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Navigation Drawer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="md:hidden p-2.5 text-[#2D3A1F] hover:bg-[#E8E2D0] rounded-full cursor-pointer"
          >
            {mobileMenuOpen ? <Cancel01Icon size={20} /> : <Menu01Icon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mt-2 max-w-7xl mx-auto bg-[#F4F1E8] rounded-2xl shadow-2xl p-5 space-y-2 font-heading text-xs font-bold uppercase tracking-wider text-[#2D3A1F]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id, item.tab)}
              className={`block w-full text-left py-3 px-4 rounded-xl cursor-pointer ${
                activeTab === item.tab ? 'bg-[#2D3A1F] text-[#F4F1E8]' : 'hover:bg-[#E8E2D0]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};



