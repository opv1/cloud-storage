import { LOGIN_USER, LOGOUT_USER, SET_AVATAR } from '../constants'

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
    case SET_AVATAR:
      return {
        ...state,
        user: { ...state.user, avatar: payload },
      }
    default:
      return state
  }
}

export default userReducer
