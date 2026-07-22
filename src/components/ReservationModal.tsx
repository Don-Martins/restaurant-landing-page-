import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';
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
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-[#FF5B3E] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-heading font-bold text-[#D4AF37] uppercase tracking-widest block">RESERVATION CONFIRMED</span>
              <h3 className="font-serif text-2xl font-bold text-[#111111]">Your Table Is Reserved!</h3>
              <p className="text-xs text-neutral-600">
                Confirmation sent to <span className="font-bold text-[#111111]">{submitted.email}</span>.
              </p>
            </div>

            <div className="bg-[#FCFAF7] border border-dashed border-neutral-300 rounded-2xl p-4 text-left space-y-2 text-xs">
              <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                <span className="text-neutral-500 font-bold uppercase">Booking ID</span>
                <span className="font-mono font-bold text-[#FF5B3E]">{submitted.id}</span>
              </div>
              <p><strong className="text-[#111111]">Name:</strong> {submitted.name}</p>
              <p><strong className="text-[#111111]">Date & Time:</strong> {submitted.date} at {submitted.time}</p>
              <p><strong className="text-[#111111]">Party:</strong> {submitted.guests} Guests ({submitted.seatingArea})</p>
            </div>

            <button
              onClick={onClose}
              className="bg-[#111111] hover:bg-[#FF5B3E] text-white font-heading text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-colors cursor-pointer"
            >
              Done & Return To App
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1 pr-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#D4AF37] uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" /> Table Reservation
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#111111]">Book Your Table</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-neutral-700 mb-1">Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#FF5B3E]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-neutral-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#FF5B3E]"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-neutral-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#FF5B3E]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-neutral-700 mb-1">Date *</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-2 py-2.5 text-xs focus:outline-none focus:border-[#FF5B3E]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-neutral-700 mb-1">Time *</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-2 py-2.5 text-xs focus:outline-none focus:border-[#FF5B3E]"
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

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-neutral-700 mb-1">Party Size</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                  className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#FF5B3E]"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                    <option key={num} value={num}>{num} Guests</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-neutral-700 mb-1">Seating Area</label>
                <select
                  value={formData.seatingArea}
                  onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value as any })}
                  className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#FF5B3E]"
                >
                  <option value="Indoor Dining">Indoor Dining</option>
                  <option value="Outdoor Terrace">Garden Terrace</option>
                  <option value="Chef's Counter">Chef's Counter</option>
                  <option value="Private Dining Room">VIP Suite</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-heading font-bold uppercase text-neutral-700 mb-1">Notes / Occasion</label>
              <input
                type="text"
                placeholder="e.g. Birthday, anniversary, window table..."
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#FF5B3E]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#D4AF37] hover:bg-[#b89428] text-white font-heading font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all cursor-pointer shadow-md mt-2"
            >
              Complete Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
