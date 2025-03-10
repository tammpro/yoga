'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const formSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z.string().min(1, '電話番号を入力してください'),
  message: z.string().min(1, 'メッセージを入力してください'),
});

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

export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <section id="faq" className="py-24 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-light mb-8 text-center">よくある質問</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-light">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 font-light">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80"
            alt="Studio interior"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl font-light mb-8 text-center">お問い合わせ</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">
                    お名前
                  </label>
                  <Input {...register('name')} className="w-full font-light" />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 font-light">{errors.name.message as string}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">
                    メールアドレス
                  </label>
                  <Input {...register('email')} type="email" className="w-full font-light" />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 font-light">{errors.email.message as string}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">
                    電話番号
                  </label>
                  <Input {...register('phone')} type="tel" className="w-full font-light" />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 font-light">{errors.phone.message as string}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">
                    お問い合わせ内容
                  </label>
                  <Textarea {...register('message')} className="w-full h-32 font-light" />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 font-light">{errors.message.message as string}</p>
                  )}
                </div>

                <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-700 font-light">
                  送信する
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}