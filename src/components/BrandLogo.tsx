import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`relative flex items-center justify-center ${sizeClasses[size]} ${className} group cursor-pointer`}>
      {/* Glow pulse background effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37] via-[#FFD84D] to-[#FF5B3E] rounded-full blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

      {/* Outer Metallic Gold Ring */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-[#111111] via-[#1a1a1a] to-[#2a2a2a] p-1 shadow-xl border border-[#D4AF37]/50 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
        {/* Inner Gold Circular Frame */}
        <div className="w-full h-full rounded-full border border-[#D4AF37] border-dashed flex items-center justify-center bg-[#111111] p-1.5 relative overflow-hidden">
          
          {/* Subtle Background Radial Shimmer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.25)_0%,_transparent_70%)]"></div>

          {/* Crown & Cloche Crest Emblem Graphic */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-[#D4AF37] drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)] group-hover:rotate-6 transition-transform duration-500"
          >
            {/* Crown Top */}
            <path
              d="M30 35 L40 45 L50 25 L60 45 L70 35 L68 50 L32 50 Z"
              fill="url(#goldGradient)"
            />
            {/* Crown Jewels Dots */}
            <circle cx="30" cy="32" r="3" fill="#FFD84D" />
            <circle cx="50" cy="22" r="3.5" fill="#FF5B3E" />
            <circle cx="70" cy="32" r="3" fill="#FFD84D" />

            {/* Cloche Cover Dome */}
            <path
              d="M25 68 C25 54 36 53 50 53 C64 53 75 54 75 68 H25 Z"
              fill="url(#goldGradient)"
            />
            <circle cx="50" cy="50" r="3" fill="#FFD84D" />

            {/* Platter Plate Base */}
            <rect x="20" y="70" width="60" height="5" rx="2.5" fill="#FFD84D" />
            <rect x="30" y="77" width="40" height="3" rx="1.5" fill="url(#goldGradient)" />

            {/* Side Stars */}
            <path d="M18 45 L20 40 L22 45 L18 45 Z" fill="#D4AF37" />
            <path d="M82 45 L80 40 L78 45 L82 45 Z" fill="#D4AF37" />

            {/* Gradients */}
            <defs>
              <linearGradient id="goldGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFE082" />
                <stop offset="0.5" stopColor="#D4AF37" />
                <stop offset="1" stopColor="#997A15" />
              </linearGradient>
            </defs>
          </svg>

        </div>
      </div>
    </div>
  );
};
