import Button from './Button';

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
