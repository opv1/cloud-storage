import { MODAL_OPEN, MODAL_CLOSE } from 'store/constants'

export const modalOpen = (type) => ({
  type: MODAL_OPEN,
  payload: type,
})

export const modalClose = () => ({
  type: MODAL_CLOSE,
})
