import { LOGIN_USER, LOGOUT_USER, SET_AVATAR } from 'store/constants'

export const loginUser = (data) => ({
  type: LOGIN_USER,
  payload: data,
})

export const logoutUser = () => ({
  type: LOGOUT_USER,
})

export const setAvatar = (avatar) => ({
  type: SET_AVATAR,
  payload: avatar,
})
