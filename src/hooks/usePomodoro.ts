import { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import timerOpenSound from '../assets/sounds/gong1.mp3';
import timerCloseSound from '../assets/sounds/gong2.mp3';
import startSound from '../assets/sounds/start.mp3';
import pauseSound from '../assets/sounds/pause.mp3';
import resetSound from '../assets/sounds/reset.mp3';

export type PomodoroMode = 'work' | 'break';

const openHowl = new Howl({ src: [timerOpenSound] });
const closeHowl = new Howl({ src: [timerCloseSound] });
const startHowl = new Howl({ src: [startSound] });
const pauseHowl = new Howl({ src: [pauseSound] });
const resetHowl = new Howl({ src: [resetSound] });

export default function usePomodoro(workDuration = 15 * 60, breakDuration = 5 * 60) {
  const [showTimer, setShowTimer] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
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

  // Reset seconds if workDuration or breakDuration changes
  useEffect(() => {
    setSeconds(mode === 'work' ? workDuration : breakDuration);
  }, [workDuration, breakDuration, mode]);

  const openSettings = () => {
    openHowl.play();  
    setShowSettings(true);
  }

  const openTimer = () => {
    openHowl.play();
    setShowTimer(true); 
  }

  const start = () => {
    startHowl.play();   
    setRunning(true);
  }

  const pause = () => {
    pauseHowl.play();
    setRunning(false);
  };

  const reset = () => {
    resetHowl.play();
    setRunning(false);
    setSeconds(mode === 'work' ? workDuration : breakDuration);
  };

  const closeSettings = () => {
    closeHowl.play();  
    setShowSettings(false);
  }

  const closeTimer = () => {
    closeHowl.play();
    setShowTimer(false);
    reset();
  };



  return {
    showTimer,
    showSettings,
    mode,
    seconds,
    running,
    start,
    pause,
    openTimer,
    closeTimer,
    openSettings,
    closeSettings,
    reset,
    progress,
  };
}
