import { useState } from 'react'

import useInterval from './useInterval'

const useCountUp = (end: number) => {
  const [count, setCount] = useState(0)
  const countSlow = 6
  const countFast = end - countSlow
  const duration = 2000
  const slowDuration = 600
  const fastDuration = duration - slowDuration

  const counter = Math.ceil((countFast / fastDuration) * 1000) / 100

  const useFastCountUp = () => {
    useInterval(() => {
      if (count < countFast) {
        setCount((prev) => prev + counter)
      }
    }, 10)
  }
  const useSlowCountUp = () => {
    useInterval(() => {
      if (countFast <= count && count < end) {
        setCount((prev) => prev + 1)
      }
      if (count >= end) {
        setCount(end)
      }
    }, slowDuration / countSlow)
  }

  useFastCountUp()
  useSlowCountUp()

  return Math.floor(count)
}
export default useCountUp
