import clsx from 'clsx';

export default function Tokenomics() {
  return (
    <div id='tokenomics'>
      <h2 className='text-heading'>
        <span className='max-[415px]:hidden'>PEGGY</span> tokenomics
      </h2>
      <div
        className={clsx(
          'mt-5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:mt-10',
          'text-center uppercase text-white',
          'gap-5',
          '*:multi-[bg-primary;rounded-[30px];p-2]',
          '[&>section>div:first-child]:multi-[bg-[#301B1B];rounded-[22px];border-[5px];border-white;px-4;py-6]',
          '[&_img]:multi-[object-contain;h-[230px];w-full]',
          '[&_article]:multi-[`text-3xl;xl:text-4xl;2xl:text-5xl;3xl:text-[50px];break-all;leading-none;pb-2;pt-5;px-3;[-webkit-text-stroke:2px_black]`]'
        )}
      >
        <section>
          <div>
            <img src='/image-0.png' alt='' />
          </div>
          <article>
            <h4>Supply</h4>
            <p>420,690,000,000</p>
          </article>
        </section>
        <section>
          <div>
            <img src='/image-2.png' alt='' />
          </div>
          <article>
            <h4>Contract</h4>
            <p>Renounced</p>
          </article>
        </section>
        <section>
          <div>
            <img src='/image-1.png' alt='' />
          </div>
          <article>
            <h4>liquidity</h4>
            <p>burnt</p>
          </article>
        </section>
        <section>
          <div>
            <img src='/image-3.png' alt='' />
          </div>
          <article>
            <h4>Network</h4>
            <p>Ethereum</p>
          </article>
        </section>
      </div>
    </div>
  );
}
