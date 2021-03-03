import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import actions from 'store/actions/index'
import actionCreators from 'store/actions/actionCreators/index'
import { Icon, Button } from 'components/UI/index'

const ModalConfirmDelete = ({ onCloseModal }) => {
  const { loading } = useSelector((state) => state.app)
  const { file } = useSelector((state) => state.file)
  const dispatch = useDispatch()

  const onConfirmDelete = () => {
    dispatch(actionCreators.appBackdrop())
    dispatch(actions.deleteFile(file))
  }

  return (
    <ModalStyles>
      <ModalHeader>
        <ModalTitle>Exactly remove?</ModalTitle>
        <Icon
          modalIcon
          className='fas fa-window-close'
          onClick={onCloseModal}
        />
      </ModalHeader>
      <ModalBlock>
        <Button
          modalButton
          onClick={onConfirmDelete}
          name='Yep'
          disabled={loading}
        />
      </ModalBlock>
    </ModalStyles>
  )
}

export default ModalConfirmDelete

const ModalStyles = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 300;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 2rem;
  max-width: 300px;
  background: #fff;
  transform: translate(-50%, -50%);
`

const ModalHeader = styled.div`
  position: relative;
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
