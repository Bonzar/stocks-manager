export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      MONGODB_COLLECTION: string;
      NODE_ENV: string;
      HOST_URI: string;
    }
  }
}
