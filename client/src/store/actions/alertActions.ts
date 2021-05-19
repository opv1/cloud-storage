import { Dispatch } from 'redux'
import actionCreators from 'store/actionCreators/index'

export const closeAlert = () => (dispatch: Dispatch) => {
  dispatch(actionCreators.alertHide())
}
