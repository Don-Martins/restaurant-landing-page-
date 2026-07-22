import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { Maximize2, X, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'food' | 'restaurant' | 'kitchen' | 'events'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { label: 'All Photos', value: 'all' },
    { label: 'Gourmet Dishes', value: 'food' },
    { label: 'Restaurant Ambiance', value: 'restaurant' },
    { label: 'Open Kitchen', value: 'kitchen' },
    { label: 'Private Events', value: 'events' },
  ];

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FCFAF7] border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="font-heading text-xs font-bold text-[#D4AF37] tracking-[0.25em] uppercase block">
            VISUAL ATMOSPHERE
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Our Photo Gallery
          </h2>
          <p className="font-sans text-neutral-600 text-base md:text-lg">
            A glance into our culinary creations, warm romantic atmosphere, and passion in the kitchen.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value as any)}
              className={`font-heading text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all cursor-pointer ${
                filter === tab.value
                  ? 'bg-[#111111] text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer h-72 border border-neutral-200 bg-black"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#FFD84D]">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-[#FF5B3E] transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-[#FF5B3E] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={lightboxItem.image}
              alt={lightboxItem.title}
              className="w-full max-h-[80vh] object-contain"
              referrerPolicy="no-referrer"
            />

            <div className="p-6 bg-[#111111] text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-heading font-bold text-[#D4AF37] uppercase tracking-widest">
                  {lightboxItem.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  {lightboxItem.title}
                </h3>
              </div>
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
