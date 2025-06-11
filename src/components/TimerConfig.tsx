import styled from "styled-components";
import Button from "./Button";
import Header from "./Header";

type TimerConfigProps = {
  workInput: number;
  setWorkInput: (value: number) => void;
  breakInput: number;
  setBreakInput: (value: number) => void;
  setCustomWork: (value: number) => void;
  setCustomBreak: (value: number) => void;
  openTimer: () => void;
  closeSettings: () => void;
};

const StyledInputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 16px;
  padding: 1.4rem 2.5rem;
  min-width: 220px;
  max-width: 98vw;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 1.4rem 2.3rem;
    min-width: 0;
    max-width: 100vw;
  }
`;

const StyledLabel = styled.label`
  font-weight: 500;
  color: #1e293b;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 0.5rem;
  gap: 0.4rem;
  @media (max-width: 600px) {
    font-size: 1rem;
    gap: 0.2rem;
  }
`;

const StyledSlider = styled.input`
  width: 100%;
  margin-top: 6px;
  accent-color: #2563eb;
  height: 4px;
  border-radius: 2px;
  background: rgb(2, 53, 155);
  outline: none;
  transition: accent-color 0.2s;
  touch-action: pan-x;
  @media (max-width: 600px) {
    height: 3px;
    margin-top: 2px;
  }
`;

function TimerConfig({
  workInput,
  setWorkInput,
  breakInput,
  setBreakInput,
  setCustomWork,
  setCustomBreak,
  openTimer,
  closeSettings,
}: TimerConfigProps) {
  return (
    <>
      <Header>Settings</Header>
      <StyledInputSection>
        <StyledLabel>
          Work (min):
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ minWidth: 32, fontWeight: 600, color: '#2563eb' }}>{workInput}</span>
            <StyledSlider
              type="range"
              min={1}
              max={120}
              value={workInput}
              onChange={e => setWorkInput(Number(e.target.value))}
            />
          </div>
        </StyledLabel>
        <StyledLabel>
          Break (min):
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ minWidth: 32, fontWeight: 600, color: '#059669' }}>{breakInput}</span>
            <StyledSlider
              type="range"
              min={1}
              max={60}
              value={breakInput}
              onChange={e => setBreakInput(Number(e.target.value))}
              style={{ accentColor: '#059669' }}
            />
          </div>
        </StyledLabel>
      </StyledInputSection>
      <div
        style={{
          display: "flex",
          gap: "1.2rem",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button
          onClick={() => {
            setCustomWork(workInput * 60);
            setCustomBreak(breakInput * 60);
            openTimer();
          }}
        >
          Start Timer
        </Button>
        <Button onClick={() => closeSettings()}>Close Settings</Button>
      </div>
    </>
  );
}

export default TimerConfig;
