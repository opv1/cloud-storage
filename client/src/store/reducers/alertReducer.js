import { SHOW_ALERT, HIDE_ALERT } from 'store/constants'

const initialState = {
  alert: false,
  message: null,
}

const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ALERT:
      return {
        ...state,
        alert: true,
        message: payload,
      }
    case HIDE_ALERT:
      return {
        ...state,
        alert: false,
        message: null,
      }
    default:
      return state
  }
}

export default alertReducer
