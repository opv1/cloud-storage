import { combineReducers } from 'redux'
import alertReducer from './alertReducer'
import appReducer from './appReducer'
import fileReducer from './fileReducer'
import modalReducer from './modalReducer'
import userReducer from './userReducer'

export const rootReducer = combineReducers({
  alert: alertReducer,
  app: appReducer,
  file: fileReducer,
  modal: modalReducer,
  user: userReducer,
})
