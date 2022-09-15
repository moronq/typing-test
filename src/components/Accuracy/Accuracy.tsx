import React, { FC } from 'react'

interface IProps {
  totalAttemptCount: number
  correctAttemptCount: number
}

const Accuracy: FC<IProps> = ({ totalAttemptCount, correctAttemptCount }) => {
  const accuracy = Math.round((correctAttemptCount / totalAttemptCount) * 100)
  const accuracyVisible =
    accuracy.toString() == 'NaN' ? 0 : accuracy === Infinity ? 0 : accuracy
  return <div>{accuracyVisible}%</div>
}

export default Accuracy
