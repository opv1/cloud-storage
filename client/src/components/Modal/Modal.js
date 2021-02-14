import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actionCreators from '../../store/actions/actionCreators/index'
import ModalConfirmDelete from './Internal/ModalConfirmDelete'
import ModalCreateFolder from './Internal/ModalCreateFolder'
import './Modal.scss'

const Modal = () => {
  const { loading } = useSelector((state) => state.app)
  const { type } = useSelector((state) => state.modal)

  const dispatch = useDispatch()

  const handlerClick = (e) => {
    if (e.target.classList.contains('modal')) {
      dispatch(actionCreators.closeModal())
    }
  }

  if (type === 'confirmDelete') {
    return <ModalConfirmDelete handlerClick={handlerClick} loading={loading} />
  }

  if (type === 'createFolder') {
    return <ModalCreateFolder handlerClick={handlerClick} loading={loading} />
  }
}

export default Modal
