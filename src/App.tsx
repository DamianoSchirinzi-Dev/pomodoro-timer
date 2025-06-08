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

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 1.8rem .8rem;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 700px;
  position: relative;
  z-index: 1;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  z-index: 2;
`;    

function App() {
  const { showTimer, mode, seconds, running, progress, start, pause, openTimer, closeTimer, reset,  } = usePomodoro();

  return (
    <>
      <GlobalStyle />
      <AnimatePresence mode="wait">
        {!showTimer && (
          <motion.button
            key="start-button"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => openTimer()}
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
