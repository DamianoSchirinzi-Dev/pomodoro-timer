import styled from 'styled-components';
import { motion } from 'framer-motion';

const BarContainer = styled.div`
  height: 12px;
  width: 80%;
  display: flex;
  align-items: center;
  background-color: #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  margin: .4rem auto 2rem auto;
`;

interface ProgressBarProps {
  running?: boolean;
  progress: number;
  mode: string;
}

export default function ProgressBar({ progress, mode, running = true }: ProgressBarProps) {
  const barColor = !running
    ? '#777777' // gray-300
    : mode === 'work'
      ? 'linear-gradient(to right, #ef4444, #f97316)'
      : 'linear-gradient(to right, #10b981, #3b82f6)';
  const boxShadow = !running
    ? 'none'
    : mode === 'work'
      ? '0 0 10px #ef4444aa'
      : '0 0 10px #10b981aa';
  const borderRadius = progress >= 1 ? '12px' : '12px 0 0 12px';

  return (
    <BarContainer>
      <motion.div
        animate={{ width: `${progress * 100}%` }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{
          height: '100%',
          background: barColor,
          boxShadow,
          borderRadius,
        }}
      />
    </BarContainer>
  );
}
