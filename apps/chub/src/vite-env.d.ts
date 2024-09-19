/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROM_URL : string;
  readonly VITE_CHUB_API_URL : string;
  readonly VITE_VALUEMAP_URL : string;
  readonly VITE_KAKAO_JDK_KEY : string;
  readonly VITE_NAVER_JDK_KEY : string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}