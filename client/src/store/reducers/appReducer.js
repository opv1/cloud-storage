import { SET_LOADING, SET_VIEW, SET_PROGRESS } from '../constants'

const initialState = {
  loading: false,
  view: 'list',
  progress: false,
}

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      }
    case SET_VIEW:
      return {
        ...state,
        view: payload,
      }
    case SET_PROGRESS:
      return {
        ...state,
        progress: !state.progress,
      }
    default:
      return state
  }
}

export default appReducer
