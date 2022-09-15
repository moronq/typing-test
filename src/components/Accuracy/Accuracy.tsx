import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setAccuracy } from '../../store/slices/textSlice'

interface IProps {
  totalAttemptCount: number
  correctAttemptCount: number
}

const Accuracy: FC<IProps> = ({ totalAttemptCount, correctAttemptCount }) => {
  const { text } = useAppSelector((state) => state.text)
  const dispatch = useAppDispatch()
  const accuracy = Math.round((correctAttemptCount / totalAttemptCount) * 100)
  useEffect(() => {
    if (correctAttemptCount === text.length) {
      dispatch(setAccuracy(accuracy))
    }
  }, [correctAttemptCount])
  const accuracyVisible =
    accuracy.toString() == 'NaN' ? 0 : accuracy === Infinity ? 0 : accuracy
  return <div>{accuracyVisible}%</div>
}

export default Accuracy
