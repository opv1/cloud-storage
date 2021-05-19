import { combineReducers } from 'redux'
import { alertReducer } from 'store/reducers/alertReducer'
import { appReducer } from 'store/reducers/appReducer'
import { fileReducer } from 'store/reducers/fileReducer'
import { modalReducer } from 'store/reducers/modalReducer'
import { userReducer } from 'store/reducers/userReducer'

export const rootReducer = combineReducers({
  alert: alertReducer,
  app: appReducer,
  file: fileReducer,
  modal: modalReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
