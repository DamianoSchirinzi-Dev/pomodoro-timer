import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import usePomodoro from './hooks/usePomodoro';
import Timer from './components/Timer';
import Controls from './components/Controls';
import ProgressBar from './components/ProgressBar';
import TimerLabel from './components/TimerLabel';
import BackgroundCharacter from './components/BackgroundCharacter';
import ReturnButton from './components/ReturnButton';
import { useState } from 'react';
import TimerConfig from './components/TimerConfig';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 2rem 1.4rem;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 320px;
  max-width: 98vw;
  width: 100%;
  position: relative;
  z-index: 1;
  margin: 0 auto;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1.2rem 0.5rem;
    min-width: 0;
    max-width: 100vw;
  }

  @media (max-width: 600px) {
    padding: .8rem 0.3rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  z-index: 2;
  width: 100%;
  min-width: 0;
`;    

function App() {
  // Local state for settings
  const [workInput, setWorkInput] = useState(25);
  const [breakInput, setBreakInput] = useState(5);
  const [customWork, setCustomWork] = useState(25 * 60);
  const [customBreak, setCustomBreak] = useState(5 * 60);

  const { showSettings, showTimer, mode, seconds, running, progress, 
    start, pause, openTimer, closeTimer, openSettings, closeSettings, reset } = usePomodoro(customWork, customBreak);

  return (
    <>
      <GlobalStyle />
      <AnimatePresence mode="wait">
        {!showSettings && (
          <motion.button
            key="start-button"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => openSettings()}
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: 'none',
              background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
              color: 'white',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 2,
            }}
          >
            Focus
          </motion.button>
        )}

        {showSettings && !showTimer && (
          <motion.div
            key="settings-ui"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AppContainer>
              <MainContent>
                <TimerConfig 
                  workInput={workInput} 
                  setWorkInput={setWorkInput} 
                  breakInput={breakInput} 
                  setBreakInput={setBreakInput}
                  setCustomWork={(val) => setCustomWork(val)}
                  setCustomBreak={(val) => setCustomBreak(val)}
                  openTimer={() => {
                    setCustomWork(workInput * 60);
                    setCustomBreak(breakInput * 60);
                    setTimeout(() => openTimer(), 0); // ensure state is updated before opening timer
                  }}
                  closeSettings={closeSettings}
                />
              </MainContent>
            </AppContainer>
          </motion.div>
        )} 

        {showTimer && (
          <motion.div
            key="timer-ui"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AppContainer>
              <BackgroundCharacter />
              <MainContent>
                <TimerLabel running={running} mode={mode} />
                <Timer running={running} seconds={seconds} mode={mode} />
                <ProgressBar progress={progress} mode={mode} />
                <Controls running={running} onStart={start} onPause={pause} onReset={reset} />
                <ReturnButton reset={reset} setShowTimer={() => closeTimer()} />
              </MainContent>
            </AppContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
