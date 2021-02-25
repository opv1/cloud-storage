import React from 'react'
import styled, { css } from 'styled-components'

const Label = (props) => {
  return <LabelStyles {...props}>{props.name}</LabelStyles>
}

export default Label

const LabelStyles = styled.label`
  margin-bottom: 0.3rem;

  ${(props) =>
    props.panelLabel &&
    css`
      padding: 0;
      width: 100%;
    `}

  ${(props) =>
    props.profileLabel &&
    css`
      margin: 0;
      font-size: 1.2rem;
    `}
`
