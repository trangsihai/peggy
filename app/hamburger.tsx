'use client';
import {useState, useEffect} from 'react';
import {Portal} from 'react-portal';
import {Fade as ReactHamburger} from 'hamburger-react';

import Nav from './nav';
import {useHash} from '@/lib/use-hash';

export default function Hamburger() {
  const hash = useHash();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [hash]);

  return (
    <>
      <ReactHamburger
        size={50}
        color='white'
        toggled={isOpen}
        toggle={setOpen}
      />
      <Portal>
        {isOpen && (
          <>
            <div
              className='fixed inset-0 z-[9998] backdrop-blur-sm'
              onClick={() => setOpen(false)}
            ></div>
            <div className='fixed right-3 top-16 z-[9998] min-w-[280px] rounded-lg bg-black/35 px-5 pb-5 pt-16 shadow-xl'>
              <Nav className='flex-col items-stretch' />
              <button
                className='absolute right-5 top-5 text-3xl text-white'
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            <style jsx global>{`
              body {
                overflow: hidden;
              }
            `}</style>
          </>
        )}
      </Portal>
    </>
  );
}
