'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-pink-50 to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              YOGA STUDIO
            </h3>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-700">営業時間</h4>
            <p className="text-gray-600">8:30-20:00</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-700">連絡先</h4>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-pink-500" />
                03-1234-5678
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-pink-500" />
                info@yoga-studio.jp
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-pink-500" />
                東京都渋谷区代々木1-2-3
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-700">フォローする</h4>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-pink-500 hover:text-orange-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-pink-200">
          <p className="text-center text-gray-500">&copy; 2025 YOGA STUDIO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}