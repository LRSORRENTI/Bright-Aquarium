'use client';

import Image from 'next/image'
import ArrowIcon from '@/assets/arrow-right.svg'
import cuttleImage from '@/assets/cuttle.png'

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel, 
} from "@/components/alert-dialog";

import { useRef } from 'react';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: heroRef,
      offset: ['start end', 'end start']
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
   <section ref={heroRef} className=' pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
    <div className="container" id='hero'>
      <div className='md:flex items-center'>
      <div className='md:w-[478px]'>
  <div className="tag">
    Dive into our new exhibits
  </div>
  <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
    Explore the Depths of Discovery
  </h1>
  <p className="text-xl text-[#010D3E] tracking-tight mt-6">
    Immerse yourself in the beauty of the ocean with an aquarium designed to inspire curiosity, educate minds, and celebrate the wonders of marine life.
  </p>
  <div className="flex gap-1 items-center mt-[30px]">
  <AlertDialog>
              <AlertDialogTrigger asChild>
              <button className="group bg-black px-4 py-2 rounded-lg font-medium inline-flex align-middle justify-center tracking-tight transition-all duration-300">
                <span className="bg-clip-text text-white transition-all duration-300 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 group-hover:text-transparent group-hover:bg-gradient-to-r">
                  Get tickets
                </span>
              </button>
               </AlertDialogTrigger>
  


              {/* Dialog Content */}
              <AlertDialogContent className="bg-white p-6 rounded-lg shadow-xl z-50">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-lg font-semibold">Notice</AlertDialogTitle>
                  <AlertDialogDescription className="text-gray-600">
                    Online ticket sales are currently unavailable. Please check back later or call our frontdesk.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="flex justify-end mt-4">
                  <AlertDialogCancel asChild>
                    <button className="bg-gray-200 px-4 py-2 rounded-lg text-black w-full sm:w-auto">Close</button>
                  </AlertDialogCancel>
                </div>
              </AlertDialogContent>
              </AlertDialog>
    {/* <button className="btn btn-text gap-1">
      <span>Learn More</span>
      <ArrowIcon className="h-5 w-5" />
    </button> */}
  </div>
</div>

      <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
        <motion.img 
          src={cuttleImage.src} 
          alt='Cog image' 
          className='md:absolute md:h-full md:w-auto md:max-w-none md:left-6 lg:left-0 '
          animate={{
            translateY: [-30, 30],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 4,
            ease: 'easeInOut',
          }}
          />
      </div>
    </div>
    </div>
   </section>
  )
};
