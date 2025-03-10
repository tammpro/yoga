'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';

export function Trial() {
  return (
    <section id="trial" className="relative py-24">
      <div className="absolute inset-0">
        <img
          src="images/yoga3.jpg"
          alt="Yoga class"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-8">無料体験レッスン開催中！</h2>
          <p className="text-lg mb-4">
          はじめての方も安心してご参加いただける無料体験レッスンをご用意しています。  
          まずは一度、スタジオの雰囲気やレッスンの心地よさを体感してみませんか？  
          講師・スタッフ一同、みなさまとお会いできるのを楽しみにお待ちしています。
          </p>
          <ScrollLink to="contact" smooth={true} offset={-100} duration={500}>
            <Button
              size="lg"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg"
            >
              無料体験レッスンに申し込む
            </Button>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
}