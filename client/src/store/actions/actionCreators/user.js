import { USER_SET, USER_LOGIN, USER_LOGOUT } from 'store/constants'

export const userSet = (user) => ({
  type: USER_SET,
  payload: user,
})

export const userLogin = (data) => ({
  type: USER_LOGIN,
  payload: data,
})

export const userLogout = () => ({
  type: USER_LOGOUT,
})
