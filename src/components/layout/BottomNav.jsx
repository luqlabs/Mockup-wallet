import React from 'react';
import { Home, ArrowLeftRight, Clock, Settings } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Wallet' },
    { id: 'swap', icon: ArrowLeftRight, label: 'Swap' },
    { id: 'history', icon: Clock, label: 'History' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#1e293b] border-t border-gray-700 shadow-[0_-15px_30px_rgba(0,0,0,0.5)] pb-safe z-50">
      <div className="flex justify-around items-center h-18 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
