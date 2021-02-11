import { USER_LOGIN, USER_LOGOUT } from '../../constants'

export const userLogin = (data) => ({
  type: USER_LOGIN,
  payload: data,
})

export const userLogout = () => ({
  type: USER_LOGOUT,
})
