'use client';

import { motion } from 'framer-motion';

export default function PricingPage() {
  return (
    <div className="pt-24">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-8">料金と支払い方</h1>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">ビジター</h3>
                <p className="text-4xl font-bold mb-4">¥3,000<span className="text-base font-normal">/回</span></p>
                <ul className="text-gray-600 space-y-2">
                  <li>1回限りの利用</li>
                  <li>タオルレンタル付き</li>
                  <li>予約不要</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-pink-500">
                <h3 className="text-2xl font-bold mb-4">月会員</h3>
                <p className="text-4xl font-bold mb-4">¥15,000<span className="text-base font-normal">/月</span></p>
                <ul className="text-gray-600 space-y-2">
                  <li>回数無制限</li>
                  <li>タオルレンタル無料</li>
                  <li>オンラインレッスン受け放題</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">回数券</h3>
                <p className="text-4xl font-bold mb-4">¥25,000<span className="text-base font-normal">/10回</span></p>
                <ul className="text-gray-600 space-y-2">
                  <li>6ヶ月有効</li>
                  <li>タオルレンタル付き</li>
                  <li>予約優先権付き</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}