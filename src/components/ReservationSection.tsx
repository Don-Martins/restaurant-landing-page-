import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Phone, CheckCircle2, Sparkles, Utensils, Heart } from 'lucide-react';
import { ReservationData } from '../types';

interface ReservationSectionProps {
  onSuccessReservation: (res: ReservationData) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ onSuccessReservation }) => {
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
    onSuccessReservation(newRes);
  };

  return (
    <section id="reservation" className="py-20 md:py-28 bg-[#111111] text-white relative overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF5B3E]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Info & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Reserve Your Table <br />
              <span className="font-serif italic text-[#FFD84D]">Tonight.</span>
            </h2>

            <p className="font-sans text-neutral-300 text-base leading-relaxed">
              Join us for an unforgettable culinary journey. Booking online takes under 30 seconds and guarantees your candlelit table with zero wait time upon arrival.
            </p>

            <div className="space-y-6 pt-2 border-t border-neutral-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-800 rounded-xl text-[#FFD84D]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Opening Hours</h4>
                  <p className="text-sm text-neutral-400 mt-0.5">Monday - Sunday: 11:30 AM - 11:00 PM</p>
                  <p className="text-xs text-[#D4AF37] mt-0.5">Chef's Tasting served 6:00 PM - 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-800 rounded-xl text-[#FF5B3E]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Direct Reservation Desk</h4>
                  <p className="text-sm text-neutral-400 mt-0.5">+1 234 567 8900</p>
                  <p className="text-xs text-neutral-500">Call for parties of 12 or more</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-800 rounded-xl text-[#FFD84D]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Location & Parking</h4>
                  <p className="text-sm text-neutral-400 mt-0.5">542 Fine Dining Avenue, New York, NY</p>
                  <p className="text-xs text-emerald-400 mt-0.5">★ Free Guest Valet Parking Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Reservation Form */}
          <div className="lg:col-span-7 bg-white text-[#111111] rounded-3xl p-6 sm:p-10 shadow-2xl border border-neutral-200">
            {submitted ? (
              <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-heading font-bold text-[#D4AF37] uppercase tracking-widest block">RESERVATION CONFIRMED</span>
                  <h3 className="font-serif text-3xl font-bold text-[#111111]">We Look Forward To Welcoming You!</h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    A confirmation email and SMS reminder have been dispatched to <span className="font-bold text-[#111111]">{submitted.email}</span>.
                  </p>
                </div>

                {/* Ticket Box */}
                <div className="bg-[#FCFAF7] border border-dashed border-neutral-300 rounded-2xl p-6 max-w-md mx-auto text-left space-y-3 font-sans text-sm">
                  <div className="flex justify-between items-center border-b border-neutral-200 pb-3">
                    <span className="text-neutral-500 text-xs uppercase font-heading font-bold">Booking Reference</span>
                    <span className="font-mono font-bold text-[#FF5B3E] text-base">{submitted.id}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-neutral-500 block">Guest Name:</span>
                      <span className="font-bold text-[#111111]">{submitted.name}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block">Party Size:</span>
                      <span className="font-bold text-[#111111]">{submitted.guests} Guests</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block">Date & Time:</span>
                      <span className="font-bold text-[#111111]">{submitted.date} at {submitted.time}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block">Seating Area:</span>
                      <span className="font-bold text-[#111111]">{submitted.seatingArea}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSubmitted(null)}
                  className="bg-[#111111] hover:bg-[#FF5B3E] text-white font-heading text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-colors cursor-pointer"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-heading text-2xl font-bold text-[#111111]">Book Your Table</h3>
                  <p className="text-xs text-neutral-500">Select your preferred date, seating, and party details.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF5B3E] focus:ring-1 focus:ring-[#FF5B3E] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF5B3E] focus:ring-1 focus:ring-[#FF5B3E] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-neutral-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF5B3E] focus:ring-1 focus:ring-[#FF5B3E] transition-all"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-neutral-700 mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF5B3E] focus:ring-1 focus:ring-[#FF5B3E] transition-all"
                    />
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-neutral-700 mb-1">
                      Time Slot *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF5B3E] focus:ring-1 focus:ring-[#FF5B3E] transition-all"
                    >
                      <option value="12:00">12:00 PM (Lunch)</option>
                      <option value="13:00">01:00 PM (Lunch)</option>
                      <option value="14:00">02:00 PM (Lunch)</option>
                      <option value="18:00">06:00 PM (Dinner)</option>
                      <option value="19:00">07:00 PM (Dinner)</option>
                      <option value="20:00">08:00 PM (Dinner)</option>
                      <option value="21:00">09:00 PM (Late Dinner)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Party Size */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-neutral-700 mb-1">
                      Guests (Party Size) *
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                      className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF5B3E] focus:ring-1 focus:ring-[#FF5B3E] transition-all"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>

                  {/* Seating Preference */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-neutral-700 mb-1">
                      Seating Preference
                    </label>
                    <select
                      value={formData.seatingArea}
                      onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value as any })}
                      className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF5B3E] focus:ring-1 focus:ring-[#FF5B3E] transition-all"
                    >
                      <option value="Indoor Dining">Indoor Dining Room</option>
                      <option value="Outdoor Terrace">Outdoor Garden Terrace</option>
                      <option value="Chef's Counter">Chef's Tasting Counter</option>
                      <option value="Private Dining Room">VIP Private Dining Room</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-heading font-bold uppercase text-neutral-700 mb-1">
                    Occasion / Dietary Notes
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Birthday celebration, anniversary, peanut allergy..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full bg-[#FCFAF7] border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF5B3E] focus:ring-1 focus:ring-[#FF5B3E] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-[#b89428] text-white font-heading font-bold text-sm tracking-wider uppercase py-4 rounded-xl shadow-lg transition-all hover:scale-[1.01] active:scale-95 cursor-pointer mt-2"
                >
                  Confirm Reservation Table
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
