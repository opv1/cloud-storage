import { combineReducers } from 'redux'
import alertReducer from './alertReducer'
import appReducer from './appReducer'
import fileReducer from './fileReducer'
import userReducer from './userReducer'

export const rootReducer = combineReducers({
  alert: alertReducer,
  app: appReducer,
  file: fileReducer,
  user: userReducer,
})
