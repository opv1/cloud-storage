import { useCallback, useRef } from 'react'

export const useDebounce = (
  callback: (value: string) => void,
  delay: number
) => {
  const timer = useRef(setTimeout(() => {}, delay))

  const debounceCallback = useCallback(
    (value) => {
      if (timer.current) clearTimeout(timer.current)

      timer.current = setTimeout(() => {
        if (value) callback(value)
      }, delay)
    },
    // eslint-disable-next-line
    [callback, delay]
  )

  return debounceCallback
}
