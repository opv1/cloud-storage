import * as alertActionCreators from './alert'
import * as appActionCreators from './app'
import * as fileActionCreators from './file'
import * as modalActionCreators from './modal'
import * as userActionCreators from './user'

// eslint-disable-next-line
export default {
  ...alertActionCreators,
  ...appActionCreators,
  ...fileActionCreators,
  ...modalActionCreators,
  ...userActionCreators,
}
