import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import usePomodoro from './hooks/usePomodoro';
import Timer from './components/Timer';
import Controls from './components/Controls';
import ProgressBar from './components/ProgressBar';
import TimerLabel from './components/TimerLabel';

const AppContainer = styled.div`
  background-color: white;
  padding: 2em 1rem;
  border-radius: 40px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 350px;
`;

function App() {
  const { seconds, mode, running, progress, start, pause, reset,  } = usePomodoro();

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <TimerLabel running={running} mode={mode} />
        <Timer running={running} seconds={seconds} mode={mode} />
        <ProgressBar running={running} progress={progress} mode={mode} />
        <Controls running={running} onStart={start} onPause={pause} onReset={reset} />
      </AppContainer>
    </>
  );
}

export default App;
