/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KAKAO_MAP_KEY: string;
  readonly VITE_BASEURL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
