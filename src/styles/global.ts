import { css } from '@emotion/react';

import { reset } from './reset';

export const globalStyle = css`
  ${reset}
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
  }

  #app,
  #root,
  #__next {
    font-size: 14px;
    font-family: 'Pretendard Variable';
    font-weight: 400;
    font-style: normal;
    letter-spacing: -0.03em;
  }

  @media screen and (max-width: 767px) {
    html {
      font-size: 9px;
    }
    br.mobile-only {
      display: block;
    }

    br.desktop-only {
      display: none;
    }
  }
`;
