export type UserDataType = {
  token: string | null
  user: UserType
}

export type UserType = {
  [key: string]: any
}

export type UserState = {
  token: string | null
  user: UserType
}

export enum UserActionTypes {
  USER_SET = 'USER_SET',
  USER_SINGIN = 'USER_SINGIN',
  USER_SINGOUT = 'USER_SINGOUT',
}

interface IUserSetAction {
  type: UserActionTypes.USER_SET
  payload: UserType
}

interface IUserSinginAction {
  type: UserActionTypes.USER_SINGIN
  payload: UserState
}

interface IUserSingoutAction {
  type: UserActionTypes.USER_SINGOUT
}

export type UserAction = IUserSetAction | IUserSinginAction | IUserSingoutAction
