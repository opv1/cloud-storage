import { LOGIN_USER, LOGOUT_USER } from '../../constants'

export const loginUser = (data) => ({
  type: LOGIN_USER,
  payload: data,
})

export const logoutUser = () => ({
  type: LOGOUT_USER,
})
