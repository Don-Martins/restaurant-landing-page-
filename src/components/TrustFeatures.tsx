import React from 'react';
import { Leaf01Icon, Award01Icon, FavouriteIcon, DeliveryTruck01Icon } from 'hugeicons-react';

export const TrustFeatures: React.FC = () => {
  const features = [
    {
      icon: Leaf01Icon,
      title: 'Fresh Ingredients',
      subtitle: 'Farm to table daily'
    },
    {
      icon: Award01Icon,
      title: 'Expert Chefs',
      subtitle: 'Passionate & experienced'
    },
    {
      icon: FavouriteIcon,
      title: 'Cozy Ambience',
      subtitle: 'Perfect for everyone'
    },
    {
      icon: DeliveryTruck01Icon,
      title: 'Fast Delivery',
      subtitle: 'On time, every time'
    }
  ];

  return (
    <section className="py-12 bg-[#E8E2D0] border-b border-[#CDD2C9] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* On Mobile: Stacked Overlapping Cards Layout; On Desktop: 4-Column Grid */}
        <div className="flex flex-col sm:grid sm:grid-cols-4 gap-0 sm:gap-6 md:gap-8 relative">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                style={{ zIndex: idx + 10 }}
                className={`bg-[#F4F1E8] rounded-2xl p-4 sm:p-5 border border-[#CDD2C9] shadow-md sm:shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-4 group ${
                  idx > 0 ? '-mt-4 sm:mt-0' : ''
                } relative`}
              >
                <div className="p-3.5 rounded-2xl bg-[#B8A678]/20 text-[#2D3A1F] group-hover:bg-[#2D3A1F] group-hover:text-[#F4F1E8] transition-all duration-300 shadow-sm shrink-0">
                  <Icon size={28} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm md:text-base text-[#2D3A1F] group-hover:text-[#B8A678] transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-[#2D3A1F]/70 font-medium">
                    {feat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

