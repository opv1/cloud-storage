import axios from 'axios'
import { useStorage } from '../../hooks/useStorage'
import actionCreators from './actionCreators/index'

export const getFiles = (dirId, sortType) => {
  return async (dispatch) => {
    try {
      dispatch(actionCreators.setLoading())

      const { getItem } = useStorage()

      const data = getItem('cloudStorage')

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

      dispatch(actionCreators.setFiles(response.data))
    } catch (err) {
      dispatch(actionCreators.showAlert(err.response.data.message))
    } finally {
      dispatch(actionCreators.setLoading())
    }
  }
}

export const createDir = (dirId, name) => {
  return async (dispatch) => {
    try {
      const { getItem } = useStorage()

      const data = getItem('cloudStorage')

      const response = await axios.post(
        '/api/file/',
        { name, parent: dirId, type: 'dir' },
        {
          headers: { Authorization: `Bearer ${data.token}` },
        }
      )

      dispatch(actionCreators.addFile(response.data))
    } catch (err) {
      dispatch(actionCreators.showAlert(err.response.data.message))
    } finally {
      dispatch(actionCreators.closeModal())
    }
  }
}

export const uploadFile = (dirId, file) => {
  return async (dispatch) => {
    try {
      const { getItem } = useStorage()

      const data = getItem('cloudStorage')

      const formData = new FormData()

      formData.append('file', file)

      if (dirId) {
        formData.append('parent', dirId)
      }

      const uploadFile = { name: file.name, progress: 0 }

      const response = await axios.post('/api/file/upload', formData, {
        headers: { Authorization: `Bearer ${data.token}` },
        onUploadProgress: (progressEvent) => {
          const totalLength = progressEvent.lengthComputable
            ? progressEvent.total
            : progressEvent.target.getResponseHeader('content-length') ||
              progressEvent.target.getResponseHeader(
                'x-decompressed-content-length'
              )

          if (totalLength) {
            uploadFile.progress = Math.round(
              (progressEvent.loaded * 100) / totalLength
            )

            console.log(uploadFile)
            /* dispatch(changeUploadFile(uploadFile)) */
          }
        },
      })

      console.log(response)

      dispatch(actionCreators.addFile(response.data))
    } catch (err) {
      dispatch(actionCreators.showAlert(err.response.data.message))
    }
  }
}

export const downloadFile = (file) => {
  return async (dispatch) => {
    try {
      const { getItem } = useStorage()

      const data = getItem('cloudStorage')

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
      dispatch(actionCreators.showAlert(err.response.data.message))
    }
  }
}

export const deleteFile = (file) => {
  return async (dispatch) => {
    try {
      const { getItem } = useStorage()

      const data = getItem('cloudStorage')

      const response = await axios.delete(`/api/file/?id=${file._id}`, {
        headers: { Authorization: `Bearer ${data.token}` },
      })

      dispatch(actionCreators.deleteFile(file._id))

      dispatch(actionCreators.showAlert(response.data.message))
    } catch (err) {
      dispatch(actionCreators.showAlert(err.response.data.message))
    } finally {
      dispatch(actionCreators.closeModal())
    }
  }
}

export const searchFile = (search) => {
  return async (dispatch) => {
    try {
      dispatch(actionCreators.setLoading())

      const { getItem } = useStorage()

      const data = getItem('cloudStorage')

      const response = await axios.get(`/api/file/search?search=${search}`, {
        headers: { Authorization: `Bearer ${data.token}` },
      })

      dispatch(actionCreators.setFiles(response.data))
    } catch (err) {
      dispatch(actionCreators.showAlert(err.response.data.message))
    } finally {
      dispatch(actionCreators.setLoading())
    }
  }
}
