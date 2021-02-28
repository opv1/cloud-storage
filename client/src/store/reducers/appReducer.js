import { APP_READY, APP_LOADING, APP_VIEW } from 'store/constants'

const initialState = {
  ready: false,
  loading: false,
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
