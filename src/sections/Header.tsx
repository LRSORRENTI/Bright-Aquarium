'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logo.png';
import MenuIcon from '@/assets/menu.svg';
import CloseIcon from '@/assets/close.svg';

import { handleClickMobileNavItem } from '@/hooks/handleClickMobileNavItem';

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel, 
} from "@/components/alert-dialog";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* Top Banner */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Senior and family discounts available upon request
        </p>
        <div className="inline-flex gap-1 items-center">
          <a href='#hero' onClick={handleClickMobileNavItem}>Learn more
          <ArrowRight className="h-5 w-5 mb-[.10rem] inline-flex justify-center items-center" />
          </a>
        </div>
      </div>

      {/* Header */}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} className='rounded-lg'/>
            {/* Hamburger Menu */}
            <MenuIcon
              className="h-8 w-8 md:hidden cursor-pointer"
              onClick={toggleMenu}
            />
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#hero" className="hover:text-black transition-all ease-in-out"
              onClick={handleClickMobileNavItem}>
                About
              </a>
              <a href="#discover" className="hover:text-black transition-all ease-in-out"
              onClick={handleClickMobileNavItem}>
                Discover
              </a>
              <a href="#memberships" className="hover:text-black transition-all ease-in-out"
              onClick={handleClickMobileNavItem}>
                Memberships
              </a>
              <a href="#testimonials" className="hover:text-black transition-all ease-in-out"
              onClick={handleClickMobileNavItem}>
                Testimonials
              </a>
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

            </nav>
          </div>
        </div>
      </div>

      {/* Side Navigation and Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30"
              onClick={toggleMenu}
            />
            
            {/* Side Navigation */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              className="fixed top-0 right-0 w-[75%] sm:w-[50%]  bg-white shadow-lg z-40"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <CloseIcon
                  className="h-6 w-6 text-black cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>
              {/* Menu Links */}
              <nav className="flex flex-col gap-6 text-black/80 text-lg p-6">
                <a href="#hero" className="hover:text-black transition-all ease-in-out"
                onClick={handleClickMobileNavItem}>
                  About
                </a>
                <a href="#discover" className="hover:text-black transition-all ease-in-out"
                onClick={handleClickMobileNavItem}>
                  Discover
                </a>
                <a href="#memberships" className="hover:text-black transition-all ease-in-out"
                onClick={handleClickMobileNavItem}>
                  Memberships
                </a>
                <a href="#testimonials" className="hover:text-black transition-all ease-in-out"
                onClick={handleClickMobileNavItem}>
                  Testimonials
                </a>
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
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};