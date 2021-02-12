import { SET_LOADING, SET_VIEW, SET_PROGRESS } from '../../constants'

export const setLoading = () => ({
  type: SET_LOADING,
})

export const setView = (view) => ({
  type: SET_VIEW,
  payload: view,
})

export const setProgress = () => ({
  type: SET_PROGRESS,
})
