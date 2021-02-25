import { useState } from 'react'

const nameStorage = 'cloud-storage'

export const useLocalStorage = () => {
  const [object, setObject] = useState({ token: null, user: null })

  const setStorage = (data) => {
    setObject(data)

    localStorage.setItem(nameStorage, JSON.stringify(data))
  }

  const getStorage = () => {
    const data = localStorage.getItem(nameStorage)

    if (data !== null) return JSON.parse(data)
  }

  const removeStorage = () => {
    localStorage.removeItem(nameStorage)
  }

  return { object, setStorage, getStorage, removeStorage }
}
