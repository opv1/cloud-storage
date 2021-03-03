import React from 'react'
import styled, { css } from 'styled-components'

const Input = (props) => {
  return <InputStyles {...props} />
}

export default Input

const InputStyles = styled.input`
  outline: none;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  padding: 0.5rem;
  text-align: center;
  transition: background-color 0.2s;

  &:focus {
    background: #eee;
  }

  ${(props) =>
    props.authInput &&
    css`
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    `}

  ${(props) =>
    props.modalInput &&
    css`
      margin-bottom: 1rem;
    `}

  ${(props) =>
    props.panelInput &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.profileInput &&
    css`
      width: 250px;
    `}

    ${(props) =>
    props.searchInput &&
    css`
      padding: 5px;
      text-align: left;
    `}
`
