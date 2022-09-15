import React, { FC, useRef, useState } from 'react'
import styles from './Input.module.scss'

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<IProps> = ({ onChange }) => {
  const ref = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')

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
