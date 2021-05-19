import React, { useState } from 'react'
import styled from 'styled-components'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { Icon, Input, Button } from 'components/UI/index'

const ModalCreateFolder: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const { loading } = useTypeSelector((state) => state.app)
  const { createDir, closeModal } = useActions()

  return (
    <ModalStyles>
      <ModalHeader>
        <ModalTitle>Create new folder</ModalTitle>
        <Icon
          icon='modalIcon'
          className='fas fa-window-close'
          onClick={closeModal}
        />
      </ModalHeader>
      <ModalBlock>
        <Input
          input='modalInput'
          onChange={(event) => setValue(event.target.value)}
          type='text'
          value={value}
          name='folder'
          placeholder='Folder name'
          maxLength={10}
        />
        <Button
          button='modalButton'
          onClick={() => createDir(value)}
          name='Create'
          disabled={!value || loading}
        />
      </ModalBlock>
    </ModalStyles>
  )
}

export default ModalCreateFolder

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
  text-align: center;
`

const ModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
