export type FileType = {
  [key: string]: any
}

export type FileState = {
  currentDir: string | null
  stack: any[]
  file: FileType
  files: FileType[]
}

export enum FileActionTypes {
  FILE_CURRENT_DIR = 'SET_CURRENT_DIR',
  FILE_STACK = 'FILE_STACK',
  FILE_SET = 'FILE_SET',
  FILES_SET = 'FILES_SET',
}

interface IFileCurrentDirAction {
  type: FileActionTypes.FILE_CURRENT_DIR
  payload: string | null
}

interface IFileStackAction {
  type: FileActionTypes.FILE_STACK
  payload: string[]
}

interface IFileSetAction {
  type: FileActionTypes.FILE_SET
  payload: FileType
}

interface IFilesSetAction {
  type: FileActionTypes.FILES_SET
  payload: FileType[]
}

export type FileAction =
  | IFileCurrentDirAction
  | IFileStackAction
  | IFileSetAction
  | IFilesSetAction
