import { ModalState, ModalAction, ModalActionTypes } from 'store/types/modal'

const initialState: ModalState = {
  modal: false,
  type: null,
}

export const modalReducer = (
  state = initialState,
  action: ModalAction
): ModalState => {
  switch (action.type) {
    case ModalActionTypes.MODAL_OPEN:
      return {
        ...state,
        modal: true,
        type: action.payload,
      }
    case ModalActionTypes.MODAL_CLOSE:
      return {
        ...state,
        modal: false,
        type: null,
      }
    default:
      return state
  }
}
