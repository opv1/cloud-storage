import React from 'react'
import styled, { css } from 'styled-components'
import { IInputProps } from 'interfaces'

const Input: React.FC<IInputProps> = (props) => {
  return <InputStyles {...props} />
}

export default Input

const InputStyles = styled.input<{ input: string }>`
  outline: none;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  padding: 0.5rem;
  text-align: center;
  transition: background-color 0.2s;

  &:focus {
    background: #eee;
  }

  ${({ input }) =>
    input === 'authInput' &&
    css`
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    `}

  ${({ input }) =>
    input === 'modalInput' &&
    css`
      margin-bottom: 1rem;
    `}

  ${({ input }) =>
    input === 'panelInput' &&
    css`
      display: none;
    `}

  ${({ input }) =>
    input === 'profileInput' &&
    css`
      display: none;
    `}

  ${({ input }) =>
    input === 'searchInput' &&
    css`
      padding: 5px;
      text-align: left;
    `}
`
