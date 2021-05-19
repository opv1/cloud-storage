import { Dispatch } from 'redux'
import actionCreators from 'store/actionCreators/index'

export const setView = (view: string) => (dispatch: Dispatch) => {
  dispatch(actionCreators.appView(view))
}

export const closeSidedrawer = () => (dispatch: Dispatch) => {
  dispatch(actionCreators.appBackdrop())
  dispatch(actionCreators.appSidedrawer())
}
