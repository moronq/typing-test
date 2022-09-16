import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { restart } from '../../store/slices/textSlice'
import Modal from '../UI/Modal/Modal'
import MyButton from '../UI/MyButton/MyButton'
import styles from './ModalFinishMessage.module.scss'
import speedImage from '../../assets/img/speed.svg'
import accuracyImage from '../../assets/img/accuracy.svg'

const ModalFinishMessage = () => {
  const { accuracy, speed } = useAppSelector((state) => state.text)
  const dispatch = useAppDispatch()
  const onClick = () => {
    dispatch(restart())
  }

  return (
    <Modal>
      <div className={styles.textContainer}>
        <p className={styles.mainTitle}>Наши поздравления!</p>
        <p className={styles.subtitle}>Ура! Вы попали по всем кнопкам!</p>
        <div className={styles.statsBlock}>
          <div className={styles.accuracy}>
            <div className={styles.accuracyTitle}>
              <img src={accuracyImage} alt="accuracy" />
              <p>Точность печати:</p>
            </div>
            <p className={styles.value}>
              <span>{accuracy}</span> %
            </p>
          </div>
          <div className={styles.speed}>
            <div className={styles.speedTitle}>
              <img src={speedImage} alt="speed" />
              <p>Cкорость печати:</p>
            </div>
            <p className={styles.value}>
              <span>{speed}</span> зн./мин
            </p>
          </div>
        </div>
      </div>
      <MyButton onClick={onClick}>Улучшить</MyButton>
    </Modal>
  )
}

export default ModalFinishMessage
