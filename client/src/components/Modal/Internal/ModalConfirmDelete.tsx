import React from 'react'
import styled from 'styled-components'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { Icon, Button } from 'components/UI/index'

const ModalConfirmDelete: React.FC = () => {
  const { loading } = useTypeSelector((state) => state.app)
  const { deleteFile, closeModal } = useActions()

  return (
    <ModalStyles>
      <ModalHeader>
        <ModalTitle>Exactly remove?</ModalTitle>
        <Icon
          icon='modalIcon'
          className='fas fa-window-close'
          onClick={closeModal}
        />
      </ModalHeader>
      <ModalBlock>
        <Button
          button='modalButton'
          onClick={deleteFile}
          name='Yep!'
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
