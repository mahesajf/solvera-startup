import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'orange' | 'white' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  text = 'Solvera Technology Labs',
  size = 'md',
  variant = 'orange',
}) => {
  const colorMap = {
    orange: '#FF4D00',
    white: '#FFFFFF',
    dark: '#141210',
  };

  const primaryColor = colorMap[variant];

  const sizeMap = {
    sm: { height: 26, textClass: 'text-sm sm:text-base' },
    md: { height: 34, textClass: 'text-base sm:text-lg' },
    lg: { height: 44, textClass: 'text-xl sm:text-2xl' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* 
        STL Emblem matching user's uploaded logo exactly:
        - Bold "STL" lettering
        - 8-lobed rounded asterisk / starburst nestled in the crook of the "L"
      */}
      <svg
        viewBox="0 0 340 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: `${currentSize.height}px`, width: 'auto' }}
        className="shrink-0 transition-transform duration-200"
        aria-label="STL Solvera Technology Labs Logo"
      >
        {/* Letter S */}
        <path
          d="M75 35 C52 35 34 45 30 65 C26 85 45 96 68 103 C96 112 108 122 105 137 C101 154 82 162 60 162 C38 162 18 152 14 135 L38 128 C41 138 50 143 61 143 C73 143 83 138 85 129 C87 118 76 111 55 104 C30 96 11 83 14 62 C18 36 43 18 75 18 C96 18 112 25 118 39 L96 48 C92 40 85 35 75 35 Z"
          fill={primaryColor}
        />

        {/* Letter T */}
        <path
          d="M118 20 H204 V42 H172 V160 H148 V42 H118 Z"
          fill={primaryColor}
        />

        {/* Letter L */}
        <path
          d="M205 20 H229 V138 H290 V160 H205 Z"
          fill={primaryColor}
        />

        {/* 
          8-Lobed Asterisk nestled in the crook of the 'L' (above horizontal bar, right of vertical bar)
          Center at approx (256, 82)
        */}
        <g transform="translate(258, 80)">
          {/* 8 rounded petals at 0, 45, 90, 135 degrees */}
          {[0, 45, 90, 135].map((angle) => (
            <rect
              key={angle}
              x="-4"
              y="-28"
              width="8"
              height="56"
              rx="4"
              fill={primaryColor}
              transform={`rotate(${angle})`}
            />
          ))}
          {/* Central hub */}
          <circle cx="0" cy="0" r="7" fill={primaryColor} />
        </g>
      </svg>

      {showText && (
        <span
          className={`font-display font-bold tracking-tight leading-tight whitespace-nowrap ${
            variant === 'white' ? 'text-white' : 'text-[#141210]'
          } ${currentSize.textClass}`}
        >
          {text}
        </span>
      )}
    </div>
  );
};
