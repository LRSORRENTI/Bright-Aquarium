'use client'

import acmeLogo from '@/assets/logo-acme.png';
import quantamLogo from '@/assets/logo-quantum.png';
import ehcoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import Image from 'next/image';

import { motion } from 'framer-motion';

export const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className="container">
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
        <motion.div className='flex gap-14 flex-none pr-14' 
          animate={{
            translateX: '-50%',
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}>

     
          <Image className='logo-ticker-image' src={acmeLogo} alt='Acme logo'/>
          <Image className='logo-ticker-image' src={quantamLogo} alt='Quantam logo'/>
          <Image className='logo-ticker-image' src={ehcoLogo} alt='Echo logo'/>
          <Image className='logo-ticker-image' src={celestialLogo} alt='Celestial logo'/>
          <Image className='logo-ticker-image' src={pulseLogo} alt='Pulse  logo'/>
          <Image className='logo-ticker-image' src={apexLogo} alt='Apex logo'/>
          {/* second set of logos for animation  */}
          <Image className='logo-ticker-image' src={acmeLogo} alt='Acme logo'/>
          <Image className='logo-ticker-image' src={quantamLogo} alt='Quantam logo'/>
          <Image className='logo-ticker-image' src={ehcoLogo} alt='Echo logo'/>
          <Image className='logo-ticker-image' src={celestialLogo} alt='Celestial logo'/>
          <Image className='logo-ticker-image' src={pulseLogo} alt='Pulse  logo'/>
          <Image className='logo-ticker-image' src={apexLogo} alt='Apex logo'/>

        </motion.div>
        </div>
      </div>
    </div>
  )
};
