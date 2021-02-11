import { SET_LOADING } from '../constants'

const initialState = {
  loading: false,
}

const appReducer = (state = initialState, { type }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      }

    default:
      return state
  }
}

export default appReducer
