'use client';

import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-orange-100 rounded-3xl transform rotate-3"></div>
              <img
                src="/images/yoga5.jpg"
                alt="Yoga practice"
                className="relative rounded-3xl shadow-xl transform -rotate-3"
              />
            </div>
            <div>
              <h2 className="text-5xl font-light mb-8">
                <span className="inline-block">
                  <span className="block text-2xl text-gray-500 mb-2">About</span>
                  <span className="block">YOGA STUDIO</span>
                  <span className="block text-lg text-gray-500 mt-2">について</span>
                </span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
              YOGA STUDIOは、忙しい毎日から一歩離れ、自分と静かに向き合うための場所です。  
              深い呼吸とともに体をゆるめ、ありのままの自分に戻る時間を大切にしています。
              </p>
              <p>
                ここでは、体を整えるだけでなく、心にもやさしく寄り添うヨガを大切に。  
                日々の中に少しずつ、軽やかさと心地よさを取り戻していく。  
                そんな時間を、あなたと一緒に育んでいきたいと考えています。
              </p>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}