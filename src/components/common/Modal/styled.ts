import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled(motion.div)`
  min-width: 32rem;
  padding: 2.8rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.white};
  z-index: 999;
`;
