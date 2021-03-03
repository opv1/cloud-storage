import {
  APP_READY,
  APP_LOADING,
  APP_BACKDROP,
  APP_SIDEDRAWER,
  APP_VIEW,
} from 'store/constants'

const initialState = {
  ready: false,
  loading: false,
  backdrop: false,
  sidedrawer: false,
  view: 'list',
  progress: false,
  percentage: 0,
}

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_READY:
      return {
        ...state,
        ready: payload,
      }
    case APP_LOADING:
      return {
        ...state,
        loading: !state.loading,
      }
    case APP_BACKDROP:
      return {
        ...state,
        backdrop: !state.backdrop,
      }
    case APP_SIDEDRAWER:
      return {
        ...state,
        sidedrawer: !state.sidedrawer,
      }
    case APP_VIEW:
      return {
        ...state,
        view: payload,
      }
    default:
      return state
  }
}

export default appReducer
