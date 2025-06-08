import styled from 'styled-components';
import { motion } from 'framer-motion';

interface TimerProps {
  running: boolean;
  seconds: number;
  mode: string;
}

const TimerDisplay = styled(motion.div)<{ mode: string; running: boolean }>`
  font-size: 5rem;
  font-weight: bold;
  color: ${({ running, mode }) => !running ? '#6b7280' : mode === 'work' ? '#ef4444' : '#10b981'};
`;

export default function Timer({ running, seconds, mode }: TimerProps) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');

  return (
    <TimerDisplay
      mode={mode}
      running={running}
      animate={running ? { scale: [1, 1.05, 1] } : { scale: 1 }}
      transition={running ? { duration: 1.5, repeat: Infinity } : { duration: 0 }}
    >
      {minutes}:{secs}
    </TimerDisplay>
  );
}
