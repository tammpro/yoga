'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: 'about', label: 'YOGA STUDIOについて' },
    { to: 'classes', label: 'レッスン' },
    { to: 'comparison', label: 'ヨガの特徴' },
    { to: 'trial', label: '体験レッスン' },
    { to: 'instructors', label: 'インストラクター' },
    { to: 'pricing', label: '料金案内' },
    { to: 'faq', label: 'よくある質問' },
    { to: 'contact', label: 'お問い合わせ' },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full bg-gradient-to-r from-pink-100/80 to-orange-100/80 backdrop-blur-sm z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <ScrollLink 
            to="hero" 
            smooth={true} 
            duration={500} 
            className="flex items-center space-x-2 cursor-pointer z-50"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              YOGA STUDIO
            </span>
          </ScrollLink>

          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-gray-700 hover:text-pink-500 cursor-pointer transition-colors"
              >
                {item.label}
              </ScrollLink>
            ))}
          </nav>

          <button
            className="md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-pink-500" />
            ) : (
              <Menu className="h-6 w-6 text-pink-500" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-40 md:hidden flex items-center justify-center"
              style={{ paddingTop: '4rem' }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 mx-4 shadow-xl max-w-sm w-full max-h-[calc(100vh-8rem)] overflow-y-auto my-auto">
                <div className="flex flex-col items-center space-y-6">
                  {menuItems.map((item) => (
                    <ScrollLink
                      key={item.to}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="text-xl text-gray-700 hover:text-pink-500 cursor-pointer transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </ScrollLink>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}