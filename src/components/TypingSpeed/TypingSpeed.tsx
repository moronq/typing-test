import React, { FC } from 'react'

interface IProps {
  time: number
  total: number
}

const TypingSpeed: FC<IProps> = ({ time, total }) => {
  const speed = Math.round(total / time)
  let visualSpeed =
    speed.toString() == 'NaN' ? 0 : speed === Infinity ? 0 : speed
  return <div>{visualSpeed} зн./мин</div>
}

export default TypingSpeed
