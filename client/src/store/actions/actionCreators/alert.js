import { ALERT_SHOW, ALERT_HIDE } from '../../constants'

export const alertShow = (message) => ({
  type: ALERT_SHOW,
  payload: message,
})

export const alertHide = () => ({
  type: ALERT_HIDE,
})
