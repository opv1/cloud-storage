import { ModalAction, ModalActionTypes } from 'store/types/modal'

export const modalOpen = (type: string): ModalAction => ({
  type: ModalActionTypes.MODAL_OPEN,
  payload: type,
})

export const modalClose = (): ModalAction => ({
  type: ModalActionTypes.MODAL_CLOSE,
})
