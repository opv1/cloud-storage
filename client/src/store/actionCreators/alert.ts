import { AlertAction, AlertActionTypes } from 'store/types/alert'

export const alertShow = (message: string): AlertAction => ({
  type: AlertActionTypes.ALERT_SHOW,
  payload: message,
})

export const alertHide = (): AlertAction => ({
  type: AlertActionTypes.ALERT_HIDE,
})
