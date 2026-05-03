import React from 'react';

// Fallback warna jika SVG aset belum disiapkan oleh klien
const getFallbackColor = (symbol) => {
  const colors = {
    SOL: 'bg-purple-500',
    USDC: 'bg-blue-500',
    BTC: 'bg-orange-500',
    ETH: 'bg-indigo-500',
    RAY: 'bg-teal-500'
  };
  return colors[symbol] || 'bg-gray-500';
};

export default function TokenIcon({ symbol, size = 'md' }) {
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-base'
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full flex items-center justify-center text-white font-bold ${getFallbackColor(symbol)} shadow-sm shrink-0`}>
      {symbol.substring(0, 1)}
    </div>
  );
}
