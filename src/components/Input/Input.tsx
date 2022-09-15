import React, { Dispatch, FC, SetStateAction, useRef } from 'react'
import styles from './Input.module.scss'

interface IProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<IProps> = ({ value, onChange }) => {
  const ref = useRef<HTMLInputElement>(null)

  const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    ref.current?.focus()
  }

  return (
    <input
      ref={ref}
      type="text"
      autoComplete="off"
      autoFocus
      onBlur={(e) => onBlur(e)}
      value={value}
      onChange={(e) => onChange(e)}
      className={styles.input}
    />
  )
}

export default Input
