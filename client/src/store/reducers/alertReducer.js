import { ALERT_SHOW, ALERT_HIDE } from 'store/constants'

const initialState = {
  alert: false,
  message: null,
}

const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALERT_SHOW:
      return {
        ...state,
        alert: true,
        message: payload,
      }
    case ALERT_HIDE:
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
