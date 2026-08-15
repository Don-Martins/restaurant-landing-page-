import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'nav';
  variant?: 'light' | 'dark' | 'gold';
  background?: 'transparent' | 'black' | 'white' | 'badge';
  badge?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
  background = 'transparent',
  badge = false,
}) => {
  const sizeMap = {
    sm: { logo: 'w-9 h-9 sm:w-10 sm:h-10 aspect-square' },
    md: { logo: 'w-12 h-12 sm:w-14 sm:h-14 aspect-square' },
    nav: { logo: 'w-11 h-11 sm:w-12 sm:h-12 aspect-square' },
    lg: { logo: 'w-20 h-20 sm:w-24 sm:h-24 aspect-square' },
    xl: { logo: 'w-32 h-32 sm:w-40 sm:h-40 aspect-square' },
  };

  const colorMap = {
    dark: {
      color: '#131B0E',
      text: '#131B0E',
      accentRing: '#B8A678',
    },
    light: {
      color: '#F4F1E8',
      text: '#F4F1E8',
      accentRing: '#B8A678',
    },
    gold: {
      color: '#B8A678',
      text: '#B8A678',
      accentRing: '#131B0E',
    },
  };

  const bgClasses = {
    transparent: 'bg-transparent',
    black: 'bg-black p-2 rounded-full shadow-inner',
    white: 'bg-white p-2 rounded-full shadow-md',
    badge: 'bg-[#F4F1E8] p-1 rounded-full border border-[#B8A678]/50 shadow-sm',
  };

  const currentColors = colorMap[variant] || colorMap.dark;
  const currentSize = sizeMap[size] || sizeMap.md;
  const activeBgClass = badge ? bgClasses.badge : bgClasses[background];

  // Unique IDs for SVG textPaths so multiple logo instances on same page work cleanly
  const idSuffix = React.useId().replace(/:/g, '');
  const topOuterArcId = `topOuterArc_${idSuffix}`;
  const bottomOuterArcId = `bottomOuterArc_${idSuffix}`;
  const topInnerArcId = `topInnerArc_${idSuffix}`;

  return (
    <div className={`inline-flex items-center ${className} select-none`}>
      <div className={`relative flex items-center justify-center ${activeBgClass}`}>
        <svg
          viewBox="0 0 500 500"
          className={`${currentSize.logo}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Path for 'THE CUISINE' (Top arc) */}
            <path
              id={topOuterArcId}
              d="M 60,250 A 190,190 0 0,1 440,250"
            />
            {/* Path for 'RESTAURANT' (Bottom arc - left to right along bottom) */}
            <path
              id={bottomOuterArcId}
              d="M 50,250 A 200,200 0 0,0 450,250"
            />
            {/* Path for 'PREMIUM QUALITY FOOD' (Inner top arc) */}
            <path
              id={topInnerArcId}
              d="M 110,250 A 140,140 0 0,1 390,250"
            />
          </defs>

          {/* 1. Outer Ring 1 (Thick border) */}
          <circle
            cx="250"
            cy="250"
            r="236"
            stroke={currentColors.color}
            strokeWidth="8"
          />

          {/* 2. Outer Ring 2 (Thin accent border) */}
          <circle
            cx="250"
            cy="250"
            r="226"
            stroke={currentColors.color}
            strokeWidth="3.5"
          />

          {/* 3. Middle Ring (Separates outer band from inner seal) */}
          <circle
            cx="250"
            cy="250"
            r="162"
            stroke={currentColors.color}
            strokeWidth="4"
          />

          {/* 4. CURVED TEXT: THE CUISINE */}
          <text fill={currentColors.text} fontSize="47" fontWeight="900" letterSpacing="6" fontFamily="serif, 'Playfair Display', 'Cinzel'">
            <textPath href={`#${topOuterArcId}`} startOffset="50%" textAnchor="middle">
              THE CUISINE
            </textPath>
          </text>

          {/* 5. CURVED TEXT: RESTAURANT */}
          <text fill={currentColors.text} fontSize="45" fontWeight="900" letterSpacing="7" fontFamily="serif, 'Playfair Display', 'Cinzel'">
            <textPath href={`#${bottomOuterArcId}`} startOffset="50%" textAnchor="middle">
              RESTAURANT
            </textPath>
          </text>

          {/* 6. CURVED TEXT: PREMIUM QUALITY FOOD */}
          <text fill={currentColors.text} fontSize="21" fontWeight="700" letterSpacing="3" fontFamily="sans-serif, 'Plus Jakarta Sans'">
            <textPath href={`#${topInnerArcId}`} startOffset="50%" textAnchor="middle">
              PREMIUM QUALITY FOOD
            </textPath>
          </text>

          {/* 7. CENTER UTENSILS: FORK & SPOON */}
          {/* Fork (Top-Left to Bottom-Right) */}
          <g transform="translate(250, 240) rotate(-40) translate(-250, -240)">
            <path
              d="M236,155 L236,195 C236,208 244,215 248,215 L248,315 C248,318 249,320 250,320 C251,320 252,318 252,315 L252,215 C256,215 264,208 264,195 L264,155"
              fill="none"
              stroke={currentColors.color}
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="243" y1="155" x2="243" y2="190" stroke={currentColors.color} strokeWidth="4.5" strokeLinecap="round" />
            <line x1="250" y1="155" x2="250" y2="190" stroke={currentColors.color} strokeWidth="4.5" strokeLinecap="round" />
            <line x1="257" y1="155" x2="257" y2="190" stroke={currentColors.color} strokeWidth="4.5" strokeLinecap="round" />
          </g>

          {/* Spoon (Top-Right to Bottom-Left) */}
          <g transform="translate(250, 240) rotate(40) translate(-250, -240)">
            <path
              d="M250,155 C234,155 232,180 232,196 C232,208 242,215 247,215 L247,315 C247,318 249,320 250,320 C251,320 253,318 253,315 L253,215 C258,215 268,208 268,196 C268,180 266,155 250,155 Z"
              fill="none"
              stroke={currentColors.color}
              strokeWidth="5.5"
              strokeLinejoin="round"
            />
          </g>

          {/* 8. SINCE 1995 TEXT AT BOTTOM */}
          <text
            x="250"
            y="335"
            textAnchor="middle"
            fill={currentColors.text}
            fontSize="19"
            fontWeight="700"
            letterSpacing="2"
            fontFamily="serif, 'Playfair Display'"
          >
            Since 1995
          </text>
        </svg>
      </div>
    </div>
  );
};
