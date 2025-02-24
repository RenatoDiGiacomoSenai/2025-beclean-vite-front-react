/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_AUTH_STORAGE_KEY: string
  readonly VITE_BACKEND_API_URL: string
  readonly VITE_HOME_PAGE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
