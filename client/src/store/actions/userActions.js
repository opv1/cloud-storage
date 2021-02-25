import axios from 'axios'
import actionCreators from 'store/actions/actionCreators/index'

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

      const response = await axios.post('/api/auth/login', {
        ...form,
      })

      dispatch(actionCreators.loginUser(response.data))

      localStorage.setItem('cloud-storage', JSON.stringify(response.data))
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
    dispatch(actionCreators.logoutUser())
  }
}

export const uploadAvatar = (object, file) => {
  return async (dispatch) => {
    try {
      const formData = new FormData()

      formData.append('file', file)

      const response = await axios.post('/api/file/avatar', formData, {
        headers: { Authorization: `Bearer ${object.token}` },
      })

      dispatch(actionCreators.setAvatar(response.data.user.avatar))

      object.user = response.data.user

      localStorage.setItem('cloud-storage', object)
    } catch (err) {
      console.log(err)
      dispatch(actionCreators.showAlert(err.response.data.message))
    }
  }
}

export const deleteAvatar = (object) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete('/api/file/avatar', {
        headers: { Authorization: `Bearer ${object.token}` },
      })

      dispatch(actionCreators.setAvatar(response.data.user.avatar))

      object.user = response.data.user

      localStorage.setItem('cloud-storage', object)
    } catch (err) {
      console.log(err)
      dispatch(actionCreators.showAlert(err.response.data.message))
    }
  }
}
