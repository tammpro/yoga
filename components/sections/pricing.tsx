'use client';

import { motion } from 'framer-motion';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light mb-4 text-gray-800">料金案内</h2>
          <p className="text-gray-600 mb-12 font-light">あなたのライフスタイルに合わせて選べる3つのプラン</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-2 border-gray-100">
              <div className="text-gray-600 font-light py-2 px-4 rounded-full inline-block mb-4 bg-gray-50">
                少しずつヨガを始めたい方
              </div>
              <h3 className="text-2xl font-light mb-2">月3回コース</h3>
              <p className="text-4xl font-light text-gray-800 mb-4">¥3,900<span className="text-base text-gray-600">/月（税込）</span></p>
              <ul className="text-gray-600 space-y-3 mb-6 text-left font-light">
                <li>✓ スタジオレッスン月3回</li>
                <li>✓ オンラインレッスン要相談</li>
                <li>✓ 初心者向け</li>
              </ul>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-2 border-pink-100 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-light">人気No.1</span>
              </div>
              <div className="text-gray-600 font-light py-2 px-4 rounded-full inline-block mb-4 bg-pink-50">
              暮らしにヨガを取り入れたい方
              </div>
              <h3 className="text-2xl font-light mb-2">月5回</h3>
              <p className="text-4xl font-light text-gray-800 mb-4">¥5,500<span className="text-base text-gray-600">/月（税込）</span></p>
              <ul className="text-gray-600 space-y-3 mb-6 text-left font-light">
                <li>✓ スタジオレッスン月5回</li>
                <li>✓ オンラインレッスン可能</li>
                <li>✓ 中級者向け</li>
              </ul>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-2 border-gray-100">
              <div className="text-gray-600 font-light py-2 px-4 rounded-full inline-block mb-4 bg-gray-50">
              毎日のヨガを習慣にしたい方
              </div>
              <h3 className="text-2xl font-light mb-2">通い放題コース</h3>
              <p className="text-4xl font-light text-gray-800 mb-4">¥8,800<span className="text-base text-gray-600">/月（税込）</span></p>
              <ul className="text-gray-600 space-y-3 mb-6 text-left font-light">
                <li>✓ スタジオレッスン無制限</li>
                <li>✓ オンラインレッスン可能</li>
                <li>✓ 上級者向け</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}