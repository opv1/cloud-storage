import React from 'react'
import styled, { css } from 'styled-components'
import { ILabelProps } from 'interfaces'

const Label: React.FC<ILabelProps> = (props) => {
  return <LabelStyles {...props}>{props.name}</LabelStyles>
}

export default Label

const LabelStyles = styled.label<{ label: string }>`
  margin-bottom: 0.3rem;

  ${({ label }) =>
    label === 'panelLabel' &&
    css`
      margin: 0.5rem;
      outline: none;
      border: 1px solid #e3e3e3;
      border-radius: 5px;
      padding: 0.5rem;
      color: #fff;
      background: ${({ theme }) => theme.colors.secondary};
      cursor: pointer;
    `}

  ${({ label }) =>
    label === 'profileLabel' &&
    css`
      margin: 0;
      outline: none;
      border: 1px solid #e3e3e3;
      border-radius: 5px;
      padding: 0.5rem;
      color: #fff;
      background: ${({ theme }) => theme.colors.secondary};
      cursor: pointer;
    `}
`
