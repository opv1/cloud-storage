import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../store/actions/index'
import actionCreators from '../../../store/actions/actionCreators/index'
import { Input, Button, Icon } from '../../UI/index'

const ModalCreateFolder = ({ handlerClick, loading }) => {
  const [value, setValue] = useState('')

  const { currentDir } = useSelector((state) => state.file)

  const dispatch = useDispatch()

  return (
    <div className='modal' onClick={handlerClick}>
      <div className='modal__content'>
        <div className='modal__header'>
          <span className='modal__title'>Create new folder</span>
          <Icon
            className='fas fa-window-close'
            onClick={() => dispatch(actionCreators.closeModal())}
          />
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
            disabled={!value || loading}
          />
        </div>
      </div>
    </div>
  )
}

export default ModalCreateFolder
