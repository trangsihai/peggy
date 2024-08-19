import Image from 'next/image';
import clsx from 'clsx';

import dog from './dog.png';
import peggy from './peggy.png';

export default function JoinUs() {
  return (
    <div>
      <div
        className={clsx(
          'flex items-center justify-center gap-0 sm:gap-3',
          'text-6xl leading-none text-white sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[150px]'
        )}
      >
        <span>Join</span>
        <Image
          src={dog}
          alt=''
          className='w-[150px] object-contain drop-shadow-[0px_10px_4px_rgba(0,0,0,0.25)] sm:w-[200px] lg:w-[250px] xl:w-[300px]'
        />
        <span>Us</span>
      </div>
      <footer
        className={clsx(
          'flex items-center justify-between rounded-[29px] border-2 border-[#FFFDFD] bg-white',
          'px-4 py-3 lg:px-8 lg:py-6',
          'gap-x-10 xl:gap-x-20',
          '-mt-5 min-[1770px]:-mt-20'
        )}
      >
        <div className='flex-[0_3_440px] max-[500px]:multi-[`hidden;[&+div]:justify-between;[&+div_img]:[--size:40px]`]'>
          <Image src={peggy} alt='' className='inline-block' />
        </div>
        <div
          className={clsx(
            'flex flex-[1_2_auto] items-center justify-end',
            'gap-x-3 sm:gap-x-5 lg:gap-x-8',
            '[&_img]:multi-[object-contain;aspect-square;size-[--size]]',
            '[--size:70px]'
          )}
        >
          <a
            href={process.env.NEXT_PUBLIC_X_URL}
            target='_x'
            className='[--size:calc(var(--size)-10px)]'
          >
            <img src='/social/x.png' alt='' />
          </a>
          <a href={process.env.NEXT_PUBLIC_TELE_URL} target='_tele'>
            <img src='/social/tele.png' alt='' />
          </a>
          <a href={process.env.NEXT_PUBLIC_DEXS_URL} target='_dexs'>
            <img src='/social/dexs.png' alt='' />
          </a>
          <a href={process.env.NEXT_PUBLIC_DEX_URL} target='_dex'>
            <img src='/social/dex.png' alt='' />
          </a>
          <a href={process.env.NEXT_PUBLIC_GECKO_URL} target='_gecko'>
            <img src='/social/gecko.png' alt='' />
          </a>
          <a href={process.env.NEXT_PUBLIC_M_URL} target='_m'>
            <img src='/social/m.png' alt='' />
          </a>
        </div>
      </footer>
    </div>
  );
}
