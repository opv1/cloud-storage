import axios from 'axios'
import { useStorage } from '../../hooks/useStorage'
import actionCreators from './actionCreators/index'

export const singupUser = (form) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/auth/singup', {
        ...form,
      })

      dispatch(actionCreators.alertShow(response.data.message))
    } catch (err) {
      dispatch(actionCreators.alertShow(err.response.data.message))
    } finally {
      dispatch(actionCreators.setLoading())
    }
  }
}

export const loginUser = (form) => {
  return async (dispatch) => {
    try {
      const { setItem } = useStorage()

      const response = await axios.post('/api/auth/login', {
        ...form,
      })

      dispatch(actionCreators.userLogin(response.data))

      setItem('cloudStorage', response.data)
    } catch (err) {
      dispatch(actionCreators.alertShow(err.response.data.message))
    } finally {
      dispatch(actionCreators.setLoading())
    }
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    const { removeItem } = useStorage()

    dispatch(actionCreators.userLogout())

    removeItem('cloudStorage')
  }
}
