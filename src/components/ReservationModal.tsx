import React, { useState } from 'react';
import { Cancel01Icon, Calendar01Icon, Clock01Icon, UserGroupIcon, Tick01Icon } from 'hugeicons-react';
import { ReservationData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (res: ReservationData) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: 2,
    seatingArea: 'Indoor Dining',
    occasion: 'Dinner',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState<ReservationData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRes: ReservationData = {
      ...formData,
      id: 'FLV-' + Math.floor(100000 + Math.random() * 900000),
      status: 'Confirmed',
    };
    setSubmitted(newRes);
    onSuccess(newRes);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#2D3A1F]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200 overflow-y-auto select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#F4F1E8] text-[#2D3A1F] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#CDD2C9] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#E8E2D0] hover:bg-[#2D3A1F] hover:text-[#F4F1E8] transition-colors cursor-pointer text-[#2D3A1F]"
        >
          <Cancel01Icon size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-[#2D3A1F] text-[#B8A678] rounded-full flex items-center justify-center mx-auto shadow-inner border border-[#B8A678]/30">
              <Tick01Icon size={32} />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-heading font-bold text-[#B8A678] uppercase tracking-widest block">RESERVATION CONFIRMED</span>
              <h3 className="font-heading text-2xl font-bold text-[#2D3A1F]">Your Table Is Reserved!</h3>
              <p className="text-xs text-[#2D3A1F]/80 font-light">
                Confirmation sent to <span className="font-bold text-[#2D3A1F]">{submitted.email}</span>.
              </p>
            </div>

            <div className="bg-[#E8E2D0] border border-dashed border-[#CDD2C9] rounded-2xl p-4 text-left space-y-2 text-xs">
              <div className="flex justify-between items-center border-b border-[#CDD2C9] pb-2">
                <span className="text-[#2D3A1F]/60 font-bold uppercase">Booking ID</span>
                <span className="font-mono font-bold text-[#2D3A1F]">{submitted.id}</span>
              </div>
              <p><strong className="text-[#2D3A1F]">Name:</strong> {submitted.name}</p>
              <p><strong className="text-[#2D3A1F]">Date & Time:</strong> {submitted.date} at {submitted.time}</p>
              <p><strong className="text-[#2D3A1F]">Party:</strong> {submitted.guests} Guests ({submitted.seatingArea})</p>
            </div>

            <button
              onClick={onClose}
              className="bg-[#2D3A1F] hover:bg-[#B8A678] text-[#F4F1E8] hover:text-[#2D3A1F] font-heading text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-colors cursor-pointer"
            >
              Done & Return To App
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1 pr-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#B8A678] uppercase tracking-wider">
                <Calendar01Icon size={16} /> Table Reservation
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#2D3A1F]">Book Your Table</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#2D3A1F] mb-1">Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#B8A678] text-[#2D3A1F]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#2D3A1F] mb-1">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#B8A678] text-[#2D3A1F]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#2D3A1F] mb-1">Date *</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl px-2.5 py-2.5 text-xs focus:outline-none focus:border-[#B8A678] text-[#2D3A1F]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#2D3A1F] mb-1">Time *</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl px-2.5 py-2.5 text-xs focus:outline-none focus:border-[#B8A678] text-[#2D3A1F]"
                >
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="18:00">06:00 PM</option>
                  <option value="19:00">07:00 PM</option>
                  <option value="20:00">08:00 PM</option>
                  <option value="21:00">09:00 PM</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#2D3A1F] mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#B8A678] text-[#2D3A1F]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#2D3A1F] mb-1">Party Size</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                  className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#B8A678] text-[#2D3A1F]"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                    <option key={num} value={num}>{num} Guests</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#2D3A1F] mb-1">Seating Preference</label>
                <select
                  value={formData.seatingArea}
                  onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value as any })}
                  className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#B8A678] text-[#2D3A1F]"
                >
                  <option value="Indoor Dining">Indoor Dining</option>
                  <option value="Outdoor Terrace">Garden Terrace</option>
                  <option value="Chef's Counter">Chef's Counter</option>
                  <option value="Private Dining Room">VIP Suite</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-heading font-bold uppercase text-[#2D3A1F] mb-1">Notes / Occasion</label>
              <input
                type="text"
                placeholder="e.g. Birthday, anniversary, window table..."
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#B8A678] text-[#2D3A1F]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2D3A1F] hover:bg-[#B8A678] text-[#F4F1E8] hover:text-[#2D3A1F] font-heading font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all cursor-pointer shadow-md mt-2"
            >
              Complete Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

