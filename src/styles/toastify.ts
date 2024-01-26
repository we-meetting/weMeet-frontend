import { css } from '@emotion/react';

export const toastify = css`
  :root {
    --toastify-font-family: 'Pretendard Variable';
  }

  .Toastify__toast {
    font-size: 0.9rem;
    line-height: 120%;
    border: 1px solid red;
  }

  .Toastify__toast-theme--light {
    background: rgba(255, 255, 255, 0.6);
    border-radius: 0.6rem;
    box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(7.4px);
    -webkit-backdrop-filter: blur(7.4px);
    border: 1px solid rgba(45, 45, 45, 0.1);
    padding: 0;
  }

  .Toastify__progress-bar {
    height: 0.3rem;
  }
`;
