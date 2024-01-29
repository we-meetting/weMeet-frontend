import { Theme, css } from '@emotion/react';

import { reset } from './reset';
import { toastify } from './toastify';

export const globalStyle = (theme: Theme) => css`
  ${reset}
  ${toastify}

  * {
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }

  html {
    font-size: 14px;
  }

  html,
  body,
  #app,
  #root,
  #__next {
    width: 100%;
    height: 100%;
    background-color: ${theme.background};
    color: ${theme.default};
  }

  #app,
  #root,
  #__next {
    font-family: 'Pretendard Variable';
    font-weight: 400;
    font-style: normal;
    letter-spacing: -0.03em;
  }

  html,
  body {
    @media screen and (min-width: 2000px) {
      font-size: 16px;
    }

    @media screen and (max-width: 2000px) and (min-width: 1500px) {
      font-size: 16px;
    }

    @media screen and (max-width: 1500px) and (min-width: 1000px) {
      font-size: 16px;
    }

    @media screen and (max-width: 1000px) and (min-width: 700px) {
      font-size: 14px;
    }

    @media screen and (max-width: 700px) and (min-width: 500px) {
      font-size: 12px;
    }

    @media screen and (max-width: 500px) {
      font-size: 12px;
    }
  }
`;
