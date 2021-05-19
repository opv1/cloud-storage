import {
  UserDataType,
  UserType,
  UserAction,
  UserActionTypes,
} from 'store/types/user'

export const userSet = (user: UserType): UserAction => ({
  type: UserActionTypes.USER_SET,
  payload: user,
})

export const userSingin = (data: UserDataType): UserAction => ({
  type: UserActionTypes.USER_SINGIN,
  payload: data,
})

export const userLogout = (): UserAction => ({
  type: UserActionTypes.USER_SINGOUT,
})
