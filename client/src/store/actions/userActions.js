import axios from 'axios'
import actionCreators from 'store/actions/actionCreators/index'
import { ls } from 'utils/localStorage'

export const singupUser = (form) => {
  return async (dispatch) => {
    try {
      dispatch(actionCreators.appLoading())

      const response = await axios.post('/api/auth/singup', {
        ...form,
      })

      dispatch(actionCreators.alertShow(response.data.message))
    } catch (err) {
      console.log(err)
      dispatch(actionCreators.alertShow(err.response.data.message))
    } finally {
      dispatch(actionCreators.appLoading())
    }
  }
}

export const loginUser = (form) => {
  return async (dispatch) => {
    try {
      dispatch(actionCreators.appLoading())

      const response = await axios.post('/api/auth/login', {
        ...form,
      })

      dispatch(actionCreators.userLogin(response.data))

      ls.set(response.data)
    } catch (err) {
      console.log(err)
      dispatch(actionCreators.alertShow(err.response.data.message))
    } finally {
      dispatch(actionCreators.appLoading())
    }
  }
}

export const authUser = () => {
  return async (dispatch) => {
    try {
      dispatch(actionCreators.appLoading())

      const data = ls.get()

      if (data && data.token) {
        const response = await axios.get('/api/auth/', {
          headers: { Authorization: `Bearer ${data.token}` },
        })

        dispatch(actionCreators.userLogin(response.data))

        ls.set(response.data)
      }
    } catch (err) {
      console.log(err)
      dispatch(actionCreators.alertShow(err.response.data.message))
    } finally {
      dispatch(actionCreators.appReady(true))
      dispatch(actionCreators.appLoading())
    }
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(actionCreators.userLogout())

    ls.remove()
  }
}
