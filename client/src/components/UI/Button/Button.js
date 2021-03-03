import React from 'react'
import styled, { css } from 'styled-components'

const Button = (props) => {
  return <ButtonStyles {...props}>{props.name}</ButtonStyles>
}

export default Button

const ButtonStyles = styled.button`
  outline: none;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  padding: 0.5rem;
  color: #fff;
  background: ${(props) => props.theme.colors.secondary};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    user-select: none;
  }

  ${(props) =>
    props.panelButton &&
    css`
      margin: 0.5rem;
    `}
`
