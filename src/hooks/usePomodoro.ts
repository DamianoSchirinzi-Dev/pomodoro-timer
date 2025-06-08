import { useEffect, useRef, useState } from 'react';

export type PomodoroMode = 'work' | 'break';

export default function usePomodoro(workDuration = .15 * 60, breakDuration = .1 * 60) {
  const [mode, setMode] = useState<PomodoroMode>('work');
  const [seconds, setSeconds] = useState(workDuration);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const totalDuration = mode === 'work' ? workDuration : breakDuration;
  const progress = 1 - seconds / totalDuration;

  useEffect(() => {
    if (!running) return;
    intervalRef.current = window.setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current!);
  }, [running]);

  useEffect(() => {
    if (seconds < 0) return;
    if (seconds === 0) {
      setTimeout(() => {
        setMode((m) => (m === 'work' ? 'break' : 'work'));
        setSeconds(mode === 'work' ? breakDuration : workDuration);
      }, 100); // slight delay to allow UI update
    }
  }, [seconds, mode, workDuration, breakDuration]);

  const reset = () => {
    setRunning(false);
    setSeconds(mode === 'work' ? workDuration : breakDuration);
  };

  return {
    mode,
    seconds,
    running,
    start: () => setRunning(true),
    pause: () => setRunning(false),
    reset,
    progress,
  };
}
