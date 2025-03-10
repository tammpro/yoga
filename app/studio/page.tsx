'use client';

import { motion } from 'framer-motion';

export default function StudioPage() {
  return (
    <div className="pt-24">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-8">スタジオ案内</h1>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80"
                  alt="Studio interior"
                  className="rounded-lg shadow-lg mb-8"
                />
                <h3 className="text-2xl font-bold mb-4">充実の設備</h3>
                <p className="text-gray-600 mb-8">
                  最新の溶岩パネルを採用し、快適な空間でヨガを楽しんでいただけます。
                  シャワールーム、パウダールームも完備しています。
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
                  alt="Yoga space"
                  className="rounded-lg shadow-lg mb-8"
                />
                <h3 className="text-2xl font-bold mb-4">アクセス</h3>
                <p className="text-gray-600 mb-4">
                  〒151-0053<br />
                  東京都渋谷区代々木1-2-3<br />
                  代々木駅から徒歩3分
                </p>
                <p className="text-gray-600">
                  営業時間: 8:30-20:00<br />
                  電話: 03-1234-5678
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}