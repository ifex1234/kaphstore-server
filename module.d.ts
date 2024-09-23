/* eslint-disable prettier/prettier */
declare namespace NodeJS {
  export interface ProcessEnv {
    jwtSecret: string;
    jwtRefreshSecret: string;
  }
}
