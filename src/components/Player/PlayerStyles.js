import styled, { keyframes } from 'styled-components';

const fadeInDown = keyframes`
    0% {
      opacity: 0;
      transform: translateY(-500px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
`;

const PlayerDiv = styled.div`
    width: 100%;
    height: 100%;
    animation-name: ${fadeInDown};
    animation-duration: 1s;
    animation-timing-function: linear;
`;

export {
    PlayerDiv
};