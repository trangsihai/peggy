import clsx from "clsx";
import { Alfa_Slab_One } from "next/font/google";

const alfaFont = Alfa_Slab_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--alfa-slab-one-font",
});

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] bg-white">
      <div className="relative overflow-hidden">
        {/* banner */}
        <div className="relative">
          <img
            className="w-full max-w-[1440px] m-auto"
            src="/new/hero.png"
            alt=""
          />

          <div className="absolute top-[5%] left-[5%] flex gap-1">
            <a href={process.env.NEXT_PUBLIC_X_URL}>
              <img src="/new/x-icon.png" alt="" />
            </a>
            <a href={process.env.NEXT_PUBLIC_X_URL}>
              <img src="/new/d-icon.png" alt="" />
            </a>
          </div>
          <div className="absolute top-[50%] right-[3%] -translate-y-2/4">
            <a href={process.env.NEXT_PUBLIC_X_URL}>
              <img src="/new/fefe.png" alt="" />
            </a>
          </div>
        </div>

        <div>
          <article
            className={clsx(
              "text-center text-[40px] text-[#C7021E] px-[10%] py-8 break-all",
              alfaFont.variable
            )}
          >
            CA: 0xfefe157c9d0aE025213092ff9a5cB56ab492BaB8
          </article>
        </div>

        <div className="bg-[#FAE517] px-[10%] py-12">
          <div
            className={clsx(
              "text-center text-[40px] text-[#C7021E] break-words",
              alfaFont.variable
            )}
          >
            FEFE, the biggest meme on TRON, every chain needs its Fefe, every
            fefe has its day.
          </div>
          <div>
            <div
              className={clsx(
                "text-right text-[40px] text-[#C7021E] -rotate-12 pt-[100px] pb-[50px] pr-[20px] pl-[25%] break-words",
                alfaFont.variable
              )}
            >
              Everything is just fine, FEFE is very serious frog,  brings many
              sunshines, many fun and much love to TRON.
            </div>
          </div>

          <div className="flex justify-evenly mt-8">
            <img src="/new/down-vector.png" alt="" />
            <img src="/new/down-vector.png" alt="" />
            <img src="/new/down-vector.png" alt="" />
          </div>
        </div>

        <div>
          <a href={process.env.NEXT_PUBLIC_X_URL}>
            <img
              className="w-full max-w-[1440px] m-auto"
              src="/new/buy-free.png"
              alt=""
            />
          </a>
        </div>

        <div className="bg-[#FAE517] px-[15%] py-8">
          <div
            className={clsx(
              "text-[48px] text-[#C7021E] mb-8 break-words",
              alfaFont.variable
            )}
          >
            Tokenomics token supply: 420,690,000
          </div>
          <div
            className={clsx(
              "text-[32px] text-[#C7021E] break-words",
              alfaFont.variable
            )}
          >
            No Taxes, No Bullshit. It&apos;s that simple.
          </div>
          <div
            className={clsx(
              "text-[32px] text-[#C7021E] break-words",
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
            "text-center text-[40px] text-[#C7021E] px-[10%] pt-8",
            alfaFont.variable
          )}
        >
          © 2024 by Fefe. All rights reserved!
        </div>
      </div>
    </div>
  );
}
