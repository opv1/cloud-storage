import React from 'react'
import styled, { css } from 'styled-components'
import { IButtonProps } from 'interfaces'

const Button: React.FC<IButtonProps> = (props) => {
  return <ButtonStyles {...props}>{props.name}</ButtonStyles>
}

export default Button

const ButtonStyles = styled.button<{ button: string }>`
  outline: none;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  padding: 0.5rem;
  color: #fff;
  background: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    user-select: none;
  }

  ${({ button }) =>
    button === 'panelButton' &&
    css`
      margin: 0.5rem;
    `}
`
