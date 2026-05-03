import React, { useState } from 'react';
import { ArrowDownUp, Settings2, Info } from 'lucide-react';
import { MOCK_TOKENS } from '../data/mockData';
import TokenIcon from '../components/ui/TokenIcon';
import BottomSheet from '../components/ui/BottomSheet';

export default function Swap() {
  const [payToken, setPayToken] = useState(MOCK_TOKENS[1]); // USDC
  const [receiveToken, setReceiveToken] = useState(MOCK_TOKENS[0]); // SOL
  const [payAmount, setPayAmount] = useState('');
  
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectingFor, setSelectingFor] = useState('pay');

  const receiveAmount = payAmount ? (parseFloat(payAmount) / receiveToken.price).toFixed(4) : '';

  const handleSwapTokens = () => {
    const temp = payToken;
    setPayToken(receiveToken);
    setReceiveToken(temp);
    setPayAmount('');
  };

  const openTokenSelector = (type) => {
    setSelectingFor(type);
    setIsSheetOpen(true);
  };

  const selectToken = (token) => {
    if (selectingFor === 'pay') setPayToken(token);
    else setReceiveToken(token);
    setIsSheetOpen(false);
  };

  return (
    <div className="p-5 h-full relative flex flex-col pb-24">
      <div className="flex justify-between items-center mb-6 pt-2">
        <h1 className="text-2xl font-bold text-white tracking-wide">Swap</h1>
        <button className="p-2.5 bg-gray-800 rounded-full text-gray-300 hover:text-white transition-colors active:scale-95">
          <Settings2 size={20} />
        </button>
      </div>

      <div className="relative bg-surface rounded-3xl p-1 shadow-xl border border-gray-700/50">
        <div className="bg-bgApp p-5 rounded-[1.35rem] mb-1 hover:border-gray-700 border border-transparent transition-colors">
          <div className="flex justify-between text-xs text-gray-400 mb-3 font-medium">
            <span>You Pay</span>
            <span>Balance: {payToken.balance}</span>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="number"
              placeholder="0"
              value={payAmount}
              onChange={(e) => setPayAmount(e.target.value)}
              className="bg-transparent text-4xl font-bold text-white w-full outline-none placeholder-gray-600"
            />
            <button 
              onClick={() => openTokenSelector('pay')}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-2xl transition-colors ml-2 shrink-0 active:scale-95"
            >
              <TokenIcon symbol={payToken.symbol} size="sm" />
              <span className="font-bold text-white">{payToken.symbol}</span>
            </button>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <button 
            onClick={handleSwapTokens}
            className="bg-gray-800 p-2.5 rounded-2xl border-[6px] border-surface text-primary hover:text-white transition-colors active:scale-90"
          >
            <ArrowDownUp size={22} strokeWidth={2.5} />
          </button>
        </div>

        <div className="bg-bgApp p-5 rounded-[1.35rem] mt-1 hover:border-gray-700 border border-transparent transition-colors">
          <div className="flex justify-between text-xs text-gray-400 mb-3 font-medium">
            <span>You Receive</span>
            <span>Balance: {receiveToken.balance}</span>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="number"
              placeholder="0"
              value={receiveAmount}
              readOnly
              className="bg-transparent text-4xl font-bold text-white w-full outline-none placeholder-gray-600 cursor-default"
            />
            <button 
              onClick={() => openTokenSelector('receive')}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-2xl transition-colors ml-2 shrink-0 active:scale-95"
            >
              <TokenIcon symbol={receiveToken.symbol} size="sm" />
              <span className="font-bold text-white">{receiveToken.symbol}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 px-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400 font-medium">Rate</span>
          <span className="text-gray-200 font-bold">1 {receiveToken.symbol} ≈ ${(receiveToken.price).toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400 font-medium flex items-center"><Info size={14} className="mr-1.5"/> Network Fee</span>
          <span className="text-gray-200 font-bold">~$0.02</span>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <button 
          className={`w-full py-4 rounded-2xl font-bold text-[17px] transition-all active:scale-[0.98] ${
            payAmount ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-gray-800 text-gray-500'
          }`}
        >
          {payAmount ? 'Review Swap' : 'Enter Amount'}
        </button>
      </div>

      <BottomSheet 
        isOpen={isSheetOpen} 
        onClose={() => setIsSheetOpen(false)}
        title="Select Token"
      >
        <div className="space-y-2">
          {MOCK_TOKENS.map((token) => (
            <button 
              key={token.id}
              onClick={() => selectToken(token)}
              className="w-full flex justify-between items-center p-4 rounded-2xl hover:bg-gray-800 transition-colors text-left active:scale-[0.98]"
            >
              <div className="flex items-center space-x-3">
                <TokenIcon symbol={token.symbol} size="md" />
                <div>
                  <h3 className="font-bold text-white text-[15px]">{token.name}</h3>
                  <p className="text-xs text-gray-400 font-medium">{token.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <h3 className="font-bold text-white">{token.balance}</h3>
              </div>
            </button>
          ))}
        </div>
      </BottomSheet>
    </div>
  );
}
