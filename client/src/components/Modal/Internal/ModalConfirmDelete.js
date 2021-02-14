import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../store/actions/index'
import actionCreators from '../../../store/actions/actionCreators/index'
import { Button, Icon } from '../../UI/index'

const ModalConfirmDelete = ({ handlerClick, loading }) => {
  const { file } = useSelector((state) => state.file)

  const dispatch = useDispatch()

  return (
    <div className='modal' onClick={handlerClick}>
      <div className='modal__content'>
        <div className='modal__header'>
          <span className='modal__title'>Exactly remove?</span>
          <Icon
            className='fas fa-window-close'
            onClick={() => dispatch(actionCreators.closeModal())}
          />
        </div>
        <div className='modal__block'>
          <Button
            className='modal__button'
            onClick={() => dispatch(actions.deleteFile(file))}
            name='Yep'
            disabled={loading}
          />
        </div>
      </div>
    </div>
  )
}

export default ModalConfirmDelete
