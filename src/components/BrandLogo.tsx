import React from 'react';
import { Restaurant01Icon } from 'hugeicons-react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
  const badgeSizes = {
    sm: 'w-9 h-9 rounded-full',
    md: 'w-11 h-11 rounded-full',
    lg: 'w-14 h-14 rounded-full',
  };

  const iconSizes = {
    sm: 18,
    md: 22,
    lg: 28,
  };

  return (
    <div className={`flex items-center justify-center ${className} group cursor-pointer select-none`}>
      {/* Matte Solid Emblem Badge - Clean emblem without brand text */}
      <div className={`relative flex items-center justify-center bg-[#2D3A1F] text-[#F4F1E8] border border-[#B8A678]/40 ${badgeSizes[size]} shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-[#B8A678]`}>
        <Restaurant01Icon size={iconSizes[size]} className="text-[#B8A678]" />
      </div>
    </div>
  );
};


