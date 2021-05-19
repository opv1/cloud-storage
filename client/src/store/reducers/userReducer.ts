import { UserState, UserAction, UserActionTypes } from 'store/types/user'

const initialState: UserState = {
  token: null,
  user: {},
}

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.USER_SET:
      return {
        ...state,
        user: { ...action.payload },
      }
    case UserActionTypes.USER_SINGIN:
      return {
        ...state,
        token: action.payload.token,
        user: { ...action.payload.user },
      }
    case UserActionTypes.USER_SINGOUT:
      return {
        ...state,
        token: null,
        user: {},
      }
    default:
      return state
  }
}
