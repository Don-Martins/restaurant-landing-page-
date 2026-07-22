import React from 'react';
import { X, MapPin, Phone, Clock, Navigation } from 'lucide-react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MapModal: React.FC<MapModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-[#FF5B3E] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 bg-[#111111] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-heading font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" /> Restaurant Location & Directions
            </div>
            <h3 className="font-serif text-2xl font-bold">Flavoria Fine Dining</h3>
            <p className="text-xs text-neutral-400 mt-0.5">542 Fine Dining Avenue, New York, NY 10022</p>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF5B3E] hover:bg-[#e04a2f] text-white font-heading text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-colors shrink-0"
          >
            <Navigation className="w-4 h-4" /> Open In Google Maps
          </a>
        </div>

        {/* Map Placeholder Graphic */}
        <div className="relative h-80 bg-neutral-200 flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
            alt="City Map Preview"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Location Pin Card */}
          <div className="absolute bg-white p-4 rounded-2xl shadow-2xl border border-neutral-200 text-[#111111] text-center space-y-1">
            <div className="w-10 h-10 bg-[#FF5B3E] text-white rounded-full flex items-center justify-center mx-auto shadow-md animate-bounce">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-sm">FLAVORIA RESTAURANT</h4>
            <p className="text-xs text-neutral-500">Valet Parking At Main Entrance</p>
          </div>
        </div>

        <div className="p-6 bg-[#FCFAF7] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-700">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            <div>
              <span className="font-bold block">Opening Hours:</span>
              <span>11:30 AM - 11:00 PM Daily</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#FF5B3E]" />
            <div>
              <span className="font-bold block">Phone Desk:</span>
              <span>+1 234 567 8900</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <div>
              <span className="font-bold block">Guest Valet:</span>
              <span>Complimentary Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
