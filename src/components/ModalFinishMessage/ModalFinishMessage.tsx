import accuracyImage from '../../assets/img/accuracy.svg'
import speedImage from '../../assets/img/speed.svg'
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

  const accuracyVisual = accuracy ? accuracy : '---'
  const speedVisual = speed ? speed : '---'

  return (
    <Modal>
      <div className={styles.textContainer}>
        <p className={styles.mainTitle}>Наши поздравления!</p>
        <p className={styles.subtitle}>Ура! Вы попали по всем кнопкам!</p>
        <div className={styles.statsBlock}>
          <div className={styles.accuracy}>
            <div className={styles.accuracyTitle}>
              <img src={accuracyImage} alt="accuracy" width={'15px'} />
              <p>Точность печати:</p>
            </div>
            <p className={styles.value}>
              <span>{accuracyVisual}</span> %
            </p>
          </div>
          <div className={styles.speed}>
            <div className={styles.speedTitle}>
              <img src={speedImage} alt="speed" width={'22px'} />
              <p>Cкорость печати:</p>
            </div>
            <p className={styles.value}>
              <span>{speedVisual}</span> зн./мин
            </p>
          </div>
        </div>
      </div>
      <MyButton onClick={onClick}>Улучшить</MyButton>
    </Modal>
  )
}

export default ModalFinishMessage
