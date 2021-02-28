import React from 'react'
import styled, { css } from 'styled-components'

const Icon = (props) => {
  return <IconStyles {...props} />
}

export default Icon

const IconStyles = styled.i`
  display: inline-block;

  ${(props) =>
    props.alertIcon &&
    css`
      cursor: pointer;
    `}

  ${(props) =>
    props.fileIconImageList &&
    css`
      margin: 1rem;
    `}

  ${(props) =>
    props.fileIconImageTable &&
    css`
      font-size: 9rem;
    `}

  ${(props) =>
    props.fileIconIconsList &&
    css`
      justify-self: center;
      margin: 0.5rem;
      font-size: 1.1rem;
      cursor: pointer;
    `}

  ${(props) =>
    props.modalIcon &&
    css`
      position: absolute;
      right: -1px;
      top: -3px;
      font-size: 2rem;
      cursor: pointer;
    `}

  ${(props) =>
    props.navbarIcon &&
    css`
      display: none;
      font-size: 1.5rem;
      color: #fff;

      @media ${(props) => props.theme.media.tablet} {
        display: inline-block;
      }
    `}

    ${(props) =>
    props.panelIcon &&
    css`
      margin: 0.3rem;
      font-size: 1.2rem;
      cursor: pointer;
    `}

  ${(props) =>
    props.panelIcon &&
    props.activeIcon &&
    css`
      color: ${(props) => props.theme.colors.primary};
    `}

  ${(props) =>
    props.searchIcon &&
    css`
      position: absolute;
      right: 11px;
      top: 7px;
      cursor: pointer;
    `}

  ${(props) =>
    props.sidedrawerIcon &&
    css`
      position: absolute;
      left: 30px;
      top: 18px;
      font-size: 1.5rem;
      color: #fff;
    `}
`
