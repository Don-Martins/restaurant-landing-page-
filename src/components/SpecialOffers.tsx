import React, { useState } from 'react';
import { SPECIAL_OFFERS } from '../data/restaurantData';
import { MenuItem } from '../types';
import { Clock01Icon, ShoppingBag01Icon, Tick01Icon } from 'hugeicons-react';
import { motion } from 'motion/react';

interface SpecialOffersProps {
  onAddToCart: (dish: MenuItem) => void;
}

export const SpecialOffers: React.FC<SpecialOffersProps> = ({ onAddToCart }) => {
  const [addedOfferId, setAddedOfferId] = useState<string | null>(null);

  // Prices mapped to the offers for cart purchasing
  const offerPrices: Record<string, number> = {
    'offer-1': 34.99,
    'offer-2': 59.99,
    'offer-3': 49.99,
  };

  const handleAddOfferToCart = (offer: typeof SPECIAL_OFFERS[0]) => {
    const price = offerPrices[offer.id] || 39.99;
    const offerAsDish: MenuItem = {
      id: offer.id,
      name: offer.title + ' (' + offer.subtitle + ')',
      category: 'main',
      description: offer.description,
      price: price,
      rating: 5.0,
      reviewsCount: 120,
      image: offer.image,
      badge: 'Chef\'s Choice',
      dietary: [],
    };

    onAddToCart(offerAsDish);
    setAddedOfferId(offer.id);
    setTimeout(() => {
      setAddedOfferId(null);
    }, 1500);
  };

  return (
    <section id="special-offers" className="py-20 md:py-28 bg-[#F4F1E8] border-b border-[#CDD2C9] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-normal text-[#2D3A1F] tracking-tight">
            Exclusive Dining Offers
          </h2>
          <p className="font-sans text-[#2D3A1F]/80 text-base md:text-lg font-light">
            Enjoy premium culinary experiences with exceptional promotional packages for lunches, date nights, and family feasts.
          </p>
        </motion.div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIAL_OFFERS.map((offer, index) => {
            const price = offerPrices[offer.id] || 39.99;
            const isAdded = addedOfferId === offer.id;

            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-[#E8E2D0] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#B8A678] group flex flex-col justify-between transform hover:-translate-y-2"
              >
                <div>
                  {/* Offer Image Header with Discount Tag */}
                  <div className="relative h-52 overflow-hidden bg-[#2D3A1F]">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#2D3A1F]/40"></div>

                    {/* Discount Badge */}
                    <div className="absolute top-4 left-4 bg-[#2D3A1F] text-[#F4F1E8] font-heading font-black text-xs px-3.5 py-1.5 rounded-xl shadow-md uppercase tracking-wider border border-[#B8A678]/40">
                      {offer.discount}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-[#F4F1E8]/90 backdrop-blur-xs text-[#2D3A1F] text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm border border-[#CDD2C9]">
                      <Clock01Icon size={14} className="text-[#B8A678]" /> {offer.validUntil}
                    </div>
                  </div>

                  {/* Offer Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-heading font-bold text-[#B8A678] uppercase tracking-wider block">
                        {offer.subtitle}
                      </span>
                      <span className="font-heading font-extrabold text-lg text-[#2D3A1F]">
                        ${price.toFixed(2)}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-[#2D3A1F] group-hover:text-[#B8A678] transition-colors">
                      {offer.title}
                    </h3>

                    <p className="font-sans text-sm text-[#2D3A1F]/80 leading-relaxed font-light">
                      {offer.description}
                    </p>
                  </div>
                </div>

                {/* Add To Cart Action Button */}
                <div className="p-6 pt-0 border-t border-[#CDD2C9]/60 mt-2">
                  <button
                    onClick={() => handleAddOfferToCart(offer)}
                    className={`w-full font-heading font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                      isAdded
                        ? 'bg-[#2D3A1F] text-[#F4F1E8]'
                        : 'bg-[#2D3A1F] hover:bg-[#B8A678] text-[#F4F1E8] hover:text-[#2D3A1F] active:scale-95'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Tick01Icon size={16} /> Added To Cart!
                      </>
                    ) : (
                      <>
                        <ShoppingBag01Icon size={16} /> Add To Cart (${price.toFixed(2)})
                      </>
                    )}
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


