'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  const faqs = [
    {
      question: "初心者でも参加できますか？",
      answer: "はい、もちろん参加いただけます。経験豊富なインストラクターが丁寧に指導させていただきますので、安心してご参加ください。"
    },
    {
      question: "予約は必要ですか？",
      answer: "はい、スムーズなレッスン進行のため、事前予約をお願いしています。当日予約も可能ですが、満員の場合はお断りすることもございます。"
    },
    {
      question: "持ち物は何が必要ですか？",
      answer: "動きやすい服装でお越しください。ヨガマット、タオル、水分補給用の飲み物はレンタルもございます。"
    },
    {
      question: "妊娠中でも参加できますか？",
      answer: "マタニティヨガクラスをご用意しています。ただし、必ず主治医に相談の上、ご参加ください。"
    },
    {
      question: "キャンセルポリシーについて",
      answer: "レッスン開始2時間前までのキャンセルは無料です。それ以降のキャンセルは1回分を消化させていただきます。"
    }
  ];

  return (
    <div className="pt-24">
      <section className="py-24 bg-gradient-to-b from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8 text-center">よくある質問</h1>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}