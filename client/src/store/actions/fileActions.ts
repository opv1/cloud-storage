import { Dispatch } from 'redux'
import axios from 'axios'
import { store } from 'store/index'
import actionCreators from 'store/actionCreators/index'
import { ls } from 'utils/localStorage'
import { FileType } from 'store/types/file'

export const getFiles =
  (dirId: string | null, sortType: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(actionCreators.appLoading())

      const data = ls.get()

      let url = `/api/file/`

      if (dirId) {
        url = `/api/file/?parent=${dirId}`
      }

      if (sortType) {
        url = `/api/file/?sort=${sortType}`
      }

      if (dirId && sortType) {
        url = `/api/file/?parent=${dirId}&sort=${sortType}`
      }

      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${data.token}` },
      })

      dispatch(actionCreators.filesSet(response.data))
    } catch (err) {
      console.error(err)
      dispatch(actionCreators.alertShow(err.response.data.message))
    } finally {
      dispatch(actionCreators.appLoading())
    }
  }

export const setFile = (file: FileType) => (dispatch: Dispatch) => {
  dispatch(actionCreators.fileSet(file))
}

export const createDir = (name: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(actionCreators.appLoading())

    const data = ls.get()
    const { currentDir, files } = store.getState().file

    const response = await axios.post(
      '/api/file/',
      { name, parent: currentDir, type: 'dir' },
      {
        headers: { Authorization: `Bearer ${data.token}` },
      }
    )

    const copyFiles = [...files, response.data]

    dispatch(actionCreators.filesSet(copyFiles))
  } catch (err) {
    console.error(err)
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.modalClose())
    dispatch(actionCreators.appBackdrop())
    dispatch(actionCreators.appLoading())
  }
}

export const openDir = (dirId: string) => (dispatch: Dispatch) => {
  const { currentDir, stack } = store.getState().file

  const copyStack = [...stack, currentDir]

  dispatch(actionCreators.filesSetStack(copyStack))
  dispatch(actionCreators.filesCurrentDir(dirId))
}

export const backDir = () => (dispatch: Dispatch) => {
  const { stack } = store.getState().file

  const copyStack = [...stack]
  const backDir = copyStack.pop()

  dispatch(actionCreators.filesSetStack(copyStack))
  dispatch(actionCreators.filesCurrentDir(backDir))
}

export const uploadFile = (file: any) => async (dispatch: Dispatch) => {
  try {
    const data = ls.get()
    const { currentDir, files } = store.getState().file

    const formData = new FormData()
    formData.append('file', file)

    if (currentDir) {
      formData.append('parent', currentDir)
    }

    const response = await axios.post('/api/file/upload', formData, {
      headers: { Authorization: `Bearer ${data.token}` },
      /*         onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent

          let percent = parseInt(Math.round(loaded * 100) / total)

          dispatch(actionCreators.setPercentage(percent))
        }, */
    })

    const copyFiles = [...files, response.data]

    dispatch(actionCreators.filesSet(copyFiles))
  } catch (err) {
    console.error(err)
    dispatch(actionCreators.alertShow(err.response.data.message))
  }
}

export const downloadFile = (file: FileType) => async (dispatch: Dispatch) => {
  try {
    const data = ls.get()

    const response = await fetch(`/api/file/download?id=${file._id}`, {
      headers: { Authorization: `Bearer ${data.token}` },
    })

    if (response.ok) {
      const blob = await response.blob()

      const downloadUrl = window.URL.createObjectURL(blob)

      const link = document.createElement('a')

      link.href = downloadUrl
      link.download = file.name

      document.body.appendChild(link)

      link.click()
      link.remove()
    }
  } catch (err) {
    console.error(err)
    dispatch(actionCreators.alertShow(err.response.data.message))
  }
}

export const deleteFile = () => async (dispatch: Dispatch) => {
  try {
    dispatch(actionCreators.appLoading())

    const data = ls.get()
    const { file, files } = store.getState().file

    const response = await axios.delete(`/api/file/?id=${file._id}`, {
      headers: { Authorization: `Bearer ${data.token}` },
    })

    const copyFiles = files.filter((f) => f._id !== file._id)

    dispatch(actionCreators.filesSet(copyFiles))
    dispatch(actionCreators.alertShow(response.data.message))
  } catch (err) {
    console.error(err)
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.modalClose())
    dispatch(actionCreators.appBackdrop())
    dispatch(actionCreators.appLoading())
  }
}

export const searchFile = (search: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(actionCreators.appLoading())

    const data = ls.get()

    const response = await axios.get(`/api/file/search?search=${search}`, {
      headers: { Authorization: `Bearer ${data.token}` },
    })

    dispatch(actionCreators.filesSet(response.data))
  } catch (err) {
    console.error(err)
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.appLoading())
  }
}

export const uploadAvatar = (file: any) => async (dispatch: Dispatch) => {
  try {
    const data = ls.get()

    const formData = new FormData()
    formData.append('file', file)

    const response = await axios.post('/api/file/avatar', formData, {
      headers: { Authorization: `Bearer ${data.token}` },
    })

    dispatch(actionCreators.userSet(response.data.user))
  } catch (err) {
    console.error(err)
    dispatch(actionCreators.alertShow(err.response.data.message))
  }
}

export const deleteAvatar = () => async (dispatch: Dispatch) => {
  try {
    const data = ls.get()

    const response = await axios.delete('/api/file/avatar', {
      headers: { Authorization: `Bearer ${data.token}` },
    })

    dispatch(actionCreators.userSet(response.data.user))
  } catch (err) {
    console.error(err)
    dispatch(actionCreators.alertShow(err.response.data.message))
  }
}
