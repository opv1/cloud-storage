import { SET_MODAL, CLOSE_MODAL } from '../../constants'

export const setModal = (type) => ({
  type: SET_MODAL,
  payload: type,
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
})
