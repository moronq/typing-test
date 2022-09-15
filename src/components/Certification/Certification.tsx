import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchText } from '../../store/slices/textAction'
import { convertSecondToMinute } from '../../utils/convertSecondToMinute'
import Accuracy from '../Accuracy/Accuracy'
import Input from '../Input/Input'
import TypingSpeed from '../TypingSpeed/TypingSpeed'
import styles from './Certification.module.scss'

const Certification = () => {
  const dispatch = useAppDispatch()

  const [numberOfSymbol, setNumberOfSymbol] = useState(0)
  const [timer, setTimer] = useState(0)
  const [totalAttemptCounter, setTotalAttemptCounter] = useState(0)
  const [timerId, setTimerId] = useState<null | NodeJS.Timer>(null)
  const [value, setValue] = useState('')

  useEffect(() => {
    if (numberOfSymbol === 1) {
      const timer = setInterval(() => setTimer((prev) => prev + 1), 1000)
      setTimerId(timer)
    } else if (numberOfSymbol === text.length && timerId) {
      clearInterval(timerId)
    }
  }, [numberOfSymbol])

  useEffect(() => {
    dispatch(fetchText())
  }, [])

  const { text } = useAppSelector((state) => state.text)
  const currentSymbol = text[numberOfSymbol]

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value
    if (target === currentSymbol) {
      setNumberOfSymbol((prev) => prev + 1)
    }
    setTotalAttemptCounter((prev) => prev + 1)
  }

  return (
    <main className={styles.mainContainer}>
      <Input value={value} onChange={onChange} />
      <div>
        <div>
          {text.map((el, index) => (
            <span
              className={index === numberOfSymbol ? styles.active : ''}
              key={index}
            >
              {el}
            </span>
          ))}
        </div>
        <div>
          <TypingSpeed
            time={convertSecondToMinute(timer)}
            total={numberOfSymbol}
          />
          <Accuracy
            correctAttemptCount={numberOfSymbol}
            totalAttemptCount={totalAttemptCounter}
          />
        </div>
      </div>
    </main>
  )
}

export default Certification
