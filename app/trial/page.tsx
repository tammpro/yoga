'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function TrialPage() {
  return (
    <div className="pt-24">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-8">入会・体験・見学</h1>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">体験レッスン</h3>
                <p className="text-4xl font-bold text-pink-500 mb-4">¥1,000</p>
                <ul className="text-gray-600 space-y-4 mb-8">
                  <li>初回限定価格</li>
                  <li>タオル無料レンタル</li>
                  <li>専任インストラクターによる丁寧な指導</li>
                  <li>施設見学付き</li>
                </ul>
                <Button className="w-full bg-pink-500 hover:bg-pink-600">予約する</Button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">施設見学</h3>
                <p className="text-4xl font-bold text-gray-500 mb-4">無料</p>
                <ul className="text-gray-600 space-y-4 mb-8">
                  <li>スタジオ内覧</li>
                  <li>カウンセリング付き</li>
                  <li>予約システム説明</li>
                  <li>入会金割引特典付き</li>
                </ul>
                <Button className="w-full">見学予約</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}