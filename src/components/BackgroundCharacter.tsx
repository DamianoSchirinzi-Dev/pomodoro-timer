import Lottie from 'lottie-react';
import animationData from '../assets/animation/devworking.json';
import styled from 'styled-components';

const LargeLottie = styled.div`
  width: 350px;
  height: auto;
  opacity: 0.9;
  pointer-events: none;
  z-index: 0;
  align-self: flex-start;
`;

export default function BackgroundCharacter() {
  return (
    <LargeLottie>
      <Lottie animationData={animationData} loop autoplay />
    </LargeLottie>
  );
}
