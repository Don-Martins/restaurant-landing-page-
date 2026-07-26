import React from 'react';
import { Cancel01Icon, Location01Icon, TelephoneIcon, Clock01Icon, Compass01Icon } from 'hugeicons-react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MapModal: React.FC<MapModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#2D3A1F]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#F4F1E8] text-[#2D3A1F] rounded-3xl overflow-hidden shadow-2xl border border-[#CDD2C9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#2D3A1F]/60 text-[#F4F1E8] hover:bg-[#2D3A1F] transition-colors cursor-pointer"
        >
          <Cancel01Icon size={20} />
        </button>

        <div className="p-6 bg-[#2D3A1F] text-[#F4F1E8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#B8A678] text-xs font-heading font-bold uppercase tracking-wider">
              <Location01Icon size={16} /> Restaurant Location & Directions
            </div>
            <h3 className="font-heading text-2xl font-bold">Flavoria Fine Dining</h3>
            <p className="text-xs text-[#F4F1E8]/70 mt-0.5">542 Fine Dining Avenue, New York, NY 10022</p>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#B8A678] hover:bg-[#F4F1E8] text-[#2D3A1F] font-heading text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-colors shrink-0"
          >
            <Compass01Icon size={16} /> Open In Google Maps
          </a>
        </div>

        {/* Map Placeholder Graphic */}
        <div className="relative h-80 bg-[#E8E2D0] flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
            alt="City Map Preview"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#2D3A1F]/20"></div>

          {/* Location Pin Card */}
          <div className="absolute bg-[#F4F1E8] p-4 rounded-2xl shadow-2xl border border-[#CDD2C9] text-[#2D3A1F] text-center space-y-1">
            <div className="w-10 h-10 bg-[#2D3A1F] text-[#B8A678] rounded-full flex items-center justify-center mx-auto shadow-md animate-bounce">
              <Location01Icon size={20} />
            </div>
            <h4 className="font-heading font-bold text-sm">FLAVORIA RESTAURANT</h4>
            <p className="text-xs text-[#2D3A1F]/70">Valet Parking At Main Entrance</p>
          </div>
        </div>

        <div className="p-6 bg-[#E8E2D0] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#2D3A1F]">
          <div className="flex items-center gap-2">
            <Clock01Icon size={16} className="text-[#B8A678]" />
            <div>
              <span className="font-bold block">Opening Hours:</span>
              <span>11:30 AM - 11:00 PM Daily</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <TelephoneIcon size={16} className="text-[#B8A678]" />
            <div>
              <span className="font-bold block">Phone Desk:</span>
              <span>+1 234 567 8900</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Location01Icon size={16} className="text-[#2D3A1F]" />
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

