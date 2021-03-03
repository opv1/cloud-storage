import axios from 'axios'
import actionCreators from 'store/actions/actionCreators/index'
import { ls } from 'utils/localStorage'

export const getFiles = (dirId, sortType) => {
  return async (dispatch) => {
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
      console.log(err)
      dispatch(actionCreators.alertShow(err.response.data.message))
    } finally {
      dispatch(actionCreators.appLoading())
    }
  }
}

export const createDir = (dirId, name) => {
  return async (dispatch) => {
    try {
      dispatch(actionCreators.appLoading())

      const data = ls.get()

      const response = await axios.post(
        '/api/file/',
        { name, parent: dirId, type: 'dir' },
        {
          headers: { Authorization: `Bearer ${data.token}` },
        }
      )

      dispatch(actionCreators.fileAdd(response.data))
    } catch (err) {
      console.log(err)
      dispatch(actionCreators.alertShow(err.response.data.message))
    } finally {
      dispatch(actionCreators.modalClose())
      dispatch(actionCreators.appLoading())
    }
  }
}

export const uploadFile = (dirId, file) => {
  return async (dispatch) => {
    try {
      const data = ls.get()

      const formData = new FormData()
      formData.append('file', file)

      if (dirId) {
        formData.append('parent', dirId)
      }

      const response = await axios.post('/api/file/upload', formData, {
        headers: { Authorization: `Bearer ${data.token}` },
        /*         onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent

          let percent = parseInt(Math.round(loaded * 100) / total)

          dispatch(actionCreators.setPercentage(percent))
        }, */
      })

      dispatch(actionCreators.fileAdd(response.data))
    } catch (err) {
      console.log(err)
      dispatch(actionCreators.alertShow(err.response.data.message))
    }
  }
}

export const uploadAvatar = (file) => {
  return async (dispatch) => {
    try {
      const data = ls.get()

      const formData = new FormData()
      formData.append('file', file)

      const response = await axios.post('/api/file/avatar', formData, {
        headers: { Authorization: `Bearer ${data.token}` },
      })

      dispatch(actionCreators.userSet(response.data.user))

      // ls.set()
    } catch (err) {
      console.log(err)
      dispatch(actionCreators.alertShow(err.response.data.message))
    }
  }
}

export const downloadFile = (file) => {
  return async (dispatch) => {
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
      console.log(err)
      dispatch(actionCreators.alertShow(err.response.data.message))
    }
  }
}

export const deleteFile = (file) => {
  return async (dispatch) => {
    try {
      dispatch(actionCreators.appLoading())

      const data = ls.get()

      const response = await axios.delete(`/api/file/?id=${file._id}`, {
        headers: { Authorization: `Bearer ${data.token}` },
      })

      dispatch(actionCreators.fileDelete(file))

      dispatch(actionCreators.alertShow(response.data.message))
    } catch (err) {
      console.log(err)
      dispatch(actionCreators.alertShow(err.response.data.message))
    } finally {
      dispatch(actionCreators.modalClose())
      dispatch(actionCreators.appLoading())
    }
  }
}

export const deleteAvatar = () => {
  return async (dispatch) => {
    try {
      const data = ls.get()

      const response = await axios.delete('/api/file/avatar', {
        headers: { Authorization: `Bearer ${data.token}` },
      })

      dispatch(actionCreators.userSet(response.data.user))

      // ls.set()
    } catch (err) {
      console.log(err)
      dispatch(actionCreators.alertShow(err.response.data.message))
    }
  }
}

export const searchFile = (search) => {
  return async (dispatch) => {
    try {
      dispatch(actionCreators.appLoading())

      const data = ls.get()

      const response = await axios.get(`/api/file/search?search=${search}`, {
        headers: { Authorization: `Bearer ${data.token}` },
      })

      dispatch(actionCreators.filesSet(response.data))
    } catch (err) {
      console.log(err)
      dispatch(actionCreators.alertShow(err.response.data.message))
    } finally {
      dispatch(actionCreators.appLoading())
    }
  }
}
