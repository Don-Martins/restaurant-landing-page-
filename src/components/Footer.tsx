import React, { useState } from 'react';
import { SentIcon, Tick01Icon, ArrowRight01Icon, InstagramIcon, Linkedin01Icon, TwitterIcon } from 'hugeicons-react';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenMap: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenMap }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && privacyAgreed) {
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
    <footer className="bg-[#E8E2D0] text-[#2D3A1F] pt-16 pb-12 font-sans border-t border-[#CDD2C9] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Newsletter & Big Typography Brand Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12">
          
          {/* Left: Headline & Mailbox Input Form */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D3A1F] tracking-tight">
              Culinary Inspirations in your mailbox
            </h3>

            {/* Pill Newsletter Input Bar matching UI reference */}
            {newsletterSubscribed ? (
              <div className="bg-[#2D3A1F] text-[#F4F1E8] p-3.5 rounded-full text-xs font-semibold flex items-center gap-2 max-w-md">
                <Tick01Icon size={18} className="text-[#B8A678]" />
                <span>Thank you! You are subscribed to our private culinary updates.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3 max-w-lg pt-2">
                <div className="flex flex-col sm:flex-row items-center gap-2 bg-[#F4F1E8] rounded-full p-1.5 border border-[#CDD2C9] shadow-sm">
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-transparent px-5 py-2.5 text-xs text-[#2D3A1F] placeholder-[#2D3A1F]/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={!privacyAgreed}
                    className={`w-full sm:w-auto px-7 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      privacyAgreed
                        ? 'bg-[#2D3A1F] text-[#F4F1E8] hover:bg-[#1E2714]'
                        : 'bg-[#CDD2C9] text-[#2D3A1F]/50 cursor-not-allowed'
                    }`}
                  >
                    <span>Send</span>
                    <SentIcon size={14} />
                  </button>
                </div>

                {/* Privacy Agreement Checkbox */}
                <label className="flex items-center gap-2 text-xs text-[#2D3A1F]/80 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    className="rounded text-[#2D3A1F] focus:ring-[#2D3A1F] accent-[#2D3A1F]"
                  />
                  <span>I agree to the <a href="#privacy" className="underline font-semibold">privacy statement</a></span>
                </label>
              </form>
            )}
          </div>

          {/* Right: Big Bold Brand Graphic matching Move Agency style */}
          <div className="lg:col-span-5 flex flex-col lg:items-end justify-center text-left lg:text-right pt-4 lg:pt-0">
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-[#2D3A1F] leading-none">
              FLAVORIA
            </h2>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B8A678] mt-1">
              FINE DINING EXPERIENCE
            </p>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-[#CDD2C9] my-8"></div>

        {/* Middle Navigation & Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-6">
          
          {/* Directly To Navigation */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-heading font-bold text-xs text-[#2D3A1F]/60 uppercase tracking-widest">
              Directly to
            </h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-xs text-[#2D3A1F] font-medium pt-1">
              <button onClick={() => scrollToSection('hero')} className="text-left hover:underline cursor-pointer">
                Vision & Story
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-left hover:underline cursor-pointer">
                About Flavoria
              </button>
              <button onClick={() => scrollToSection('categories')} className="text-left hover:underline cursor-pointer">
                Tasting Menu
              </button>
              <button onClick={() => scrollToSection('chefs')} className="text-left hover:underline cursor-pointer">
                Culinary Team
              </button>
              <button onClick={onOpenReservation} className="text-left hover:underline cursor-pointer">
                Table Reservations
              </button>
              <button onClick={() => scrollToSection('reservation')} className="text-left hover:underline cursor-pointer">
                Private Events
              </button>
            </div>
          </div>

          {/* Venue Locations Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Venue 1 */}
            <div className="space-y-2 text-xs text-[#2D3A1F]">
              <h5 className="font-bold font-heading text-sm text-[#2D3A1F]">Flavoria Main</h5>
              <p className="text-[#2D3A1F]/75 leading-relaxed">
                542 Fine Dining Ave<br />
                New York, NY 10022<br />
                +1 (212) 555-0198
              </p>
              <div className="pt-1">
                <button 
                  onClick={onOpenMap}
                  className="inline-flex items-center gap-1.5 bg-[#B8A678] hover:bg-[#A39266] text-[#2D3A1F] font-bold px-4 py-1.5 rounded-full text-[11px] transition-transform hover:scale-105 cursor-pointer shadow-xs"
                >
                  <span>Route</span>
                  <ArrowRight01Icon size={12} />
                </button>
              </div>
            </div>

            {/* Venue 2 */}
            <div className="space-y-2 text-xs text-[#2D3A1F]">
              <h5 className="font-bold font-heading text-sm text-[#2D3A1F]">Flavoria Uptown</h5>
              <p className="text-[#2D3A1F]/75 leading-relaxed">
                882 Madison Avenue<br />
                New York, NY 10021<br />
                +1 (212) 555-0240
              </p>
              <div className="pt-1">
                <button 
                  onClick={onOpenMap}
                  className="inline-flex items-center gap-1.5 bg-[#B8A678] hover:bg-[#A39266] text-[#2D3A1F] font-bold px-4 py-1.5 rounded-full text-[11px] transition-transform hover:scale-105 cursor-pointer shadow-xs"
                >
                  <span>Route</span>
                  <ArrowRight01Icon size={12} />
                </button>
              </div>
            </div>

            {/* Venue 3 */}
            <div className="space-y-2 text-xs text-[#2D3A1F]">
              <h5 className="font-bold font-heading text-sm text-[#2D3A1F]">Flavoria Waterfront</h5>
              <p className="text-[#2D3A1F]/75 leading-relaxed">
                12 Pier 17 Boulevard<br />
                New York, NY 10038<br />
                +1 (212) 555-0399
              </p>
              <div className="pt-1">
                <button 
                  onClick={onOpenMap}
                  className="inline-flex items-center gap-1.5 bg-[#B8A678] hover:bg-[#A39266] text-[#2D3A1F] font-bold px-4 py-1.5 rounded-full text-[11px] transition-transform hover:scale-105 cursor-pointer shadow-xs"
                >
                  <span>Route</span>
                  <ArrowRight01Icon size={12} />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-[#CDD2C9] my-8"></div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2D3A1F]">
          
          {/* Email with status indicator dot */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B8A678]"></span>
            <a href="mailto:info@flavoriarestaurant.com" className="font-medium hover:underline">
              info@flavoriarestaurant.com
            </a>
          </div>

          {/* Social Icons inside circles & Privacy Policy */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a 
                href="#linkedin" 
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-[#CDD2C9] flex items-center justify-center text-[#2D3A1F] hover:bg-[#2D3A1F] hover:text-[#F4F1E8] transition-all"
              >
                <Linkedin01Icon size={14} />
              </a>
              <a 
                href="#instagram" 
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#CDD2C9] flex items-center justify-center text-[#2D3A1F] hover:bg-[#2D3A1F] hover:text-[#F4F1E8] transition-all"
              >
                <InstagramIcon size={14} />
              </a>
              <a 
                href="#twitter" 
                aria-label="Twitter"
                className="w-8 h-8 rounded-full border border-[#CDD2C9] flex items-center justify-center text-[#2D3A1F] hover:bg-[#2D3A1F] hover:text-[#F4F1E8] transition-all"
              >
                <TwitterIcon size={14} />
              </a>
            </div>

            <a href="#privacy" className="hover:underline font-medium text-[#2D3A1F]/80 ml-2">
              Privacy Policy
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

