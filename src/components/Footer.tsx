import React, { useState } from 'react';
import { SentIcon, Tick01Icon, InstagramIcon, Linkedin01Icon, TwitterIcon, YoutubeIcon } from 'hugeicons-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenMap: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
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
    <footer id="footer" className="bg-[#131B0E] text-[#F4F1E8] pt-16 pb-12 font-sans border-t border-[#2A3B22] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Header Row (Image 3 style: Logo on left, Social pills on right) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-[#2A3B22]">
          {/* Brand Logo */}
          <div className="flex items-center">
            <BrandLogo size="md" />
          </div>

          {/* Yellow/Gold Social Icon Pills (Image 3 style) */}
          <div className="flex items-center gap-2.5">
            <a
              href="#twitter"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-[#B8A678] text-[#131B0E] hover:bg-[#F4F1E8] transition-all flex items-center justify-center cursor-pointer shadow-sm hover:scale-110"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-[#B8A678] text-[#131B0E] hover:bg-[#F4F1E8] transition-all flex items-center justify-center cursor-pointer shadow-sm hover:scale-110"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="#youtube"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full bg-[#B8A678] text-[#131B0E] hover:bg-[#F4F1E8] transition-all flex items-center justify-center cursor-pointer shadow-sm hover:scale-110"
            >
              <YoutubeIcon size={18} />
            </a>
            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-[#B8A678] text-[#131B0E] hover:bg-[#F4F1E8] transition-all flex items-center justify-center cursor-pointer shadow-sm hover:scale-110"
            >
              <Linkedin01Icon size={18} />
            </a>
          </div>
        </div>

        {/* Middle Columns & Newsletter Area (Image 3 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12">
          
          {/* Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Col 1: Menu */}
            <div className="space-y-4">
              <h4 className="font-heading text-sm font-bold text-[#F4F1E8] tracking-wider uppercase">
                Menu
              </h4>
              <ul className="space-y-2.5 text-xs text-[#CDD2C9]/80 font-normal">
                <li>
                  <button onClick={() => scrollToSection('chefs-recommendations')} className="hover:text-[#B8A678] transition-colors cursor-pointer text-left">
                    Our Menu
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('chefs-recommendations')} className="hover:text-[#B8A678] transition-colors cursor-pointer text-left">
                    Starters & Mains
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('chefs-recommendations')} className="hover:text-[#B8A678] transition-colors cursor-pointer text-left">
                    Artisanal Desserts
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('chefs-recommendations')} className="hover:text-[#B8A678] transition-colors cursor-pointer text-left">
                    Wine & Beverages
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 2: Experience */}
            <div className="space-y-4">
              <h4 className="font-heading text-sm font-bold text-[#F4F1E8] tracking-wider uppercase">
                Experience
              </h4>
              <ul className="space-y-2.5 text-xs text-[#CDD2C9]/80 font-normal">
                <li>
                  <button onClick={() => scrollToSection('experience')} className="hover:text-[#B8A678] transition-colors cursor-pointer text-left">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('chefs')} className="hover:text-[#B8A678] transition-colors cursor-pointer text-left">
                    Our Staff
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('testimonials')} className="hover:text-[#B8A678] transition-colors cursor-pointer text-left">
                    Guest Reviews
                  </button>
                </li>
                <li>
                  <button onClick={onOpenReservation} className="hover:text-[#B8A678] transition-colors cursor-pointer text-left">
                    Private Dining
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Visit Us */}
            <div className="space-y-4">
              <h4 className="font-heading text-sm font-bold text-[#F4F1E8] tracking-wider uppercase">
                Visit Us
              </h4>
              <ul className="space-y-2.5 text-xs text-[#CDD2C9]/80 font-normal">
                <li>
                  <span className="text-[#F4F1E8] block font-medium">Main Venue</span>
                  <span className="text-[11px] text-[#CDD2C9]/60">542 Fine Dining Ave, NY</span>
                </li>
                <li>
                  <span className="text-[#F4F1E8] block font-medium">Hours</span>
                  <span className="text-[11px] text-[#CDD2C9]/60">Mon-Sun: 5:00 PM - 11:00 PM</span>
                </li>
                <li>
                  <button onClick={onOpenReservation} className="text-[#B8A678] hover:underline transition-colors cursor-pointer text-left font-semibold">
                    Book A Table →
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Newsletter Box (Image 3 right column) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-heading text-sm font-bold text-[#F4F1E8] tracking-wider uppercase">
              Subscribe to the Flavoria Newsletter
            </h4>

            {newsletterSubscribed ? (
              <div className="bg-[#2A3B22] text-[#F4F1E8] p-3.5 rounded-full text-xs font-medium flex items-center gap-2">
                <Tick01Icon size={18} className="text-[#B8A678]" />
                <span>Thank you for subscribing to our culinary updates.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex items-center bg-[#F4F1E8] rounded-full p-1 border border-[#B8A678]/40 shadow-inner">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-transparent px-5 py-2.5 text-xs text-[#131B0E] placeholder-[#131B0E]/60 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#131B0E] hover:bg-[#2A3B22] text-[#F4F1E8] px-6 py-2.5 rounded-full font-heading font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <span>Subscribe</span>
                    <SentIcon size={12} />
                  </button>
                </div>
                <p className="text-[11px] text-[#CDD2C9]/60 pl-2">
                  By submitting, you agree to Flavoria's Privacy Policy.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Line Bar (Image 3 style) */}
        <div className="pt-8 border-t border-[#2A3B22] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CDD2C9]/60 font-sans">
          <div>
            © 2026 Flavoria Dining Group. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#F4F1E8] transition-colors">Privacy Preferences</a>
            <a href="#legal" className="hover:text-[#F4F1E8] transition-colors">Legal</a>
            <a href="#privacy" className="hover:text-[#F4F1E8] transition-colors">Privacy</a>
            <a href="#sitemap" className="hover:text-[#F4F1E8] transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

