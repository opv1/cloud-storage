import {
  SET_LOADING,
  SET_VIEW,
  SET_PROGRESS,
  SET_PERCENTAGE,
} from 'store/constants'

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

export const setPercentage = (percent) => ({
  type: SET_PERCENTAGE,
  payload: percent,
})
