import React, { useState } from 'react';
import { SPECIAL_OFFERS } from '../data/restaurantData';
import { MenuItem } from '../types';
import { Clock, ShoppingBag, Check } from 'lucide-react';
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
    <section id="special-offers" className="py-20 md:py-28 bg-[#FFD84D]/15 border-b border-[#FFD84D]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Exclusive Dining Offers
          </h2>
          <p className="font-sans text-neutral-700 text-base md:text-lg">
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
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#FFD84D] group flex flex-col justify-between transform hover:-translate-y-2"
              >
                <div>
                  {/* Offer Image Header with Discount Tag */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Discount Badge */}
                    <div className="absolute top-4 left-4 bg-[#FF5B3E] text-white font-heading font-black text-xs px-3.5 py-1.5 rounded-xl shadow-md uppercase tracking-wider">
                      {offer.discount}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#111111] text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                      <Clock className="w-3 h-3 text-[#FF5B3E]" /> {offer.validUntil}
                    </div>
                  </div>

                  {/* Offer Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-heading font-bold text-[#D4AF37] uppercase tracking-wider block">
                        {offer.subtitle}
                      </span>
                      <span className="font-heading font-extrabold text-lg text-[#FF5B3E]">
                        ${price.toFixed(2)}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#111111] group-hover:text-[#FF5B3E] transition-colors">
                      {offer.title}
                    </h3>

                    <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                      {offer.description}
                    </p>
                  </div>
                </div>

                {/* Add To Cart Action Button */}
                <div className="p-6 pt-0 border-t border-neutral-100 mt-2">
                  <button
                    onClick={() => handleAddOfferToCart(offer)}
                    className={`w-full font-heading font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#111111] hover:bg-[#FF5B3E] text-white active:scale-95'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" /> Added To Cart!
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" /> Add To Cart (${price.toFixed(2)})
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

