export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_M_URL: string;
      NEXT_PUBLIC_COIN_URL: string;
      NEXT_PUBLIC_EMAIL: string;
      NEXT_PUBLIC_COIN_ADDRESS: string;
      NEXT_PUBLIC_X_URL: string;
      NEXT_PUBLIC_TELE_URL: string;
      NEXT_PUBLIC_CHART_URL: string;
      NEXT_PUBLIC_DEX_URL: string;
      NEXT_PUBLIC_DEXS_URL: string;
      NEXT_PUBLIC_GECKO_URL: string;
      NEXT_PUBLIC_COIN_MARKET_CAP_URL: string;
      NEXT_PUBLIC_TBA_URL: string;
    }
  }
}
