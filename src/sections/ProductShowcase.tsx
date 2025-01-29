'use client'
import bluefishImage from '@/assets/bluefish.png'

import mainDisplay from '@/assets/main-display.jpg'
import seahorseImage from '@/assets/seahorse.png'
import tubeImage from '@/assets/tube.png'
import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section id='discover'  ref={sectionRef} className='bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container">
        <div className='section-heading'>
        <div className='flex justify-center'>
        <div className='tag'>Discover the ocean's giants</div>
        </div>
        <h2 className='section-title mt-5'>A breathtaking way to connect with marine life</h2>
        <p className='section-description mt-5'>Step into an underwater world and marvel at majestic whale sharks, vibrant fish, 
        and unforgettable moments waiting to be captured.
        </p>
        </div>
        <div className='relative'>
        <Image src={mainDisplay} 
               alt='Product Image' 
               className='mt-10 rounded-3xl'
          /> 
          <motion.img 
                  style={{
                    translateY,
                  }}
                  src={bluefishImage.src}
                  alt="pyramid Image"
                  height={262}
                  width={262}
                  className='hidden md:block absolute -right-36 -top-32'
          />
          <motion.img 
                style={{
                  translateY,
                }}
                 src={seahorseImage.src}
                 alt='Tube Image'
                 height={248}
                 width={248}
                 className='hidden md:block absolute bottom-24 -left-36'
                 />
        </div>
      </div>
    </section>
  )
};
