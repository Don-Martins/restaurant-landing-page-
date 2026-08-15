import React, { useState } from 'react';
import { Clock01Icon, TelephoneIcon, Location01Icon, Tick01Icon } from 'hugeicons-react';
import { ReservationData } from '../types';
import { motion } from 'motion/react';

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
    <section id="reservation" className="py-20 md:py-28 bg-[#2D3A1F] text-[#F4F1E8] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Info & Hours */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-[#F4F1E8]">
              Reserve Your Table <br />
              <span className="font-heading font-semibold text-[#B8A678]">Tonight.</span>
            </h2>

            <p className="font-sans text-[#F4F1E8]/80 text-base leading-relaxed font-light">
              Join us for an unforgettable culinary journey. Booking online takes under 30 seconds and guarantees your candlelit table with zero wait time upon arrival.
            </p>

            <div className="space-y-6 pt-4 border-t border-[#B8A678]/30">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E8E2D0]/10 rounded-2xl text-[#B8A678] border border-[#B8A678]/20">
                  <Clock01Icon size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-[#F4F1E8] uppercase tracking-wider">Opening Hours</h4>
                  <p className="text-sm text-[#F4F1E8]/70 mt-0.5">Monday - Sunday: 11:30 AM - 11:00 PM</p>
                  <p className="text-xs text-[#B8A678] mt-0.5 font-medium">Chef's Tasting served 6:00 PM - 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E8E2D0]/10 rounded-2xl text-[#B8A678] border border-[#B8A678]/20">
                  <TelephoneIcon size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-[#F4F1E8] uppercase tracking-wider">Direct Reservation Desk</h4>
                  <p className="text-sm text-[#F4F1E8]/70 mt-0.5">+1 234 567 8900</p>
                  <p className="text-xs text-[#F4F1E8]/50">Call for parties of 12 or more</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E8E2D0]/10 rounded-2xl text-[#B8A678] border border-[#B8A678]/20">
                  <Location01Icon size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-[#F4F1E8] uppercase tracking-wider">Location & Parking</h4>
                  <p className="text-sm text-[#F4F1E8]/70 mt-0.5">542 Fine Dining Avenue, New York, NY</p>
                  <p className="text-xs text-[#B8A678] mt-0.5">★ Free Guest Valet Parking Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Reservation Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-[#F4F1E8] text-[#2D3A1F] rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#CDD2C9]"
          >
            {submitted ? (
              <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
                <div className="w-20 h-20 bg-[#2D3A1F] text-[#B8A678] rounded-full flex items-center justify-center mx-auto shadow-inner border border-[#B8A678]/30">
                  <Tick01Icon size={40} />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-heading font-bold text-[#B8A678] uppercase tracking-widest block">RESERVATION CONFIRMED</span>
                  <h3 className="font-heading text-3xl font-bold text-[#2D3A1F]">We Look Forward To Welcoming You!</h3>
                  <p className="text-sm text-[#2D3A1F]/80 max-w-md mx-auto font-light">
                    A confirmation email and SMS reminder have been dispatched to <span className="font-bold text-[#2D3A1F]">{submitted.email}</span>.
                  </p>
                </div>

                {/* Ticket Box */}
                <div className="bg-[#E8E2D0] border border-dashed border-[#CDD2C9] rounded-2xl p-6 max-w-md mx-auto text-left space-y-3 font-sans text-sm">
                  <div className="flex justify-between items-center border-b border-[#CDD2C9] pb-3">
                    <span className="text-[#2D3A1F]/60 text-xs uppercase font-heading font-bold">Booking Reference</span>
                    <span className="font-mono font-bold text-[#2D3A1F] text-base">{submitted.id}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[#2D3A1F]/60 block">Guest Name:</span>
                      <span className="font-bold text-[#2D3A1F]">{submitted.name}</span>
                    </div>
                    <div>
                      <span className="text-[#2D3A1F]/60 block">Party Size:</span>
                      <span className="font-bold text-[#2D3A1F]">{submitted.guests} Guests</span>
                    </div>
                    <div>
                      <span className="text-[#2D3A1F]/60 block">Date & Time:</span>
                      <span className="font-bold text-[#2D3A1F]">{submitted.date} at {submitted.time}</span>
                    </div>
                    <div>
                      <span className="text-[#2D3A1F]/60 block">Seating Area:</span>
                      <span className="font-bold text-[#2D3A1F]">{submitted.seatingArea}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSubmitted(null)}
                  className="bg-[#2D3A1F] hover:bg-[#B8A678] text-[#F4F1E8] hover:text-[#2D3A1F] font-heading text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-2xl transition-colors cursor-pointer"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-heading text-2xl font-semibold text-[#2D3A1F]">Book Your Table</h3>
                  <p className="text-xs text-[#2D3A1F]/60 font-light">Select your preferred date, seating, and party details.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-[#2D3A1F] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#B8A678] focus:ring-1 focus:ring-[#B8A678] transition-all text-[#2D3A1F]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-[#2D3A1F] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#B8A678] focus:ring-1 focus:ring-[#B8A678] transition-all text-[#2D3A1F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-[#2D3A1F] mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#B8A678] focus:ring-1 focus:ring-[#B8A678] transition-all text-[#2D3A1F]"
                    />
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-[#2D3A1F] mb-1">
                      Time Slot *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#B8A678] focus:ring-1 focus:ring-[#B8A678] transition-all text-[#2D3A1F]"
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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-[#2D3A1F] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#B8A678] focus:ring-1 focus:ring-[#B8A678] transition-all text-[#2D3A1F]"
                    />
                  </div>

                  {/* Party Size */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-[#2D3A1F] mb-1">
                      Guests (Party Size) *
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                      className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#B8A678] focus:ring-1 focus:ring-[#B8A678] transition-all text-[#2D3A1F]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>

                  {/* Seating Preference */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-[#2D3A1F] mb-1">
                      Seating Preference
                    </label>
                    <select
                      value={formData.seatingArea}
                      onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value as any })}
                      className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#B8A678] focus:ring-1 focus:ring-[#B8A678] transition-all text-[#2D3A1F]"
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
                  <label className="block text-xs font-heading font-bold uppercase text-[#2D3A1F] mb-1">
                    Occasion / Dietary Notes
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Birthday celebration, anniversary, peanut allergy..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full bg-[#E8E2D0] border border-[#CDD2C9] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#B8A678] focus:ring-1 focus:ring-[#B8A678] transition-all text-[#2D3A1F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2D3A1F] hover:bg-[#B8A678] text-[#F4F1E8] hover:text-[#2D3A1F] font-heading font-bold text-sm tracking-wider uppercase py-4 rounded-2xl shadow-lg transition-all hover:scale-[1.01] active:scale-95 cursor-pointer mt-2"
                >
                  Confirm Reservation Table
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
