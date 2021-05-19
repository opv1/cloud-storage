export type AlertState = {
  alert: boolean
  message: string | null
}

export enum AlertActionTypes {
  ALERT_SHOW = 'ALERT_SHOW',
  ALERT_HIDE = 'ALERT_HIDE',
}

interface IAlertShowAction {
  type: AlertActionTypes.ALERT_SHOW
  payload: string
}

interface IAlertHideAction {
  type: AlertActionTypes.ALERT_HIDE
}

export type AlertAction = IAlertShowAction | IAlertHideAction
