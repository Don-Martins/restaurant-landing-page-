import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { Maximize01Icon, Cancel01Icon, Camera01Icon } from 'hugeicons-react';

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
    <section id="gallery" className="py-20 md:py-28 bg-[#E8E2D0] border-b border-[#CDD2C9] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="font-heading text-xs font-bold text-[#B8A678] tracking-[0.25em] uppercase block">
            VISUAL ATMOSPHERE
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-normal text-[#2D3A1F] tracking-tight">
            Our Photo Gallery
          </h2>
          <p className="font-sans text-[#2D3A1F]/80 text-base md:text-lg font-light">
            A glance into our culinary creations, warm romantic atmosphere, and passion in the kitchen.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value as any)}
              className={`font-heading text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all cursor-pointer ${
                filter === tab.value
                  ? 'bg-[#2D3A1F] text-[#F4F1E8] shadow-md'
                  : 'bg-[#F4F1E8] text-[#2D3A1F] hover:bg-[#E8E2D0] border border-[#CDD2C9]'
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
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer h-72 border border-[#CDD2C9] bg-[#2D3A1F]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/80 via-[#2D3A1F]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-[#F4F1E8] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#B8A678]">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#F4F1E8]">
                    {item.title}
                  </h3>
                </div>

                <div className="p-2.5 rounded-full bg-[#F4F1E8]/20 backdrop-blur-md text-[#F4F1E8] group-hover:bg-[#B8A678] group-hover:text-[#2D3A1F] transition-colors">
                  <Maximize01Icon size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-[#2D3A1F]/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#2D3A1F] rounded-2xl overflow-hidden shadow-2xl border border-[#B8A678]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#2D3A1F]/80 text-[#F4F1E8] hover:bg-[#B8A678] hover:text-[#2D3A1F] transition-colors"
            >
              <Cancel01Icon size={20} />
            </button>

            <img
              src={lightboxItem.image}
              alt={lightboxItem.title}
              className="w-full max-h-[80vh] object-contain"
              referrerPolicy="no-referrer"
            />

            <div className="p-6 bg-[#2D3A1F] text-[#F4F1E8] flex items-center justify-between border-t border-[#B8A678]/30">
              <div>
                <span className="text-xs font-heading font-bold text-[#B8A678] uppercase tracking-widest">
                  {lightboxItem.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#F4F1E8]">
                  {lightboxItem.title}
                </h3>
              </div>
              <Camera01Icon size={24} className="text-[#B8A678]" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

