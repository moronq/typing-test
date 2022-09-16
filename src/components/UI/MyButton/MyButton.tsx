import React, { FC, useRef } from 'react'
import styles from './MyButton.module.scss'

interface IProps {
  children: string
  onClick: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLButtonElement>
  ) => void
}

const MyButton: FC<IProps> = ({ children, onClick }) => {
  const ref = useRef<HTMLButtonElement>(null)

  const onClickHandler = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    if (onClick) {
      onClick(e)
    }
  }
  return (
    <button
      autoFocus
      ref={ref}
      className={styles.myButton}
      onClick={(e) => onClickHandler(e)}
      onKeyDown={(e) => onClickHandler(e)}
    >
      {children}
    </button>
  )
}

export default MyButton
