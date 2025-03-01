'use client'

import Image from 'next/image';

import logo from '@/assets/logo.png';
import SocialXIcon from '@/assets/social-x.svg';
import SocialInstaIcon from '@/assets/social-insta.svg';
import SocialLinkedInIcon from '@/assets/social-linkedin.svg';
import SocialPinterestIcon from '@/assets/social-pin.svg';
import SocialYouTubeIcon from '@/assets/social-youtube.svg';

import { handleClickMobileNavItem } from '@/hooks/handleClickMobileNavItem';

export const Footer = () => {

  let date = (new Date().getFullYear())

  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className='inline-flex relative before:content-[""] before:w-full before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0E1,#2FD8FE)] before:absolute'>
          <Image src={logo} height={40} alt='saas logo' className='relative'/>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#hero" onClick={handleClickMobileNavItem} className="text-gray-300 transition-colors duration-300 hover:text-white">
            About
          </a>
          <a href="#discover" onClick={handleClickMobileNavItem} className="text-gray-300 transition-colors duration-300 hover:text-white">
            Discover
          </a>
          <a href="#memberships" onClick={handleClickMobileNavItem} className="text-gray-300 transition-colors duration-300 hover:text-white">
            Memberships
          </a>
          <a href="#testimonials" onClick={handleClickMobileNavItem} className="text-gray-300 transition-colors duration-300 hover:text-white">
            Testimonials
          </a>
        </nav>

      <div className='flex justify-center gap-6 mt-6'>
        <SocialXIcon/>
        <SocialInstaIcon/>
        <SocialLinkedInIcon/>
        <SocialPinterestIcon/>
        <SocialYouTubeIcon/>
      </div>
      <p className='mt-6'>&copy; {date} Bright Inc. All rights reserved.</p>
      </div>
    </footer>
  )
};
