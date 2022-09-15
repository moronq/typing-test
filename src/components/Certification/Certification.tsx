import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchText } from '../../store/slices/textAction'
import Input from '../Input/Input'
import styles from './Certification.module.scss'

const Certification = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchText())
  }, [])

  const [numberOfSymbol, setNumberOfSymbol] = useState(0)
  const [value, setValue] = useState('')

  const { text } = useAppSelector((state) => state.text)
  const currentSymbol = text[numberOfSymbol]

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value
    if (target === currentSymbol) {
      setNumberOfSymbol((prev) => prev + 1)
    }
  }
  return (
    <main className={styles.mainContainer}>
      <Input value={value} onChange={onChange} />
      <div>
        <div>
          {text.map((el, index) => (
            <span
              className={index === numberOfSymbol ? styles.active : ''}
              key={index}
            >
              {el}
            </span>
          ))}
        </div>
        <div>func</div>
      </div>
    </main>
  )
}

export default Certification
