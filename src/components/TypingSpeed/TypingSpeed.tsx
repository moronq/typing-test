import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import useTimer from '../../hooks/useTimer'
import { setSpeed } from '../../store/slices/textSlice'
import { convertSecondToMinute } from '../../utils/convertSecondToMinute'

const TypingSpeed: FC = () => {
  const { numberOfSymbol, text } = useAppSelector((state) => state.text)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (numberOfSymbol === text.length) {
      dispatch(setSpeed(speed))
    }
  }, [numberOfSymbol])
  const { timer } = useTimer(numberOfSymbol, text)
  const speed = Math.round(numberOfSymbol / convertSecondToMinute(timer))
  let visualSpeed =
    speed.toString() == 'NaN' ? 0 : speed === Infinity ? 0 : speed
  return <div>{visualSpeed} зн./мин</div>
}

export default TypingSpeed
