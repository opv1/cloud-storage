import * as alertActions from 'store/actions/alertActions'
import * as appActions from 'store/actions/appActions'
import * as fileActions from 'store/actions/fileActions'
import * as modalActions from 'store/actions/modalActions'
import * as userActions from 'store/actions/userActions'

// eslint-disable-next-line
export default {
  ...alertActions,
  ...appActions,
  ...fileActions,
  ...modalActions,
  ...userActions,
}
