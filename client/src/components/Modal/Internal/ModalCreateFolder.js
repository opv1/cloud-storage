import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import actions from 'store/actions/index'
import actionCreators from 'store/actions/actionCreators/index'
import { Icon, Input, Button } from 'components/UI/index'

const ModalCreateFolder = ({ onCloseModal }) => {
  const [value, setValue] = useState('')
  const { loading } = useSelector((state) => state.app)
  const { currentDir } = useSelector((state) => state.file)
  const dispatch = useDispatch()

  const onCreateFolder = () => {
    dispatch(actionCreators.appBackdrop())
    dispatch(actions.createDir(currentDir, value))
  }

  return (
    <ModalStyles>
      <ModalHeader>
        <ModalTitle>Create new folder</ModalTitle>
        <Icon
          modalIcon
          className='fas fa-window-close'
          onClick={onCloseModal}
        />
      </ModalHeader>
      <ModalBlock>
        <Input
          modalInput
          onChange={(e) => setValue(e.target.value)}
          type='text'
          value={value}
          name='folder'
          placeholder='Folder name'
          maxLength='10'
        />
        <Button
          modalButton
          onClick={onCreateFolder}
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
`

const ModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
