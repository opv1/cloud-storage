import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actionCreators from 'store/actions/actionCreators/index'
import ModalConfirmDelete from 'components/Modal/Internal/ModalConfirmDelete'
import ModalCreateFolder from 'components/Modal/Internal/ModalCreateFolder'

const Modal = () => {
  const { type } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  const onCloseModal = () => {
    dispatch(actionCreators.appBackdrop())
    dispatch(actionCreators.modalClose())
  }

  if (type === 'confirmDelete') {
    return <ModalConfirmDelete onCloseModal={onCloseModal} />
  }

  if (type === 'createFolder') {
    return <ModalCreateFolder onCloseModal={onCloseModal} />
  }
}

export default Modal
