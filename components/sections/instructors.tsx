'use client';

import { motion } from 'framer-motion';

const instructors = [
  {
    name: 'HANAKO',
    image: 'images/yoga1.jpg',
    message: 'ヨガを通じて、毎日を少しでも心地よく過ごせるようサポートいたします。'
  },
  {
    name: 'SAYAKA',
    image: 'images/yoga4.jpg',
    message: 'ゆったりとした呼吸とともに、心も体も軽くなるような時間をご提供します。'
  },
  {
    name: 'YUI',
    image: 'images/yoga5.jpg',
    message: '呼吸を大切にしながら、体と心の声に耳を傾けるレッスンを行います。'
  }
];

export function Instructors() {
  return (
    <section id="instructors" className="py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light">インストラクター</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mb-6 overflow-hidden rounded-2xl shadow-lg relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-orange-100 transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="relative w-full h-80 object-cover transform -rotate-1 group-hover:-rotate-2 transition-transform"
                />
              </div>
              <h3 className="text-2xl font-light mb-4">{instructor.name}</h3>
              <p className="text-gray-600 font-light">{instructor.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}