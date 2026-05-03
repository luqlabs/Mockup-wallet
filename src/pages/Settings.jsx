import React from 'react';
import { Shield, Globe, Bell, Fingerprint, HelpCircle, ChevronRight } from 'lucide-react';

export default function Settings() {
  const menuItems = [
    { icon: Shield, label: 'Security & Privacy', color: 'text-green-400' },
    { icon: Globe, label: 'Network', color: 'text-blue-400', value: 'Solana Mainnet' },
    { icon: Bell, label: 'Notifications', color: 'text-yellow-400' },
    { icon: Fingerprint, label: 'Biometrics', color: 'text-purple-400', value: 'Enabled' },
    { icon: HelpCircle, label: 'Help & Support', color: 'text-gray-400' },
  ];

  return (
    <div className="p-5 pb-24">
      <h1 className="text-2xl font-bold text-white tracking-wide mb-6 pt-2">Settings</h1>
      
      <div className="bg-surface p-4 rounded-3xl flex items-center space-x-4 mb-8 shadow-sm border border-gray-700/30">
        <div className="w-18 h-18 rounded-full bg-linear-to-tr from-primary to-purple-500 shadow-md" />
        <div>
          <h2 className="text-lg font-bold text-white">Main Wallet</h2>
          <p className="text-sm text-gray-400 font-medium mt-0.5">0x71C...89A1</p>
        </div>
      </div>

      <div className="space-y-3">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button key={idx} className="w-full flex justify-between items-center bg-surface p-4 rounded-2xl hover:bg-gray-800 transition-colors active:scale-[0.98] group border border-transparent hover:border-gray-700">
              <div className="flex items-center space-x-4">
                <div className={`w-11 h-11 rounded-full bg-gray-900 flex items-center justify-center ${item.color}`}>
                  <Icon size={20} />
                </div>
                <span className="font-bold text-white text-[15px]">{item.label}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 group-hover:text-white transition-colors">
                {item.value && <span className="text-sm font-medium">{item.value}</span>}
                <ChevronRight size={18} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
