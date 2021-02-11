import { SET_LOADING, SET_MODAL } from '../constants'

const initialState = {
  loading: false,
  modal: false,
}

const appReducer = (state = initialState, { type }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      }
    case SET_MODAL:
      return {
        ...state,
        modal: !state.modal,
      }
    default:
      return state
  }
}

export default appReducer
