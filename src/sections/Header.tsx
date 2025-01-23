import Image from 'next/image';

import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import MenuItem from '@/assets/menu.svg';

export const Header = () => {
  return (
  <header>
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
      <div className='inline-flex gap-1 items-center'>
      <p>
        Get started for free
      </p>
      <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
      </div>
    </div>
    <div className='py-5'>
      <div className="container">
      <Image src={Logo} alt='Saas Logo' height={40} width={40}/>
      </div>
    </div>
  </header>
  )
};
