'use client'

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from 'framer-motion';
import React from "react";
const testimonials = [
  {
    text: "Visiting the aquarium was like stepping into another world. The whale shark exhibit is absolutely breathtaking!",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@aquaticadventures",
  },
  {
    text: "My kids loved the interactive touch tanks! It was amazing to see them learn about marine life in such a fun way.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@familytravels",
  },
  {
    text: "The behind-the-scenes tour gave me a new appreciation for the incredible care that goes into maintaining the exhibits.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@marineenthusiast",
  },
  {
    text: "I've been to aquariums around the world, and this one stands out for its stunning design and immersive experience.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@globalwanderer",
  },
  {
    text: "The coral reef exhibit is so vibrant and full of life—it’s like snorkeling without getting wet!",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@reeflover",
  },
  {
    text: "I attended one of the feeding sessions, and it was fascinating to see the staff interact with the animals.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@wildlifewatcher",
  },
  {
    text: "This aquarium is perfect for photographers. The lighting and displays are a dream to capture on camera.",
    imageSrc: avatar7.src,
    name: "Jordan Patel",
    username: "@oceanicshots",
  },
  {
    text: "The staff is so knowledgeable and passionate about marine conservation—it was inspiring to learn from them.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@ecowarrior",
  },
  {
    text: "Every visit is an adventure! I love exploring the new exhibits and learning something new each time.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@adventureseeker",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: { className?: string; testimonials: typeof testimonials; duration?: number  }) => {
  return (
    <div className={props.className}>
    <motion.div 
            animate={{
              translateY: '-50%'
            }}
            transition={{
              duration: props.duration || 15,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
            className="flex flex-col gap-6 pb-6 -translate-y-1/2">
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card" key={text.length}>
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  width={40}
                  height={40}
                  alt={name}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">{name}</div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
    </div>
  );
};


export const Testimonials = () => {
  return (
    <section className="bg-white" id="testimonials">
      <div className="container" >
        <div className="section-heading">
        <div className="flex justify-center">
        <div className="tag">Testimonials</div>
        </div>
        <h2 className="section-title mt-5">What our patrons say</h2>
        <p className="section-description mt-5">From stunning exhibits to unforgettable experiences, 
          our aquarium leaves a lasting impression on guests 
          from around the globe.
        </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={17}/>
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={16}/>
        </div>
      </div>
    </section>
  )
};
