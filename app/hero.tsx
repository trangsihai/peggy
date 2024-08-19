'use client';

import Image from 'next/image';
import clsx from 'clsx';
import Sticky from 'react-stickynode';
import {useMediaQuery} from 'usehooks-ts';

import Nav from './nav';
import Hamburger from './hamburger';

import logo from './logo.png';
import peggyImg from './peggy.png';

export default function Hero() {
  const isSticky = useMediaQuery('(max-width: 767px)');

  return (
    <>
      <Sticky enabled={isSticky} innerZ={100}>
        <div className='overflow-hidden pt-5 md:pt-10 lg:pt-16'>
          <header className='flex items-center justify-between gap-x-10 overflow-hidden'>
            <div className='relative w-full self-stretch'>
              <Image
                src={logo}
                alt=''
                className='absolute h-full object-contain object-left'
              />
            </div>
            <Nav
              className={clsx(
                'items-center border-[#FFFAFA] bg-primary',
                'border-2 lg:border-4',
                'rounded-2xl lg:rounded-[21px]',
                'max-md:multi-[`hidden;[&+div]:block`]'
              )}
            />
            <div className='hidden'>
              <Hamburger />
            </div>
          </header>
        </div>
      </Sticky>
      <footer
        id='home'
        className={clsx(
          'absolute flex w-full items-center justify-between overflow-hidden',
          'bottom-2 lg:bottom-8 xl:bottom-12 2xl:bottom-14',
          'px-5 sm:px-10 lg:px-20',
          'gap-x-10'
        )}
      >
        <div className='max-w-[50%] flex-[0_0_375px] overflow-hidden'>
          <Image
            src={peggyImg}
            quality={100}
            priority
            alt=''
            className='object-contain object-left'
          />
        </div>
        <div
          className={clsx(
            'flex grow items-center justify-end overflow-hidden',
            '[&_img]:multi-[w-[100px];object-contain;aspect-square]',
            'gap-x-3 sm:gap-x-5 lg:gap-x-10',
            'pr-10 lg:pr-20',
            '[&_a]:multi-[`inline-block;animate-[spin_5s_linear_infinite];[&:hover]:[animation-play-state:paused]`]'
          )}
        >
          <a href={process.env.NEXT_PUBLIC_X_URL} target='_x'>
            <img src='/x-0.png' alt='' />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_TELE_URL}
            target='_tele'
            className='![animation-direction:reverse]'
          >
            <img src='/tele-0.png' alt='' />
          </a>
          <a href={process.env.NEXT_PUBLIC_DEXS_URL} target='_dexs'>
            <img src='/dexs-0.png' alt='' />
          </a>
        </div>
      </footer>
    </>
  );
}
