import { Dispatch } from 'redux'
import actionCreators from 'store/actionCreators/index'

export const closeModal = () => (dispatch: Dispatch) => {
  dispatch(actionCreators.appBackdrop())
  dispatch(actionCreators.modalClose())
}

export const openModal = (type: string) => (dispatch: Dispatch) => {
  dispatch(actionCreators.appBackdrop())
  dispatch(actionCreators.modalOpen(type))
}
