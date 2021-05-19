import React from 'react'
import styled, { keyframes } from 'styled-components'

const Loader: React.FC = () => {
  return (
    <LoaderStyles>
      <LoaderContainer>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoaderContainer>
    </LoaderStyles>
  )
}

export default Loader

const loaderAnimation1 = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`

const loaderAnimation2 = keyframes`
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(24px, 0);
  }
`

const loaderAnimation3 = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
`

const LoaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
const LoaderContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    top: 33px;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    background: #000;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 8px;
      animation: ${loaderAnimation1} 0.6s infinite;
    }

    &:nth-child(2) {
      left: 8px;
      animation: ${loaderAnimation2} 0.6s infinite;
    }

    &:nth-child(3) {
      left: 32px;
      animation: ${loaderAnimation2} 0.6s infinite;
    }

    &:nth-child(4) {
      left: 56px;
      animation: ${loaderAnimation3} 0.6s infinite;
    }
  }
`
