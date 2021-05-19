import { AppAction, AppActionTypes } from 'store/types/app'

export const appReady = (ready: boolean): AppAction => ({
  type: AppActionTypes.APP_READY,
  payload: ready,
})

export const appLoading = (): AppAction => ({
  type: AppActionTypes.APP_LOADING,
})

export const appBackdrop = (): AppAction => ({
  type: AppActionTypes.APP_BACKDROP,
})

export const appSidedrawer = (): AppAction => ({
  type: AppActionTypes.APP_SIDEDRAWER,
})

export const appView = (view: string): AppAction => ({
  type: AppActionTypes.APP_VIEW,
  payload: view,
})
