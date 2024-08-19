import Image from 'next/image';

import Hero from './hero';
import MemePeggy from './meme-peggy';
import About from './about';
import Tokenomics from './tokenomics';
import JoinUs from './join-us';

import heroBg from './hero.png';

export default function Home() {
  return (
    <div className='mx-auto max-w-screen-3xl'>
      <div className='relative overflow-hidden bg-[url(./background-1.svg)] bg-cover'>
        <Image src={heroBg} quality={100} priority alt='' />
        <div className='absolute inset-0 overflow-hidden px-5 lg:px-10'>
          <Hero />
        </div>
      </div>
      <div className='relative overflow-hidden bg-[url(./background-2.svg)] bg-cover py-10 lg:py-20'>
        <MemePeggy />
        <div className='mx-10 mt-10'>
          <About />
        </div>
        <div className='mx-5 mt-10 lg:mx-10'>
          <Tokenomics />
        </div>
        <div className='mx-5 -mt-10 sm:mx-10 lg:mx-20'>
          <JoinUs />
        </div>
      </div>
    </div>
  );
}
