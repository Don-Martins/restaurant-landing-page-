import React from 'react';
import { SERVICES } from '../data/restaurantData';
import { Restaurant01Icon, ShoppingBag01Icon, DeliveryTruck01Icon, Coffee01Icon, FavouriteIcon, Briefcase01Icon, ArrowRight01Icon } from 'hugeicons-react';

interface ServicesSectionProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenReservation,
  onExploreMenu,
}) => {
  const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
    Utensils: Restaurant01Icon,
    ShoppingBag: ShoppingBag01Icon,
    Truck: DeliveryTruck01Icon,
    GlassWater: Coffee01Icon,
    Gift: FavouriteIcon,
    Briefcase: Briefcase01Icon,
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F4F1E8] border-b border-[#CDD2C9] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-heading text-xs font-bold text-[#B8A678] tracking-[0.25em] uppercase block">
            TAILORED HOSPITALITY
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-normal text-[#2D3A1F] tracking-tight">
            Our Premium Services
          </h2>
          <p className="font-sans text-[#2D3A1F]/80 text-base md:text-lg font-light">
            Whether dining in our romantic hall, enjoying takeaway at home, or hosting an exclusive corporate gala, we deliver five-star excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => {
            const IconComp = iconMap[srv.icon] || Restaurant01Icon;

            return (
              <div
                key={srv.id}
                className="bg-[#E8E2D0] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#CDD2C9] hover:border-[#B8A678] group flex flex-col justify-between transform hover:-translate-y-1"
              >
                <div>
                  {/* Service Image Header */}
                  <div className="relative h-48 overflow-hidden bg-[#2D3A1F]">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/80 via-[#2D3A1F]/20 to-transparent"></div>

                    {/* Icon Floating Badge */}
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-2xl bg-[#F4F1E8]/95 backdrop-blur-md text-[#B8A678] flex items-center justify-center shadow-xl group-hover:bg-[#2D3A1F] group-hover:text-[#F4F1E8] transition-all duration-300 border border-[#CDD2C9]">
                      <IconComp size={32} />
                    </div>

                    {/* Highlight Badge */}
                    <span className="absolute bottom-3 right-3 text-[11px] font-heading font-bold uppercase tracking-wider bg-[#2D3A1F]/90 backdrop-blur-xs text-[#F4F1E8] px-3 py-1 rounded-full border border-[#B8A678]/30">
                      {srv.highlight}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="p-6 space-y-2">
                    <h3 className="font-heading text-xl font-bold text-[#2D3A1F] group-hover:text-[#B8A678] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="font-sans text-[#2D3A1F]/75 text-sm leading-relaxed font-light">
                      {srv.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-6 pt-0 mt-2">
                  <div className="pt-4 border-t border-[#CDD2C9]/60 flex items-center justify-between">
                    <button
                      onClick={srv.title.includes('Dine') || srv.title.includes('Private') || srv.title.includes('Birthday') ? onOpenReservation : onExploreMenu}
                      className="font-heading text-xs font-bold uppercase text-[#2D3A1F] group-hover:text-[#B8A678] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Inquire & Reserve</span>
                      <ArrowRight01Icon size={16} className="group-hover:translate-x-1 transition-transform" />
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

