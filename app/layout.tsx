import type {Metadata} from 'next';
import {Luckiest_Guy, Poor_Story} from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

const font = Luckiest_Guy({
  weight: ['400'],
  subsets: ['latin'],
});

const poorStoryFont = Poor_Story({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--poor-story-font',
});

export const metadata: Metadata = {
  title: 'Meet Peggy',
  description: `Meet Peggy - Britain’s Ugliest Dog, a cross between a Pug and a Chinese Crested Dog, who has recently gone viral on the internet and attained somewhat of a celebrity status with a following of 944k on Instagram. This adorably unique pup was cast as Wade Wilson’s new sidekick, Dogpool, in 'Deadpool & Wolverine'.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(font.className, poorStoryFont.variable)}>
        {children}
      </body>
    </html>
  );
}
