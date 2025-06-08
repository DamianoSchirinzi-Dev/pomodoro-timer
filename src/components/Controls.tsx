import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = styled(motion.button)`
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

  &:hover {
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.5);
    transform: translateY(-2px);
  }

  &:active {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    box-shadow: 0 3px 10px rgba(37, 99, 235, 0.6);
  }
`;


interface ControlsProps {
  running: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export default function Controls({ running, onStart, onPause, onReset }: ControlsProps) {
  return (
    <div>
      {running ? (
        <Button whileTap={{ scale: 0.95 }} onClick={onPause}>Pause</Button>
      ) : (
        <Button whileTap={{ scale: 0.95 }} onClick={onStart}>Start</Button>
      )}
      <Button whileTap={{ scale: 0.95 }} onClick={onReset}>Reset</Button>
    </div>
  );
}
