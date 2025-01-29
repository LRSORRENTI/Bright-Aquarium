'use client';

import ArrowRight from '@/assets/arrow-right.svg';
import butterflyFishImage from '@/assets/butterflyfish.png';
import lionFishImage from '@/assets/lionfish.png';

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel, 
} from "@/components/alert-dialog";

import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
 
export const CallToAction = () => {

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
       <div className='section-heading relative'>
       <h2 className="section-title">Dive into your next adventure</h2>
        <p className="section-description mt-5">
        Unlock a world of marine wonders. Sign up today and explore breathtaking exhibits, 
        exclusive events, and unforgettable experiences.
        </p>
        <motion.img 
               src={butterflyFishImage.src} alt='Star image'
               width={360}
               className="absolute -left-[330px] md:-left-[400px] -top-[137px]"
               style={{
                translateY,
               }}
               />
        <motion.img 
               src={lionFishImage.src} alt='Spring image'
               width={360}
               className="absolute -right-[391px] -top-[19px]"
               style={{
                translateY,
               }}
               />
        </div>
        <div className="flex gap-2 mt-10 justify-center ">      
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
              <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5 "/>
          </button>
        </div>
      </div>
    </section>
  )
};
