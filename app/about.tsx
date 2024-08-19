import Image from 'next/image';

import aboutImg from './about.jpeg';
import clsx from 'clsx';

export default function About() {
  return (
    <div id='about'>
      <h2 className='text-heading'>
        About <span className='max-[380px]:hidden'>Peggy</span>
      </h2>
      <div className='mt-5 flex items-center gap-x-10 sm:mt-10'>
        <Image
          src={aboutImg}
          alt=''
          className={clsx(
            'max-h-[570px] w-[min(var(--size),100%)] shrink-0 rounded-[3rem] border-4 border-secondary object-cover',
            '[--size:300px] sm:[--size:350px] lg:[--size:400px] xl:[--size:450px] 2xl:[--size:495px]',
            'hidden md:block'
          )}
        />
        <article
          className={clsx(
            'grow text-center font-poor-story text-white',
            'text-3xl !leading-snug lg:text-4xl xl:text-5xl 2xl:text-[55px]'
          )}
        >
          Meet Peggy - Britain’s Ugliest Dog, a cross between a Pug and a
          Chinese Crested Dog, who has recently gone viral on the internet and
          attained somewhat of a celebrity status with a following of 944k on
          Instagram. This adorably unique pup was cast as Wade Wilson’s new
          sidekick, Dogpool, in “Deadpool & Wolverine”.
        </article>
      </div>
    </div>
  );
}
