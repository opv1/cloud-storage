import axios from 'axios'
import { useStorage } from '../../hooks/useStorage'
import actionCreators from './actionCreators/index'

export const singupUser = (form) => {
  return async (dispatch) => {
    try {
      dispatch(actionCreators.setLoading())

      const response = await axios.post('/api/auth/singup', {
        ...form,
      })

      dispatch(actionCreators.showAlert(response.data.message))
    } catch (err) {
      console.log(err)
      dispatch(actionCreators.showAlert(err.response.data.message))
    } finally {
      dispatch(actionCreators.setLoading())
    }
  }
}

export const loginUser = (form) => {
  return async (dispatch) => {
    try {
      dispatch(actionCreators.setLoading())

      const { setItem } = useStorage()

      const response = await axios.post('/api/auth/login', {
        ...form,
      })

      dispatch(actionCreators.loginUser(response.data))

      setItem('cloudStorage', response.data)
    } catch (err) {
      console.log(err)
      dispatch(actionCreators.showAlert(err.response.data.message))
    } finally {
      dispatch(actionCreators.setLoading())
    }
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    const { removeItem } = useStorage()

    dispatch(actionCreators.logoutUser())

    removeItem('cloudStorage')
  }
}

export const uploadAvatar = (file) => {
  return async (dispatch) => {
    try {
      const { setItem, getItem } = useStorage()

      const data = getItem('cloudStorage')

      const formData = new FormData()

      formData.append('file', file)

      const response = await axios.post('/api/file/avatar', formData, {
        headers: { Authorization: `Bearer ${data.token}` },
      })

      dispatch(actionCreators.setAvatar(response.data.user.avatar))

      data.user = response.data.user

      setItem('cloudStorage', data)
    } catch (err) {
      console.log(err)
      dispatch(actionCreators.showAlert(err.response.data.message))
    }
  }
}

export const deleteAvatar = () => {
  return async (dispatch) => {
    try {
      const { setItem, getItem } = useStorage()

      const data = getItem('cloudStorage')

      const response = await axios.delete('/api/file/avatar', {
        headers: { Authorization: `Bearer ${data.token}` },
      })

      dispatch(actionCreators.setAvatar(response.data.user.avatar))

      data.user = response.data.user

      setItem('cloudStorage', data)
    } catch (err) {
      console.log(err)
      dispatch(actionCreators.showAlert(err.response.data.message))
    }
  }
}
