'use client';

import { motion } from 'framer-motion';

export default function LessonsPage() {
  return (
    <div className="pt-24">
      <section className="py-24 bg-gradient-to-b from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-8">レッスン</h1>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">ホットヨガ</h3>
                <p className="text-gray-600 mb-6">
                  室温40度、湿度60%の環境で行うヨガ。
                  発汗作用により老廃物の排出を促し、
                  心身のデトックス効果が期待できます。
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>・代謝アップ</li>
                  <li>・デトックス効果</li>
                  <li>・美肌効果</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">溶岩ホットヨガ</h3>
                <p className="text-gray-600 mb-6">
                  天然溶岩から放出されるマイナスイオンと遠赤外線の
                  相乗効果で、より深い癒しと健康効果を体感できます。
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>・深いリラックス効果</li>
                  <li>・免疫力アップ</li>
                  <li>・疲労回復</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}