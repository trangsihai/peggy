import clsx from "clsx";
import { Alfa_Slab_One } from "next/font/google";
import Image from "next/image";

const alfaFont = Alfa_Slab_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--alfa-slab-one-font",
});

import heroBg from "./hero.png";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] bg-white">
      <div className="relative overflow-hidden">
        {/* banner */}
        <div className="relative">
          <Image src={heroBg} quality={100} priority alt="hero" />

          <div className="absolute top-[5%] left-[5%] flex gap-1">
            <a href={process.env.NEXT_PUBLIC_DEXS_URL}>
              <img
                className="w-[60px] lg:w-auto"
                src="/new/x-icon.png"
                alt=""
              />
            </a>
            <a href={process.env.NEXT_PUBLIC_DEXS_URL}>
              <img
                className="w-[60px] lg:w-auto"
                src="/new/d-icon.png"
                alt=""
              />
            </a>
          </div>
          <div className="absolute top-[50%] right-[3%] -translate-y-2/4">
            <a href={process.env.NEXT_PUBLIC_DEXS_URL}>
              <img
                className="w-[120px] lg:w-auto float-right"
                src="/new/fefe.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div>
          <a href={process.env.NEXT_PUBLIC_DEXS_URL}>
            <article
              className={clsx(
                "text-center text-[16px] lg:text-[40px] text-[#C7021E] px-[10%] py-8 break-all",
                alfaFont.variable
              )}
            >
              CA: {process.env.NEXT_PUBLIC_TBA_URL}
            </article>
          </a>
        </div>

        <div className="bg-[#FAE517] px-[10%] py-12">
          <div
            className={clsx(
              "text-center text-[16px] lg:text-[40px] text-[#C7021E] break-words",
              alfaFont.variable
            )}
          >
            FEIFEI, the biggest meme on TRON, every chain needs its FeiFei,
            every feifei has its day.
          </div>
          <div>
            <div
              className={clsx(
                "text-right text-[16px] lg:text-[40px] text-[#C7021E] -rotate-12 p-[36px] pr-0 lg:pt-[100px] lg:pb-[50px] lg:pr-[20px] lg:pl-[25%] break-words",
                alfaFont.variable
              )}
            >
              FEIFEI is a laid back frog in this &quot;FEARY&quot; market. Everthing is
              just fine cause FEIFEI is here, serious and brings many sunshine,
              many fun and much loves to TRON. Remeber again, FEIFEI is here,
              remember always be greddy when they&apos;re &quot;FEARY&quot;.
            </div>
          </div>

          <div className="flex justify-evenly mt-8">
            <img
              className="animate-bounce w-[80px] lg:w-auto"
              src="/new/down-vector.png"
              alt=""
            />
            <img
              className="animate-bounce w-[80px] lg:w-auto"
              src="/new/down-vector.png"
              alt=""
            />
            <img
              className="animate-bounce w-[80px] lg:w-auto"
              src="/new/down-vector.png"
              alt=""
            />
          </div>
        </div>

        <div>
          <a href={process.env.NEXT_PUBLIC_DEXS_URL}>
            <img
              className="w-full max-w-[1440px] m-auto"
              src="/new/buy-free.png"
              alt=""
            />
          </a>
        </div>

        <div className="bg-[#FAE517] px-[10%] py-8">
          <div
            className={clsx(
              "text-[24px] lg:text-[48px] text-[#C7021E] mb-8 break-words",
              alfaFont.variable
            )}
          >
            Tokenomics token supply: 1,000,000,000,000
          </div>
          <div
            className={clsx(
              "text-[16px] lg:text-[32px] text-[#C7021E] break-words",
              alfaFont.variable
            )}
          >
            No Taxes, No Bullshit. It&apos;s that simple.
          </div>
          <div
            className={clsx(
              "text-[16px] lg:text-[32px] text-[#C7021E] break-words",
              alfaFont.variable
            )}
          >
            LP tokens are burnt, and contract ownership is renounced.
          </div>
        </div>

        <div>
          <img
            className="w-full max-w-[1440px] m-auto"
            src="/new/img-1.png"
            alt=""
          />
        </div>

        {/* footer */}
        <div
          className={clsx(
            "text-center text-[16px] lg:text-[40px] text-[#C7021E] px-[10%] pt-8",
            alfaFont.variable
          )}
        >
          © 2024 by Feifei. All rights reserved!
        </div>
      </div>
    </div>
  );
}
