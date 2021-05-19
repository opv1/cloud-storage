import React from 'react'
import styled from 'styled-components'
import { IBackdropProps } from 'interfaces'

const Backdrop: React.FC<IBackdropProps> = ({ backdrop }) => {
  return <BackdropStyles data-attr={backdrop} />
}

export default Backdrop

const BackdropStyles = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`
