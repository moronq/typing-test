import { useEffect, useState } from 'react'
import restartImage from '../../assets/img/restart.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchText } from '../../store/slices/textAction'
import { restart } from '../../store/slices/textSlice'
import Accuracy from '../Accuracy/Accuracy'
import ModalFinishMessage from '../ModalFinishMessage/ModalFinishMessage'
import ModalHelloMessage from '../ModalHelloMessage/ModalHelloMessage'
import ModalLanguageMessage from '../ModalLanguageMessage/ModalLanguageMessage'
import ModalUpperCaseMessage from '../ModalUpperCaseMessage/ModalUpperCaseMessage'
import TextArea from '../TextArea/TextArea'
import TypingSpeed from '../TypingSpeed/TypingSpeed'
import styles from './Certification.module.scss'

const Certification = () => {
  const dispatch = useAppDispatch()

  const { text, numberOfSymbol, reloaded, totalAttemptCounter } =
    useAppSelector((state) => state.text)

  const [isModalVisual, setIsModalVisual] = useState({
    helloModal: true,
    upperCaseModal: false,
    finishModal: false,
    languageModal: false,
  })

  useEffect(() => {
    if (reloaded) {
      dispatch(fetchText())
      setIsModalVisual({
        helloModal: true,
        upperCaseModal: false,
        finishModal: false,
        languageModal: false,
      })
    }
  }, [reloaded, dispatch])

  useEffect(() => {
    if (numberOfSymbol === text.length && text.length !== 0) {
      setIsModalVisual((prev) => ({ ...prev, finishModal: true }))
    }
  }, [numberOfSymbol, text.length])

  const onRestart = () => {
    dispatch(restart())
  }

  const modalStatus =
    isModalVisual.helloModal ||
    isModalVisual.upperCaseModal ||
    isModalVisual.finishModal ||
    isModalVisual.languageModal

  return (
    <main className={styles.mainContainer}>
      <div className={styles.taskAreaContainer}>
        <TextArea
          modalStatus={modalStatus}
          text={text}
          numberOfSymbol={numberOfSymbol}
          setIsModalVisual={setIsModalVisual}
        />
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
      {isModalVisual.helloModal && (
        <ModalHelloMessage setIsModalVisual={setIsModalVisual} />
      )}
      {isModalVisual.upperCaseModal && <ModalUpperCaseMessage />}
      {isModalVisual.languageModal && <ModalLanguageMessage />}
      {isModalVisual.finishModal && <ModalFinishMessage />}
    </main>
  )
}

export default Certification
