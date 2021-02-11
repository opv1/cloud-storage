import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../store/actions/index'
import actionCreators from '../../store/actions/actionCreators/index'
import { Input, Button } from '../UI/index'
import './Modal.scss'

const Modal = () => {
  const [value, setValue] = useState('')

  const { currentDir, file } = useSelector((state) => state.file)
  const { type } = useSelector((state) => state.modal)

  const dispatch = useDispatch()

  if (type === 'create') {
    return (
      <div className='modal'>
        <div className='modal__content'>
          <div className='modal__header'>
            <span className='modal__title'>Create new folder</span>
            <i
              className='fas fa-window-close'
              onClick={() => dispatch(actionCreators.closeModal())}
            ></i>
          </div>
          <div className='modal__block'>
            <Input
              className='modal__input'
              onChange={(e) => setValue(e.target.value)}
              value={value}
              name='folder'
              placeholder='Folder name'
            />
            <Button
              className='modal__button'
              onClick={() => dispatch(actions.createDir(currentDir, value))}
              name='Create'
              disabled={!value}
            />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'confirm') {
    return (
      <div className='modal'>
        <div className='modal__content'>
          <div className='modal__header'>
            <span className='modal__title'>Exactly remove?</span>
            <i
              className='fas fa-window-close'
              onClick={() => dispatch(actionCreators.closeModal())}
            ></i>
          </div>
          <div className='modal__block'>
            <Button
              className='modal__button'
              onClick={() => dispatch(actions.deleteFile(file))}
              name='Yep'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
