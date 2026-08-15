import React from 'react';
import { motion } from 'motion/react';
import { Restaurant01Icon, Calendar01Icon, FavouriteIcon, CheckmarkCircle01Icon, ArrowDown01Icon } from 'hugeicons-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Meal',
      description: 'Browse our menu and select what you’re craving.',
      icon: Restaurant01Icon,
      bullets: [
        'Artisanal seasonal ingredients & daily chef specials',
        'Detailed dietary labels (Vegan, Gluten-Free, Halal)',
        'High-resolution dish preview & ingredient notes',
      ],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '02',
      title: 'Place Your Order',
      description: 'Order online, reserve a table, or contact us directly.',
      icon: Calendar01Icon,
      bullets: [
        'Instant table confirmation in under 30 seconds',
        'Flexible express takeaway or room delivery',
        'Custom seating preferences & milestone occasion notes',
      ],
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '03',
      title: 'Enjoy Your Meal',
      description: 'We prepare everything fresh and serve it with care.',
      icon: FavouriteIcon,
      bullets: [
        'Fresh to order preparation by Michelin-trained chefs',
        'Sommelier wine pairing & personalized hospitality',
        'Candlelit atmosphere for memorable gatherings',
      ],
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#E8E2D0] border-b border-[#CDD2C9] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-16 md:mb-24"
        >
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-[#2D3A1F] tracking-tight">
            How It Works
          </h2>
          <p className="font-sans text-[#2D3A1F]/75 text-base md:text-lg font-light leading-relaxed">
            From menu browsing to culinary delight in three simple steps.
          </p>
        </motion.div>

        {/* Alternating 3-Step Vertical Flow matching Reference Image 2 */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((item, index) => {
            const IconComp = item.icon;
            const isEven = index % 2 === 1;

            return (
              <div key={item.step} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text Column (Left for odd index, Right for even index) */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-3">
                      {/* Big Display Number + Icon Badge */}
                      <div className="flex items-center gap-4">
                        <span className="font-heading text-4xl md:text-5xl font-bold text-[#B8A678]/80 tracking-tighter">
                          {item.step}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white border border-[#CDD2C9] flex items-center justify-center text-[#2D3A1F] shadow-xs">
                          <IconComp size={20} />
                        </div>
                      </div>

                      <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#2D3A1F] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[#2D3A1F]/80 text-base leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    {/* Bullet List with Checkmarks matching Reference Image 2 */}
                    <ul className="space-y-3 pt-2">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm text-[#2D3A1F]/85 font-medium">
                          <span className="text-[#B8A678] shrink-0 mt-0.5 inline-flex"><CheckmarkCircle01Icon size={18} /></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Column (Right for odd index, Left for even index) */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-3xl overflow-hidden border border-[#CDD2C9] bg-white shadow-lg group">
                      <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      </div>

                      {/* Step Tag Overlay */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#CDD2C9] text-xs font-heading font-bold uppercase tracking-wider text-[#2D3A1F] shadow-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#B8A678]"></span>
                        <span>Step {item.step}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Downward Connector Arrow between steps matching Reference Image 2 */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex justify-center my-8">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#CDD2C9] text-[#B8A678] flex items-center justify-center shadow-xs">
                      <ArrowDown01Icon size={20} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


