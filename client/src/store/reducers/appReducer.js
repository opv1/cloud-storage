import {
  SET_LOADING,
  SET_VIEW,
  SET_PROGRESS,
  SET_PERCENTAGE,
} from 'store/constants'

const initialState = {
  loading: false,
  view: 'typeList',
  progress: false,
  percentage: 0,
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
    case SET_PERCENTAGE:
      return {
        ...state,
        percentage: payload,
      }
    default:
      return state
  }
}

export default appReducer
