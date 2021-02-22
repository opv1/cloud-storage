import { SET_MODAL, CLOSE_MODAL } from 'store/constants'

const initialState = {
  modal: false,
  type: null,
}

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MODAL:
      return {
        ...state,
        modal: true,
        type: payload,
      }
    case CLOSE_MODAL:
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
