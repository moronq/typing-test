import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchText } from '../../store/slices/textAction'
import {
  incrementNumberOfSymbol,
  setIncorrectSymbol,
  setTotalAttemptCounter,
} from '../../store/slices/textSlice'
import Accuracy from '../Accuracy/Accuracy'
import Input from '../Input/Input'
import Text from '../Text/Text'
import TypingSpeed from '../TypingSpeed/TypingSpeed'
import styles from './Certification.module.scss'

const Certification = () => {
  const dispatch = useAppDispatch()

  const { text, numberOfSymbol, incorrectSymbol, totalAttemptCounter } =
    useAppSelector((state) => state.text)

  useEffect(() => {
    dispatch(fetchText())
  }, [])

  const currentSymbol = text[numberOfSymbol]

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value
    if (target === currentSymbol) {
      dispatch(incrementNumberOfSymbol())
      dispatch(setIncorrectSymbol(null))
      dispatch(setTotalAttemptCounter())
    } else if (target !== currentSymbol && incorrectSymbol) {
    } else if (target !== currentSymbol) {
      dispatch(setIncorrectSymbol(numberOfSymbol))
      dispatch(setTotalAttemptCounter())
    }
  }

  return (
    <main className={styles.mainContainer}>
      <Input onChange={onChange} />
      <div className={styles.taskAreaContainer}>
        <Text
          incorrectSymbol={incorrectSymbol}
          numberOfSymbol={numberOfSymbol}
          text={text}
        />
        <div className={styles.statsBlock}>
          <div className={styles.typingSpeedContainer}>
            <TypingSpeed />
          </div>
          <div>
            <Accuracy
              correctAttemptCount={numberOfSymbol}
              totalAttemptCount={totalAttemptCounter}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Certification
