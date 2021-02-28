import { MODAL_OPEN, MODAL_CLOSE } from 'store/constants'

const initialState = {
  modal: false,
  type: null,
}

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MODAL_OPEN:
      return {
        ...state,
        modal: true,
        type: payload,
      }
    case MODAL_CLOSE:
      return {
        ...state,
        modal: false,
        type: null,
      }
    default:
      return state
  }
}

export default modalReducer
