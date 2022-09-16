import React, { useEffect, useState } from 'react'
import restartImage from '../../assets/img/restart.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchText } from '../../store/slices/textAction'
import {
  incrementNumberOfSymbol,
  restart,
  setIncorrectSymbol,
  setTotalAttemptCounter,
} from '../../store/slices/textSlice'
import { checkLanguage } from '../../utils/checkLanguage'
import { upperCaseCheck } from '../../utils/upperCaseCheck'
import Accuracy from '../Accuracy/Accuracy'
import Input from '../Input/Input'
import ModalFinishMessage from '../ModalFinishMessage/ModalFinishMessage'
import ModalHelloMessage from '../ModalHelloMessage/ModalHelloMessage'
import ModalLanguageMessage from '../ModalLanguageMessage/ModalLanguageMessage'
import ModalUpperCaseMessage from '../ModalUpperCaseMessage/ModalUpperCaseMessage'
import Text from '../Text/Text'
import TypingSpeed from '../TypingSpeed/TypingSpeed'
import styles from './Certification.module.scss'

const Certification = () => {
  const dispatch = useAppDispatch()

  const {
    text,
    numberOfSymbol,
    reloaded,
    incorrectSymbol,
    totalAttemptCounter,
  } = useAppSelector((state) => state.text)

  const [helloModal, setHelloModal] = useState(true)
  const [upperCaseModal, setUpperCaseModal] = useState(false)
  const [finishModal, setFinishModal] = useState(false)
  const [languageModal, setLanguageModale] = useState(false)

  useEffect(() => {
    if (reloaded) {
      dispatch(fetchText())
      setHelloModal(true)
      setUpperCaseModal(false)
      setFinishModal(false)
      setLanguageModale(false)
    }
  }, [reloaded, dispatch])

  useEffect(() => {
    if (numberOfSymbol === text.length && text.length !== 0) {
      setFinishModal(true)
    }
  }, [numberOfSymbol])

  const onRestart = () => {
    dispatch(restart())
  }

  const currentSymbol = text[numberOfSymbol]

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value
    if (
      numberOfSymbol === 0 &&
      target !== currentSymbol &&
      upperCaseCheck(target, currentSymbol)
    ) {
      setUpperCaseModal(true)
    }
    if (checkLanguage(target)) {
      setLanguageModale(true)
    }
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

  const modalStatus =
    helloModal || upperCaseModal || finishModal || languageModal

  return (
    <main className={styles.mainContainer}>
      {modalStatus || <Input onChange={onChange} />}
      <div className={styles.taskAreaContainer}>
        {text.length === 0 ? (
          <p className={styles.loader}>Loading...</p>
        ) : (
          <Text
            incorrectSymbol={incorrectSymbol}
            numberOfSymbol={numberOfSymbol}
            text={text}
          />
        )}
        <div className={styles.statsBlock}>
          <TypingSpeed />
          <Accuracy
            correctAttemptCount={numberOfSymbol}
            totalAttemptCount={totalAttemptCounter}
          />
          <button className={styles.restartButton} onClick={onRestart}>
            <img src={restartImage} alt="restart" width={'20px'} />
            Заново
          </button>
        </div>
      </div>
      {helloModal && <ModalHelloMessage setHelloModal={setHelloModal} />}
      {upperCaseModal && <ModalUpperCaseMessage />}
      {languageModal && <ModalLanguageMessage />}
      {finishModal && <ModalFinishMessage />}
    </main>
  )
}

export default Certification
