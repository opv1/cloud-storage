import React from 'react'
import styled, { css } from 'styled-components'
import { IIconProps } from 'interfaces'

const Icon: React.FC<IIconProps> = (props) => {
  return <IconStyles {...props} />
}

export default Icon

const IconStyles = styled.i<{ icon: string; activeIcon?: boolean }>`
  display: inline-block;
  transition: opacity 0.2s;

  ${({ icon }) =>
    icon === 'alertIcon' &&
    css`
      cursor: pointer;
    `}

  ${({ icon }) =>
    icon === 'fileIconImageList' &&
    css`
      margin: 1rem;
    `}

  ${({ icon }) =>
    icon === 'fileIconImageTable' &&
    css`
      font-size: 9rem;
    `}

  ${({ icon }) =>
    icon === 'fileIconIconsList' &&
    css`
      justify-self: center;
      margin: 0.5rem;
      font-size: 1.1rem;
      cursor: pointer;
    `}

  ${({ icon }) =>
    icon === 'modalIcon' &&
    css`
      position: absolute;
      right: -33px;
      top: -36px;
      font-size: 2rem;
      cursor: pointer;
    `}

  ${({ icon }) =>
    icon === 'navbarIcon' &&
    css`
      display: none;
      font-size: 1.5rem;
      color: #fff;

      @media ${({ theme }) => theme.media.tablet} {
        display: inline-block;
      }
    `}

  ${({ icon }) =>
    icon === 'panelIcon' &&
    css`
      margin: 0.3rem;
      font-size: 1.2rem;
      cursor: pointer;
    `}

  ${({ icon, activeIcon }) =>
    icon === 'panelIcon' &&
    activeIcon &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}

  ${({ icon }) =>
    icon === 'searchIcon' &&
    css`
      position: absolute;
      right: 11px;
      top: 7px;
      cursor: pointer;
    `}

  ${({ icon }) =>
    icon === 'sidedrawerIcon' &&
    css`
      position: absolute;
      left: 30px;
      top: 18px;
      font-size: 1.5rem;
      color: #fff;
    `}
`
