export type AppState = {
  ready: boolean
  loading: boolean
  backdrop: boolean
  sidedrawer: boolean
  view: string
  progress: boolean
  percentage: number
}

export enum AppActionTypes {
  APP_READY = 'APP_READY',
  APP_LOADING = 'APP_LOADING',
  APP_BACKDROP = 'APP_BACKDROP',
  APP_SIDEDRAWER = 'APP_SIDEDRAWER',
  APP_VIEW = 'APP_VIEW',
}

interface IAppReadyAction {
  type: AppActionTypes.APP_READY
  payload: boolean
}

interface IAppLoadingAction {
  type: AppActionTypes.APP_LOADING
}

interface IAppBackdropAction {
  type: AppActionTypes.APP_BACKDROP
}

interface IAppSidedrawerAction {
  type: AppActionTypes.APP_SIDEDRAWER
}

interface IAppViewAction {
  type: AppActionTypes.APP_VIEW
  payload: string
}

export type AppAction =
  | IAppReadyAction
  | IAppLoadingAction
  | IAppBackdropAction
  | IAppSidedrawerAction
  | IAppViewAction
