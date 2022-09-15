import React, { FC, ReactNode, useEffect } from 'react'
import styles from './Modal.module.scss'

interface IProps {
  children: ReactNode
}

const Modal: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalBlock}>{children}</div>
    </div>
  )
}

export default Modal
