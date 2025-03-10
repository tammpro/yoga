'use client';

import { motion } from 'framer-motion';

export function Classes() {
  return (
    <section id="classes" className="py-24 bg-gradient-to-b from-white via-pink-50/30 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light mb-4 bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent">lesson</h2>
          <p className="text-xl text-gray-600">レッスン</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-orange-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform"></div>
            <img
              src="/images/yoga1.jpg"
              alt="Live lesson"
              className="relative rounded-lg w-full shadow-lg transform -rotate-1 group-hover:-rotate-2 transition-transform"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-light mb-4">オンラインレッスン <span className="text-sm text-gray-500">20〜60分</span></h3>
            <p className="text-gray-600 leading-relaxed">
            YOGA STUDIOのオンラインレッスンは、どこにいても質の高いヨガ体験をお届けします。  
            スマートフォンやタブレットを通して、インストラクターの丁寧な指導をそのままご自宅で。  
            ご自身のペースで集中できる、特別なヨガの時間をお楽しみください。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg md:order-3"
          >
            <h3 className="text-2xl font-light mb-4">スタジオレッスン <span className="text-sm text-gray-500">30分〜60分</span></h3>
            <p className="text-gray-600 leading-relaxed">
            YOGA STUDIOのスタジオレッスンは、静かで落ち着いた空間の中で、自分と向き合う時間を大切にしています。  
            ゆったりとした呼吸に合わせた動きで、心と体のバランスを整え、レッスンが終わるころには、深いリラックスと軽やかさを感じていただけます。  
            初めての方も、体が硬い方も、安心してご参加いただけます。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group md:order-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-pink-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform"></div>
            <img
              src="images/yoga6.jpg"
              alt="Video lesson"
              className="relative rounded-lg w-full shadow-lg transform rotate-1 group-hover:rotate-2 transition-transform"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}