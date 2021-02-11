import { SHOW_ALERT, HIDE_ALERT } from '../../constants'

export const showAlert = (message) => ({
  type: SHOW_ALERT,
  payload: message,
})

export const hideAlert = () => ({
  type: HIDE_ALERT,
})
