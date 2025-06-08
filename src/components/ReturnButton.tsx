import styled from "styled-components";
import { motion } from 'framer-motion';

interface ReturnButtonProps {
    reset: () => void;
    setShowTimer: (show: boolean) => void; 
}

const StyledReturnButton = styled(motion.button)`
  background-color: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #3b82f6;
    color: white;
  }
`;

function ReturnButton({ reset, setShowTimer }: ReturnButtonProps) {
    const handleReturn = () => {
        reset();
        setShowTimer(false)
    };

  return <StyledReturnButton onClick={handleReturn}>Close Timer</StyledReturnButton>;
}

export default ReturnButton;

