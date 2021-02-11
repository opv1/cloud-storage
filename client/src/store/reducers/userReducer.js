import { LOGIN_USER, LOGOUT_USER } from '../constants'

const initialState = {
  token: null,
  user: null,
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        token: payload.token,
        user: { ...payload.user },
      }
    case LOGOUT_USER:
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
