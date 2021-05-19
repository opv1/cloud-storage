import React from 'react'
import { useTypeSelector } from 'hooks/useTypeSelector'
import ModalConfirmDelete from 'components/Modal/Internal/ModalConfirmDelete'
import ModalCreateFolder from 'components/Modal/Internal/ModalCreateFolder'

const Modal: React.FC = () => {
  const { type } = useTypeSelector((state) => state.modal)

  if (type === 'confirmDelete') {
    return <ModalConfirmDelete />
  } else {
    return <ModalCreateFolder />
  }
}

export default Modal
