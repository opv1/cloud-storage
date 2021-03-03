import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import actionCreators from 'store/actions/actionCreators/index'

const Backdrop = (props) => {
  const dispatch = useDispatch()

  const handlerClick = (e) => {
    if (e.target.getAttribute('data-attr') === 'modalBackdrop') {
      dispatch(actionCreators.appBackdrop())
      dispatch(actionCreators.modalClose())
    }

    if (e.target.getAttribute('data-attr') === 'sidedrawerBackdrop') {
      dispatch(actionCreators.appBackdrop())
      dispatch(actionCreators.appSidedrawer())
    }
  }

  return (
    <BackdropStyles
      data-attr={props.modal || props.sidedrawer}
      onClick={handlerClick}
    />
  )
}

export default Backdrop

const BackdropStyles = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`
