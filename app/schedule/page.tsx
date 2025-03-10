'use client';

import { motion } from 'framer-motion';

export default function SchedulePage() {
  const schedule = [
    { time: '08:30', class: 'モーニングフロー', instructor: 'YUKIE', level: '初級' },
    { time: '10:00', class: 'ホットヨガ', instructor: 'MISA', level: '中級' },
    { time: '12:00', class: 'リラックスヨガ', instructor: 'JUNKO', level: '初級' },
    { time: '14:00', class: '溶岩ホットヨガ', instructor: 'YUKIE', level: '中級' },
    { time: '16:00', class: 'イブニングフロー', instructor: 'MISA', level: '初級' },
    { time: '18:00', class: 'パワーヨガ', instructor: 'JUNKO', level: '上級' },
    { time: '19:30', class: 'ナイトリラックス', instructor: 'YUKIE', level: '初級' },
  ];

  return (
    <div className="pt-24">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-8">スケジュール</h1>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left">時間</th>
                    <th className="px-6 py-4 text-left">クラス</th>
                    <th className="px-6 py-4 text-left">インストラクター</th>
                    <th className="px-6 py-4 text-left">レベル</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-6 py-4">{item.time}</td>
                      <td className="px-6 py-4">{item.class}</td>
                      <td className="px-6 py-4">{item.instructor}</td>
                      <td className="px-6 py-4">{item.level}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}