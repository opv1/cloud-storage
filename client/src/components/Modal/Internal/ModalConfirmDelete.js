import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import actions from 'store/actions/index'
import actionCreators from 'store/actions/actionCreators/index'
import { Icon, Button } from 'components/UI/index'

const ModalConfirmDelete = ({ handlerClick }) => {
  const { loading } = useSelector((state) => state.app)
  const { file } = useSelector((state) => state.file)
  const dispatch = useDispatch()

  return (
    <ModalStyles data-attr='modal' onClick={handlerClick}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Exactly remove?</ModalTitle>
          <Icon
            modalIcon
            className='fas fa-window-close'
            onClick={() => dispatch(actionCreators.modalClose())}
          />
        </ModalHeader>
        <ModalBlock>
          <Button
            secondaryColor
            modalButton
            onClick={() => dispatch(actions.deleteFile(file))}
            name='Yep'
            disabled={loading}
          />
        </ModalBlock>
      </ModalContainer>
    </ModalStyles>
  )
}

export default ModalConfirmDelete

const ModalStyles = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`

const ModalContainer = styled.div`
  position: relative;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 2rem;
  max-width: 300px;
  background-color: #fff;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`

const ModalTitle = styled.span`
  font-size: 1.5rem;
`

const ModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
