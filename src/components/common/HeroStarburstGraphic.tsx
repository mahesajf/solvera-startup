import React from 'react';

export const HeroStarburstGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Ambient warm glow blur */}
      <div
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#FF4D00]/15 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* SVG 3D Orange Asterisk / Starburst Motif */}
      <svg
        viewBox="0 0 460 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[420px] h-auto drop-shadow-2xl transition-transform duration-700 hover:rotate-6 hover:scale-105"
        role="img"
        aria-label="Solvera dimensional amber starburst icon"
      >
        <defs>
          {/* Main glass amber body gradient */}
          <linearGradient id="amberBody" x1="50" y1="50" x2="410" y2="410" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFA166" />
            <stop offset="35%" stopColor="#FF5500" />
            <stop offset="75%" stopColor="#D93D00" />
            <stop offset="100%" stopColor="#9E2800" />
          </linearGradient>

          {/* Deep core refraction */}
          <radialGradient id="amberCore" cx="230" cy="230" r="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFA770" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#FF4D00" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#B33300" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#6E1E00" stopOpacity="1" />
          </radialGradient>

          {/* Specular tubular highlight */}
          <linearGradient id="specularHighlight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#FFE0CC" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF4D00" stopOpacity="0" />
          </linearGradient>

          {/* Rim light */}
          <linearGradient id="rimLight" x1="0.8" y1="0.2" x2="0.2" y2="0.8">
            <stop offset="0%" stopColor="#FFF2E6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#992600" stopOpacity="0.1" />
          </linearGradient>

          {/* Ambient ground shadow */}
          <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2A1408" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#3D1D0D" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
          </radialGradient>

          <filter id="glassReflect" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Soft ground shadow ellipse */}
        <ellipse cx="230" cy="415" rx="170" ry="26" fill="url(#groundShadow)" />

        {/* Central dimensional starburst cluster with 8 rounded tubular arms */}
        <g transform="translate(230, 220)">
          {/* Background deeper bevel arms */}
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
            <rect
              key={`bg-arm-${i}`}
              x="-26"
              y="-175"
              width="52"
              height="350"
              rx="26"
              fill="#992B00"
              opacity="0.5"
              transform={`rotate(${angle})`}
            />
          ))}

          {/* Primary 8-arm asterisk with glossy amber fill */}
          {[0, 45, 90, 135].map((angle, i) => (
            <g key={`main-arm-${i}`} transform={`rotate(${angle})`}>
              {/* Outer tube boundary with glass gradient */}
              <rect
                x="-30"
                y="-180"
                width="60"
                height="360"
                rx="30"
                fill="url(#amberBody)"
                stroke="#FF884D"
                strokeWidth="2.5"
                strokeOpacity="0.4"
              />

              {/* Internal depth shading */}
              <rect
                x="-22"
                y="-170"
                width="44"
                height="340"
                rx="22"
                fill="url(#amberCore)"
                opacity="0.85"
              />

              {/* Glossy top specular pill */}
              <rect
                x="-14"
                y="-165"
                width="14"
                height="150"
                rx="7"
                fill="url(#specularHighlight)"
              />

              {/* Sub-specular rim highlight */}
              <rect
                x="6"
                y="-160"
                width="8"
                height="130"
                rx="4"
                fill="#FFF0E6"
                opacity="0.35"
              />
            </g>
          ))}

          {/* Central intersecting spherical core with polished specular glass sheen */}
          <circle cx="0" cy="0" r="54" fill="url(#amberBody)" />
          <circle cx="0" cy="0" r="48" fill="url(#amberCore)" />
          <ellipse cx="-12" cy="-14" rx="22" ry="14" fill="#FFFFFF" opacity="0.65" transform="rotate(-30 -12 -14)" />
          <ellipse cx="14" cy="16" rx="16" ry="9" fill="#FFB085" opacity="0.4" transform="rotate(-30 14 16)" />
        </g>
      </svg>
    </div>
  );
};
