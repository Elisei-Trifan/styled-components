import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const rotateButton = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform:rotate(360deg)
}
`

const StyledButton = styled.button`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  align-self: ${({ self }) => self || 'stretch'};
  transition: transform 0.3s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    animation: ${rotateButton} 1s infinite linear;
  }

  ${(props) =>
    props.prymary &&
    css`
      color: ${(props) => props.color || 'white'};
      background: ${(props) => props.background || 'white'};
    `}
  ${(props) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || 'white'};
      border: 1px solid ${(props) => props.color || 'white'};
      background: transparent;
    `}
`

const LargeButton = styled(StyledButton)`
  font-size: 90px;
`

const Button = (props) => {
  return <StyledButton {...props} />
}

export default Button
