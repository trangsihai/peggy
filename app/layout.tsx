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
  title: 'Meet FEIFEI',
  description: `$FEIFEI, the frog from Mindviscosity, go X420690 pump to the SUN`,
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
