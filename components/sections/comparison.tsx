'use client';

import { motion } from 'framer-motion';

export function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light mb-4">3つの特徴</h2>
          <p className="text-gray-600 mb-12 font-light">SERENITYが選ばれる理由</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "心と体を整える",
                image: "images/yoga4.jpg",
                description: "静かな空間で呼吸を深め、ゆったりと体を動かしながら、日々の疲れやストレスを手放します。忙しい毎日の中でも、自分と向き合うことで、心と体のバランスを自然と整えていく。  「なんとなく不調」を感じている方にも、ぴったりの時間です。"
              },
              {
                title: "内側から輝く美しさをサポート",
                image: "images/yoga2.jpg",
                description: "全身をじんわり温めることで、めぐりを良くし、内側からスッキリとした体へ。呼吸とともに動くことで、姿勢も整い、しなやかで美しいラインを引き出します。年齢や経験を問わず、自分らしい美しさを見つけたい方におすすめです。"
              },
              {
                title: "無理なく始められるやさしいレッスン",
                image: "images/yoga3.jpg",
                description: "ヨガが初めての方も、体が硬いと感じている方も安心。一人ひとりのペースに合わせた丁寧な指導で、無理なく楽しく続けられるレッスンをご用意しています。"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}