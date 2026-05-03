import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function BottomSheet({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 z-40 backdrop-blur-sm"
          />
          
          {/* Sheet meluncur dari bawah */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute bottom-0 left-0 right-0 bg-surface rounded-t-3xl z-50 flex flex-col max-h-[85vh] shadow-2xl border-t border-gray-700"
          >
            {/* Header */}
            <div className="p-5 flex justify-between items-center border-b border-gray-700/50">
              <h3 className="text-lg font-bold text-textMain">{title}</h3>
              <button onClick={onClose} className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            
            {/* Content Area */}
            <div className="p-4 overflow-y-auto pb-8">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
