import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Classes } from '@/components/sections/classes';
import { Comparison } from '@/components/sections/comparison';
import { Trial } from '@/components/sections/trial';
import { Instructors } from '@/components/sections/instructors';
import { Pricing } from '@/components/sections/pricing';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Classes />
      <Comparison />
      <Trial />
      <Instructors />
      <Pricing />
      <Contact />
    </>
  );
}