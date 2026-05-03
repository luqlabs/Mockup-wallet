import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BottomNav from './components/layout/BottomNav';
import Home from './pages/Home';
import Swap from './pages/Swap';
import History from './pages/History';
import Settings from './pages/Settings';
import './index.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home key="home" />;
      case 'swap': return <Swap key="swap" />;
      case 'history': return <History key="history" />;
      case 'settings': return <Settings key="settings" />;
      default: return <Home key="home" />;
    }
  };

  return (
    <div className="min-h-screen bg-black flex sm:items-center justify-center text-textMain">
      <div className="w-full max-w-md bg-bgApp relative overflow-hidden flex flex-col h-[100dvh] sm:h-[92dvh] sm:rounded-[2.5rem] sm:border-[8px] sm:border-[#0f172a] shadow-2xl sm:shadow-[0_0_50px_rgba(99,102,241,0.1)]">
        
        {/* Main Content Area - hide scrollbar using utility class or inline style */}
        <div 
          className="flex-1 overflow-y-auto pb-[4.5rem]" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="h-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
