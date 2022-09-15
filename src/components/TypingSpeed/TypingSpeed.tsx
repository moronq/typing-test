import React, { FC } from 'react'
import { useAppSelector } from '../../hooks/redux'
import useTimer from '../../hooks/useTimer'
import { convertSecondToMinute } from '../../utils/convertSecondToMinute'

const TypingSpeed: FC = () => {
  const { numberOfSymbol, text } = useAppSelector((state) => state.text)
  const { timer } = useTimer(numberOfSymbol, text)
  const speed = Math.round(numberOfSymbol / convertSecondToMinute(timer))
  let visualSpeed =
    speed.toString() == 'NaN' ? 0 : speed === Infinity ? 0 : speed
  return <div>{visualSpeed} зн./мин</div>
}

export default TypingSpeed
