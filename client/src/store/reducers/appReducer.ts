import { AppState, AppAction, AppActionTypes } from 'store/types/app'

const initialState: AppState = {
  ready: false,
  loading: false,
  backdrop: false,
  sidedrawer: false,
  view: 'list',
  progress: false,
  percentage: 0,
}

export const appReducer = (
  state = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case AppActionTypes.APP_READY:
      return {
        ...state,
        ready: action.payload,
      }
    case AppActionTypes.APP_LOADING:
      return {
        ...state,
        loading: !state.loading,
      }
    case AppActionTypes.APP_BACKDROP:
      return {
        ...state,
        backdrop: !state.backdrop,
      }
    case AppActionTypes.APP_SIDEDRAWER:
      return {
        ...state,
        sidedrawer: !state.sidedrawer,
      }
    case AppActionTypes.APP_VIEW:
      return {
        ...state,
        view: action.payload,
      }
    default:
      return state
  }
}
