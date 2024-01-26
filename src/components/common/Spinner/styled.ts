import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { SpinnerProps } from '.';

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const dash = keyframes`
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35;
    }
    
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124;
    }   
`;

export const Spinner = styled.svg<Omit<SpinnerProps, 'style'>>`
  width: ${(props) => `${props.size}rem`};
  height: ${(props) => `${props.size}rem`};
  animation: ${rotate} 1.6s linear infinite;
  transform-origin: center center;

  circle {
    stroke-width: ${(props) => props.border};
    stroke-dasharray: 150, 200;
    stroke-dashoffset: -10;
    stroke-linecap: round;
    stroke: ${(props) => props.color};
    animation: ${dash} 1.2s ease-in-out infinite;
  }
`;
