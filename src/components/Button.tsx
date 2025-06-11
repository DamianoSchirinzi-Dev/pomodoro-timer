import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const StyledButton = styled(motion.button)`
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  color: white;
  border: none;
  padding: 0.75rem 1.75rem;
  font-size: 1rem;
  margin: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease-in-out;
  letter-spacing: 0.5px;
  min-width: 110px;

  &:hover {
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.5);
    transform: translateY(-2px);
  }

  &:active {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    box-shadow: 0 3px 10px rgba(37, 99, 235, 0.6);
  }
`;


import type { VariantLabels, TargetAndTransition } from 'framer-motion';

interface ButtonProps {
  whileTap?: VariantLabels | TargetAndTransition;
  onClick?: () => void;
  children?: ReactNode;
}

export default function Button({ whileTap, onClick, children }: ButtonProps) {
  // ...component implementation
  return (
    <StyledButton onClick={onClick} whileTap={whileTap}>
      {children}
    </StyledButton>
  );
}