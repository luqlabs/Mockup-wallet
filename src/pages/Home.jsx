import React from 'react';
import { Send, Download, CreditCard, Plus } from 'lucide-react';
import { MOCK_TOKENS } from '../data/mockData';
import TokenIcon from '../components/ui/TokenIcon';

export default function Home() {
  const totalBalance = MOCK_TOKENS.reduce((acc, token) => acc + (token.balance * token.price), 0);

  const actions = [
    { icon: Send, label: 'Send' },
    { icon: Download, label: 'Receive' },
    { icon: CreditCard, label: 'Buy' },
    { icon: Plus, label: 'Earn' },
  ];

  return (
    <div className="p-5 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6 pt-2">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-linear-to-tr from-primary to-purple-500 shadow-md shadow-primary/20" />
          <span className="font-semibold text-lg tracking-wide">Main Wallet</span>
        </div>
        <button className="text-gray-400 hover:text-white">...</button>
      </div>

      <div className="flex flex-col items-center justify-center mb-8 mt-2">
        <span className="text-gray-400 text-sm mb-1 font-medium">Total Balance</span>
        <h1 className="text-[2.75rem] leading-none font-bold tracking-tight text-white mb-3">
          ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </h1>
        <span className="text-green-400 bg-green-400/10 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
          +2.4% ($124.50)
        </span>
      </div>

      <div className="flex justify-between mb-8 px-1">
        {actions.map((act, i) => {
          const Icon = act.icon;
          return (
            <button key={i} className="flex flex-col items-center space-y-2 group">
              <div className="w-13 h-13 rounded-2xl bg-gray-800 flex items-center justify-center text-primary group-active:scale-90 transition-transform shadow-sm border border-gray-700/50">
                <Icon size={22} strokeWidth={2.5} />
              </div>
              <span className="text-xs text-gray-300 font-medium">{act.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex-1 bg-surface -mx-5 px-5 pt-6 pb-28 rounded-t-4xl shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
        <h2 className="text-lg font-bold mb-4 text-white">Crypto Assets</h2>
        <div className="space-y-3">
          {MOCK_TOKENS.map((token) => (
            <div key={token.id} className="flex justify-between items-center bg-bgApp/50 p-4 rounded-2xl hover:bg-bgApp transition-colors cursor-pointer border border-transparent hover:border-gray-700">
              <div className="flex items-center space-x-3">
                <TokenIcon symbol={token.symbol} size="md" />
                <div>
                  <h3 className="font-bold text-white text-[15px]">{token.name}</h3>
                  <div className="flex items-center space-x-2 text-xs mt-0.5">
                    <span className="text-gray-400">${token.price.toLocaleString()}</span>
                    <span className={token.change >= 0 ? 'text-green-400 font-medium' : 'text-red-400 font-medium'}>
                      {token.change >= 0 ? '+' : ''}{token.change}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <h3 className="font-bold text-white text-[15px]">{token.balance} {token.symbol}</h3>
                <span className="text-xs text-gray-400 font-medium">
                  ${(token.balance * token.price).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
