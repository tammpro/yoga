'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  { image:"/images/yoga1.jpg", alt: "Yoga meditation" },
  {
    image: "/images/yoga2.jpg",
    alt: "Yoga pose"
  },
  {
    image: "/images/yoga3.jpg",
    alt: "Yoga practice"
  }
];

export function Hero() {
  return (
    <section id="hero" className="relative h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="absolute inset-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-pink-500/30 to-orange-500/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-6">
            YOGA STUDIO
          </h1>
          <div className="space-y-4 text-lg md:text-2xl font-light">
            <p>しなやかな体、澄んだ心</p>
            <p>美しさも癒しも手に入る、新しいヨガ体験</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}