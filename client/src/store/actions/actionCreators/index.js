import * as alertActionCreators from 'store/actions/actionCreators/alert'
import * as appActionCreators from 'store/actions/actionCreators/app'
import * as fileActionCreators from 'store/actions/actionCreators/file'
import * as modalActionCreators from 'store/actions/actionCreators/modal'
import * as userActionCreators from 'store/actions/actionCreators/user'

// eslint-disable-next-line
export default {
  ...alertActionCreators,
  ...appActionCreators,
  ...fileActionCreators,
  ...modalActionCreators,
  ...userActionCreators,
}
