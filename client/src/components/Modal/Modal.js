import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actionCreators from 'store/actions/actionCreators/index'
import ModalConfirmDelete from 'components/Modal/Internal/ModalConfirmDelete'
import ModalCreateFolder from 'components/Modal/Internal/ModalCreateFolder'

const Modal = () => {
  const { type } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  const handlerClick = (e) => {
    if (e.target.classList.contains('modal')) {
      dispatch(actionCreators.closeModal())
    }
  }

  if (type === 'confirmDelete') {
    return <ModalConfirmDelete handlerClick={handlerClick} />
  }

  if (type === 'createFolder') {
    return <ModalCreateFolder handlerClick={handlerClick} />
  }
}

export default Modal
