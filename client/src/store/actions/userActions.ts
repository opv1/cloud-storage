import { Dispatch } from 'redux'
import axios from 'axios'
import actionCreators from 'store/actionCreators/index'
import { ls } from 'utils/localStorage'
import { FormSingupType, FormSinginType } from 'types'

export const authUser = () => async (dispatch: Dispatch) => {
  try {
    dispatch(actionCreators.appLoading())

    const data = ls.get()

    if (data && data.token) {
      const response = await axios.get('/api/auth/', {
        headers: { Authorization: `Bearer ${data.token}` },
      })

      dispatch(actionCreators.userSingin(response.data))

      ls.set(response.data)
    }
  } catch (err) {
    console.error(err)
    dispatch(actionCreators.alertShow(err.response.data.message))
  } finally {
    dispatch(actionCreators.appReady(true))
    dispatch(actionCreators.appLoading())
  }
}

export const singupUser =
  (form: FormSingupType) => async (dispatch: Dispatch) => {
    try {
      dispatch(actionCreators.appLoading())

      const response = await axios.post('/api/auth/singup', {
        ...form,
      })

      dispatch(actionCreators.alertShow(response.data.message))
    } catch (err) {
      console.error(err)
      dispatch(actionCreators.alertShow(err.response.data.message))
    } finally {
      dispatch(actionCreators.appLoading())
    }
  }

export const singinUser =
  (form: FormSinginType) => async (dispatch: Dispatch) => {
    try {
      dispatch(actionCreators.appLoading())

      const response = await axios.post('/api/auth/login', {
        ...form,
      })

      dispatch(actionCreators.userSingin(response.data))

      ls.set(response.data)
    } catch (err) {
      console.error(err)
      dispatch(actionCreators.alertShow(err.response.data.message))
    } finally {
      dispatch(actionCreators.appLoading())
    }
  }

export const singoutUser = () => (dispatch: Dispatch) => {
  dispatch(actionCreators.userLogout())

  ls.remove()
}
