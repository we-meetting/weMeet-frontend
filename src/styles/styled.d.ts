import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    default: string;
    white: string;
    black: string;
    background: string;
    primary: string;
    secondary: string;
    tertiary: string;
    placeholder: string;
    softWhite: string;
    warningRed: string;
  }
}
