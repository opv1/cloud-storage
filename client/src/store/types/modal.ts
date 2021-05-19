export type ModalState = {
  modal: boolean
  type: string | null
}

export enum ModalActionTypes {
  MODAL_OPEN = 'MODAL_OPEN',
  MODAL_CLOSE = 'MODAL_CLOSE',
}

interface IModalOpenAction {
  type: ModalActionTypes.MODAL_OPEN
  payload: string
}

interface IModalCloseAction {
  type: ModalActionTypes.MODAL_CLOSE
}

export type ModalAction = IModalOpenAction | IModalCloseAction
