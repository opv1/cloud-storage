import {
  SET_CURRENT_DIR,
  PUSH_STACK,
  POP_STACK,
  SET_FILE,
  ADD_FILE,
  DELETE_FILE,
  SET_FILES,
} from 'store/constants'

const initialState = {
  currentDir: null,
  stack: [],
  file: {},
  files: [],
}

const fileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_DIR:
      return {
        ...state,
        currentDir: payload,
      }
    case PUSH_STACK:
      return {
        ...state,
        stack: [...state.stack, payload],
      }
    case POP_STACK:
      return {
        ...state,
        stack: state.stack.pop(payload),
      }
    case SET_FILE:
      return {
        ...state,
        file: payload,
      }
    case ADD_FILE:
      return {
        ...state,
        files: [...state.files, payload],
      }
    case DELETE_FILE:
      return {
        ...state,
        files: [...state.files.filter((file) => file._id !== payload)],
      }
    case SET_FILES:
      return {
        ...state,
        files: payload,
      }
    default:
      return state
  }
}

export default fileReducer
