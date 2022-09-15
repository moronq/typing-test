import React, { useEffect, useState } from 'react'

const useTimer: (
  numberOfSymbol: number,
  text: string[]
) => { timer: number } = (numberOfSymbol, text) => {
  const [timer, setTimer] = useState(0)
  const [timerId, setTimerId] = useState<null | NodeJS.Timer>(null)
  useEffect(() => {
    if (numberOfSymbol === 1) {
      const timer = setInterval(() => setTimer((prev) => prev + 1), 1000)
      setTimerId(timer)
    } else if (numberOfSymbol === text.length && timerId) {
      clearInterval(timerId)
    }
  }, [numberOfSymbol])
  return {
    timer,
  }
}

export default useTimer
