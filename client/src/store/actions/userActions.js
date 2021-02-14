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
