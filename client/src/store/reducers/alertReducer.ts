import { AlertState, AlertAction, AlertActionTypes } from 'store/types/alert'

const initialState: AlertState = {
  alert: false,
  message: null,
}

export const alertReducer = (
  state = initialState,
  action: AlertAction
): AlertState => {
  switch (action.type) {
    case AlertActionTypes.ALERT_SHOW:
      return {
        ...state,
        alert: true,
        message: action.payload,
      }
    case AlertActionTypes.ALERT_HIDE:
      return {
        ...state,
        alert: false,
        message: null,
      }
    default:
      return state
  }
}
