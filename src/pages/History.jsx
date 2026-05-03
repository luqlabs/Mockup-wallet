import React from 'react';
import { MOCK_HISTORY } from '../data/mockData';
import { ArrowDownLeft, ArrowUpRight, ArrowDownUp } from 'lucide-react';

export default function History() {
  const getIcon = (type) => {
    if (type === 'Receive') return <ArrowDownLeft size={22} className="text-green-400" />;
    if (type === 'Send') return <ArrowUpRight size={22} className="text-red-400" />;
    return <ArrowDownUp size={22} className="text-primary" />;
  };

  return (
    <div className="p-5 pb-24">
      <h1 className="text-2xl font-bold text-white tracking-wide mb-6 pt-2">Activity</h1>
      
      <div className="space-y-3">
        {MOCK_HISTORY.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-surface p-4 rounded-2xl hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-700 cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                {getIcon(item.type)}
              </div>
              <div>
                <h3 className="font-bold text-white text-[15px] mb-0.5">{item.type}</h3>
                <p className="text-xs text-gray-400 font-medium">{item.date}</p>
              </div>
            </div>
            <div className="text-right">
              <h3 className={`font-bold text-[15px] mb-0.5 ${item.amount.startsWith('+') ? 'text-green-400' : 'text-white'}`}>
                {item.amount}
              </h3>
              <p className="text-xs text-gray-400 font-medium">{item.subAmount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
