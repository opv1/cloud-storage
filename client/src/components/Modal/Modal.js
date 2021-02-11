import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../store/actions/index'
import actionCreators from '../../store/actions/actionCreators/index'
import { Input, Button } from '../UI/index'
import './Modal.scss'

const Modal = () => {
  const [value, setValue] = useState('')

  const { currentDir } = useSelector((state) => state.file)

  const dispatch = useDispatch()

  return (
    <div className='modal'>
      <div className='modal__content'>
        <div className='modal__header'>
          <span className='modal__title'>Create new folder</span>
          <i
            className='fas fa-window-close'
            onClick={() => dispatch(actionCreators.setModal())}
          ></i>
        </div>
        <div className='modal__block'>
          <Input
            onChange={(e) => setValue(e.target.value)}
            id='folder'
            value={value}
            name='folder'
            placeholder='Folder name'
          />
          <Button
            onClick={() => dispatch(actions.createDir(currentDir, value))}
            name='Create'
            disabled={!value}
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
