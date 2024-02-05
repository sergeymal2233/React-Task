/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_API_URL: string
  readonly VITE_GH_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
