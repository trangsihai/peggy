'use client';

import Marquee from 'react-fast-marquee';

export default function MemePeggy() {
  return (
    <div id='meme'>
      <h2 className='text-heading px-5 lg:px-10'>MEME PEGGY</h2>
      <div className='mt-5 sm:mt-10'>
        <Marquee autoFill pauseOnHover>
          <div className='flex gap-x-3 pl-3 sm:gap-x-5 sm:pl-5'>
            {Array.from({length: 7}, (_, index) => (
              <img
                key={index}
                src={`/slide/slide-${index + 1}.png`}
                alt=''
                className='h-[170px] rounded-[25px] border-4 border-secondary object-contain sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[387px]'
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
