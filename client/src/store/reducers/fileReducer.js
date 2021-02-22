import {
  SET_CURRENT_DIR,
  SET_FILES,
  SET_FILE,
  ADD_FILE,
  DELETE_FILE,
  PUSH_STACK,
  POP_STACK,
} from 'store/constants'

const initialState = {
  currentDir: null,
  files: [],
  file: {},
  stack: [],
}

const fileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_DIR:
      return {
        ...state,
        currentDir: payload,
      }
    case SET_FILES:
      return {
        ...state,
        files: payload,
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
    default:
      return state
  }
}

export default fileReducer
