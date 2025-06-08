import styled from "styled-components";

const ProgressBarLabel = styled.div<{ mode: string; running: boolean }>`
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${({ running, mode }) =>
    !running ? '#6b7280' : mode === 'work' ? '#ef4444' : '#10b981'};
`;

function TimerLabel({ running, mode }: { running: boolean, mode: string }) {
    return (  
        <ProgressBarLabel mode={mode} running={running}>
         {!running ? 'Paused ⏸️' : mode === 'work' ? 'Stay Focused! 💪' : 'Take a Breather ☕'}
        </ProgressBarLabel>
    );
}

export default TimerLabel;