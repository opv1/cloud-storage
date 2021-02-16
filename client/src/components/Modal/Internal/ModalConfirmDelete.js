import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../store/actions/index'
import actionCreators from '../../../store/actions/actionCreators/index'
import { Icon, Button } from '../../UI/index'

const ModalConfirmDelete = ({ handlerClick, loading }) => {
  const { file } = useSelector((state) => state.file)

  const dispatch = useDispatch()

  return (
    <div className='modal' onClick={handlerClick}>
      <div className='modal__container'>
        <div className='modal__header'>
          <span className='modal__title'>Exactly remove?</span>
          <Icon
            className='modal__icon fas fa-window-close'
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
