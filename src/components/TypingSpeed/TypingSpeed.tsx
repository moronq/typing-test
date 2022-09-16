import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import useTimer from '../../hooks/useTimer'
import { setSpeed } from '../../store/slices/textSlice'
import { convertSecondToMinute } from '../../utils/convertSecondToMinute'
import speedImage from '../../assets/img/speed.svg'
import styles from './TypingSpeed.module.scss'

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
  return (
    <div className={styles.speedContainer}>
      <p className={styles.speedText}>
        <img src={speedImage} alt="speed" width={'24px'} />
        СКОРОСТЬ
      </p>
      <p className={styles.speedValue}>
        {visualSpeed}
        <span> ЗН./МИН</span>
      </p>
    </div>
  )
}

export default TypingSpeed
