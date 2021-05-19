import * as alertActionCreators from 'store/actionCreators/alert'
import * as appActionCreators from 'store/actionCreators/app'
import * as fileActionCreators from 'store/actionCreators/file'
import * as modalActionCreators from 'store/actionCreators/modal'
import * as userActionCreators from 'store/actionCreators/user'

// eslint-disable-next-line
export default {
  ...alertActionCreators,
  ...appActionCreators,
  ...fileActionCreators,
  ...modalActionCreators,
  ...userActionCreators,
}
