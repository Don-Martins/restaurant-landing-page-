import React from 'react';
import { Restaurant01Icon, ShoppingBag01Icon, DeliveryTruck01Icon, Briefcase01Icon, FavouriteIcon, Coffee01Icon } from 'hugeicons-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenReservation,
  onExploreMenu,
}) => {
  const servicesList = [
    {
      id: 'srv-dinein',
      title: 'Dine In Experience',
      description: 'Enjoy freshly prepared gourmet meals in a comfortable, romantic, and welcoming atmosphere with attentive service.',
      icon: Restaurant01Icon,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'srv-takeaway',
      title: 'Takeaway Service',
      description: 'Order your favourites online and pick them up quickly, carefully packaged to retain maximum temperature and flavor.',
      icon: ShoppingBag01Icon,
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'srv-catering',
      title: 'Event Catering',
      description: 'Artisanal culinary menus prepared with master precision for private celebrations, weddings, and corporate receptions.',
      icon: Briefcase01Icon,
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'srv-delivery',
      title: 'Doorstep Delivery',
      description: 'Get your favourite signature dishes delivered hot and fresh directly to your residence within our express delivery zone.',
      icon: DeliveryTruck01Icon,
      image: 'https://images.unsplash.com/photo-1585759071429-1646f76ab8c7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'srv-private',
      title: 'Private Suites',
      description: 'Exclusive private dining rooms tailored for intimate gatherings, birthday galas, and confidential business dinners.',
      icon: FavouriteIcon,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'srv-chefstable',
      title: 'Chef’s Tasting Table',
      description: 'An interactive multi-course dining journey guided by our head chef with curated vintage wine pairings.',
      icon: Coffee01Icon,
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F4F1E8] border-b border-[#CDD2C9] select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header matching Reference Image structure */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16 md:mb-20"
        >
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-[#2D3A1F] tracking-tight">
            Our Services
          </h2>
          <p className="font-sans text-[#2D3A1F]/75 text-base md:text-lg font-light leading-relaxed">
            From casual dine-in moments to rapid delivery and private catering, we bring five-star culinary art to every table.
          </p>
        </motion.div>

        {/* 3-Column Services Grid matching Reference Image visual style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {servicesList.map((srv, index) => {
            const IconComp = srv.icon;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-3xl border border-[#CDD2C9] hover:border-[#B8A678] shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Top Image Container */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-[#2D3A1F]">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out opacity-95 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                  {/* Clean Icon Badge Inside the Card Top-Left */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md border border-[#CDD2C9] shadow-md flex items-center justify-center text-[#2D3A1F] group-hover:bg-[#2D3A1F] group-hover:text-[#B8A678] group-hover:border-[#B8A678] transition-all duration-300">
                    <IconComp size={22} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 text-left space-y-2 flex-1 flex flex-col justify-start">
                  <h3 className="font-heading text-xl font-bold text-[#2D3A1F] group-hover:text-[#B8A678] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="font-sans text-[#2D3A1F]/75 text-sm leading-relaxed font-light">
                    {srv.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

