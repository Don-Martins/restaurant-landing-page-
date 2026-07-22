import React from 'react';
import { Sprout, Award, Heart, Truck } from 'lucide-react';

export const TrustFeatures: React.FC = () => {
  const features = [
    {
      icon: Sprout,
      title: 'Fresh Ingredients',
      subtitle: 'Farm to table daily'
    },
    {
      icon: Award,
      title: 'Expert Chefs',
      subtitle: 'Passionate & experienced'
    },
    {
      icon: Heart,
      title: 'Cozy Ambience',
      subtitle: 'Perfect for everyone'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      subtitle: 'On time, every time'
    }
  ];

  return (
    <section className="py-12 bg-[#FCFAF7] border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* On Mobile: Stacked Overlapping Cards Layout; On Desktop: 4-Column Grid */}
        <div className="flex flex-col sm:grid sm:grid-cols-4 gap-0 sm:gap-6 md:gap-8 relative">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                style={{ zIndex: idx + 10 }}
                className={`bg-white rounded-2xl p-4 sm:p-5 border border-neutral-200/80 shadow-md sm:shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-4 group ${
                  idx > 0 ? '-mt-4 sm:mt-0' : ''
                } relative`}
              >
                <div className="p-3.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#FF5B3E] group-hover:text-white transition-all duration-300 shadow-xs shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm md:text-base text-[#111111] group-hover:text-[#FF5B3E] transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-neutral-500 font-medium">
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
