'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="pt-24">
      <section className="py-24 bg-gradient-to-b from-pink-50 via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent">NOAについて</h1>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-orange-100 transform -skew-y-2 rounded-3xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    NOAは、2020年に設立された溶岩ホットヨガスタジオです。
                    「Natural & Beauty」をコンセプトに、
                    心と体のバランスを整え、自然な美しさを引き出すお手伝いをしています。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    最新の溶岩パネルを使用した施設で、
                    快適な環境でヨガを楽しんでいただけます。
                    経験豊富なインストラクターが、お一人おひとりに合わせた
                    丁寧な指導を行います。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}