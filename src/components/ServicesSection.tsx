import React from 'react';
import { SERVICES } from '../data/restaurantData';
import { Utensils, ShoppingBag, Truck, GlassWater, Gift, Briefcase, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenReservation,
  onExploreMenu,
}) => {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Utensils: Utensils,
    ShoppingBag: ShoppingBag,
    Truck: Truck,
    GlassWater: GlassWater,
    Gift: Gift,
    Briefcase: Briefcase,
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FCFAF7] border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-heading text-xs font-bold text-[#D4AF37] tracking-[0.25em] uppercase block">
            TAILORED HOSPITALITY
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Our Premium Services
          </h2>
          <p className="font-sans text-neutral-600 text-base md:text-lg">
            Whether dining in our romantic hall, enjoying takeaway at home, or hosting an exclusive corporate gala, we deliver five-star excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => {
            const IconComp = iconMap[srv.icon] || Utensils;

            return (
              <div
                key={srv.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200/80 hover:border-[#D4AF37] group flex flex-col justify-between transform hover:-translate-y-1"
              >
                <div>
                  {/* Service Image Header */}
                  <div className="relative h-48 overflow-hidden bg-neutral-900">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Icon Floating Badge */}
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-md text-[#D4AF37] flex items-center justify-center shadow-md group-hover:bg-[#FF5B3E] group-hover:text-white transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>

                    {/* Highlight Badge */}
                    <span className="absolute bottom-3 right-3 text-[11px] font-heading font-bold uppercase tracking-wider bg-[#111111]/80 backdrop-blur-xs text-white px-3 py-1 rounded-full border border-white/20">
                      {srv.highlight}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="p-6 space-y-2">
                    <h3 className="font-heading text-xl font-bold text-[#111111] group-hover:text-[#D4AF37] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="font-sans text-neutral-600 text-sm leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-6 pt-0 mt-2">
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <button
                      onClick={srv.title.includes('Dine') || srv.title.includes('Private') || srv.title.includes('Birthday') ? onOpenReservation : onExploreMenu}
                      className="font-heading text-xs font-bold uppercase text-[#111111] group-hover:text-[#FF5B3E] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Inquire & Reserve</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
