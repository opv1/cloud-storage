import { APP_READY, APP_LOADING, APP_VIEW } from 'store/constants'

export const appReady = (ready) => ({
  type: APP_READY,
  payload: ready,
})

export const appLoading = () => ({
  type: APP_LOADING,
})

export const appView = (view) => ({
  type: APP_VIEW,
  payload: view,
})
