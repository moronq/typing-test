import { FC, useEffect } from 'react'
import accuracyImage from '../../assets/img/accuracy.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setAccuracy } from '../../store/slices/textSlice'
import { findPercent } from '../../utils/findPercent'
import styles from './Accuracy.module.scss'

interface IProps {
  totalAttemptCount: number
  correctAttemptCount: number
}

const Accuracy: FC<IProps> = ({ totalAttemptCount, correctAttemptCount }) => {
  const { text } = useAppSelector((state) => state.text)
  const dispatch = useAppDispatch()
  const accuracy = findPercent(correctAttemptCount, totalAttemptCount)
  useEffect(() => {
    if (correctAttemptCount === text.length) {
      dispatch(setAccuracy(accuracy))
    }
  }, [correctAttemptCount])
  const accuracyVisible =
    accuracy.toString() == 'NaN' ? 0 : accuracy === Infinity ? 0 : accuracy
  return (
    <div className={styles.accuracyContainer}>
      <p className={styles.accuracyText}>
        <img src={accuracyImage} alt="accuracy" width={'20px'} />
        ТОЧНОСТЬ
      </p>
      <p className={styles.accuracyPercent}>
        {accuracyVisible}
        <span>%</span>
      </p>
    </div>
  )
}

export default Accuracy
