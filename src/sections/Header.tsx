import Image from 'next/image';

import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import MenuItcon from '@/assets/menu.svg';

export const Header = () => {
  return (
  <header className='sticky top-0 backdrop-blur-sm z-20'>
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
      <p className='text-white/60 hidden md:block'>Streamline your workflow and boost your productivity</p>
      <div className='inline-flex gap-1 items-center'>
      <p>
        Get started for free
      </p>
      <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
      </div>
    </div>
    <div className='py-5'>
      <div className="container">
      <div className='flex items-center justify-between'>
        <Image src={Logo} alt='Saas Logo' height={40} width={40}/>
        <MenuItcon className="h-5 w-5 md:hidden" />
        <nav className='hidden md:flex gap-6 text-black/60 items-center'>
          <a href="" className='hover:text-black transition-all 3s ease-in-out'>About</a>
          <a href="" className='hover:text-black transition-all 3s ease-in-out'>Features</a>
          <a href="" className='hover:text-black transition-all 3s ease-in-out'>Customers</a>
          <a href="" className='hover:text-black transition-all 3s ease-in-out'>Updates</a>
          <a href="" className='hover:text-black transition-all 3s ease-in-out'>Help</a>
          <button className="group bg-black px-4 py-2 rounded-lg font-medium inline-flex align-middle justify-center tracking-tight transition-all duration-300">
          <span className="bg-clip-text text-white transition-all duration-300 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 group-hover:text-transparent group-hover:bg-gradient-to-r">
          Get for free
          </span>
          </button>
        </nav>
      </div>
      </div>
    </div>
  </header>
  )
};
