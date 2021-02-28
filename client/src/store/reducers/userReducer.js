import { USER_SET, USER_LOGIN, USER_LOGOUT } from 'store/constants'

const initialState = {
  token: null,
  user: null,
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SET:
      return {
        ...state,
        user: { ...payload },
      }
    case USER_LOGIN:
      return {
        ...state,
        token: payload.token,
        user: { ...payload.user },
      }
    case USER_LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
      }
    default:
      return state
  }
}

export default userReducer
