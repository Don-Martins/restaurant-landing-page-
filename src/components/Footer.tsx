import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Heart, Instagram, Facebook, Twitter, Check } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenMap: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenMap }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-12 font-sans border-t border-neutral-800/80 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-neutral-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <BrandLogo size="lg" />
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Handcrafted culinary art, fresh farm ingredients, and unforgettable hospitality in the heart of the city.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a href="#instagram" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#FFD84D] hover:border-[#D4AF37] transition-all hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#facebook" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#FFD84D] hover:border-[#D4AF37] transition-all hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#twitter" aria-label="Twitter" className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#FFD84D] hover:border-[#D4AF37] transition-all hover:scale-110">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-xs text-[#FFD84D] uppercase tracking-widest">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li>
                <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('categories')} className="hover:text-white transition-colors cursor-pointer">
                  Menu
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('experience')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('chefs')} className="hover:text-white transition-colors cursor-pointer">
                  Master Chefs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reservation')} className="hover:text-white transition-colors cursor-pointer">
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Location */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-xs text-[#FFD84D] uppercase tracking-widest">
              HOURS & LOCATION
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-white block">Mon - Sun:</span>
                  <span>11:30 AM - 11:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5B3E] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-white block">Address:</span>
                  <span>542 Fine Dining Ave, New York</span>
                  <button onClick={onOpenMap} className="text-[#FFD84D] hover:underline block text-[11px] mt-0.5 cursor-pointer">
                    View Google Map →
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FFD84D] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-white block">Reservations:</span>
                  <a href="tel:+12345678900" className="hover:text-white transition-colors">+1 234 567 8900</a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: VIP Newsletter */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-xs text-[#FFD84D] uppercase tracking-widest">
              VIP CLUB
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Subscribe to receive secret tasting menu invitations and 15% off birthday reward vouchers.
            </p>

            {newsletterSubscribed ? (
              <div className="bg-emerald-950/80 border border-emerald-500 text-emerald-300 p-3 rounded-xl text-xs font-medium flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Subscribed! Welcome to the VIP Club.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-[#b89428] text-white font-heading text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5" /> Join VIP List
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Flavoria Restaurant. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <a href="#accessibility" className="hover:text-neutral-300 transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
