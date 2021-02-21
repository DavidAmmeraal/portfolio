import React from "react"
import { createGlobalStyle, keyframes } from "styled-components"

const gradientKeyframes = keyframes`
  from {
    background-size: 200vw 200vh;
  }
  to {
    background-size: 100vw 100vh;
  }
`;

const BodyStyle = createGlobalStyle`
  body {
    background: rgba(18,18,18,1);
    background-size: 100vw 100vh;
    animation: ${gradientKeyframes} 2s ease-in-out;
    background-attachment: fixed;
  }
`;


const Background = () => {
  return (
    <BodyStyle />
  );
}

export default Background;

