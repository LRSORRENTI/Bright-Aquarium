'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import MenuIcon from '@/assets/menu.svg';
import CloseIcon from '@/assets/close.svg';

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
          <p>Learn more</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      {/* Header */}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            {/* Hamburger Menu */}
            <MenuIcon
              className="h-5 w-5 md:hidden cursor-pointer"
              onClick={toggleMenu}
            />
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#" className="hover:text-black transition-all ease-in-out">
                About
              </a>
              <a href="#" className="hover:text-black transition-all ease-in-out">
                Discover
              </a>
              <a href="#" className="hover:text-black transition-all ease-in-out">
                Memberships
              </a>
              <a href="#" className="hover:text-black transition-all ease-in-out">
                Testimonials
              </a>
              <button className="group bg-black px-4 py-2 rounded-lg font-medium inline-flex align-middle justify-center tracking-tight transition-all duration-300">
                <span className="bg-clip-text text-white transition-all duration-300 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 group-hover:text-transparent group-hover:bg-gradient-to-r">
                  Get tickets
                </span>
              </button>
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
                <a href="#" className="hover:text-black transition-all ease-in-out">
                  About
                </a>
                <a href="#" className="hover:text-black transition-all ease-in-out">
                  Features
                </a>
                <a href="#" className="hover:text-black transition-all ease-in-out">
                  Customers
                </a>
                <a href="#" className="hover:text-black transition-all ease-in-out">
                  Updates
                </a>
                <a href="#" className="hover:text-black transition-all ease-in-out">
                  Help
                </a>
                <button className="bg-black px-4 py-2 rounded-lg font-medium text-white hover:bg-gray-800 transition-all duration-300">
                  Get for free
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};