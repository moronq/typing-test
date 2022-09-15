import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { restart } from '../../store/slices/textSlice'
import Modal from '../UI/Modal/Modal'
import MyButton from '../UI/MyButton/MyButton'
import styles from './ModalFinishMessage.module.scss'

const ModalFinishMessage = () => {
  const { accuracy, speed } = useAppSelector((state) => state.text)
  const dispatch = useAppDispatch()
  const onClick = () => {
    dispatch(restart())
  }

  return (
    <Modal>
      <div className={styles.textContainer}>
        <p>Наши поздравления!</p>
        <p>Ура! С тобой еще не все потеряно!</p>
        <p>Точность печати:{accuracy} %</p>
        <p>Cкорость печати:{speed} зн./мин</p>
      </div>
      <MyButton onClick={onClick}>Улучшить</MyButton>
    </Modal>
  )
}

export default ModalFinishMessage
