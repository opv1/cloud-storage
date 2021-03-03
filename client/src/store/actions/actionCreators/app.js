import {
  APP_READY,
  APP_LOADING,
  APP_BACKDROP,
  APP_SIDEDRAWER,
  APP_VIEW,
} from 'store/constants'

export const appReady = (ready) => ({
  type: APP_READY,
  payload: ready,
})

export const appLoading = () => ({
  type: APP_LOADING,
})

export const appBackdrop = () => ({
  type: APP_BACKDROP,
})

export const appSidedrawer = () => ({
  type: APP_SIDEDRAWER,
})

export const appView = (view) => ({
  type: APP_VIEW,
  payload: view,
})
