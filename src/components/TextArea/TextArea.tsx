import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
  incrementNumberOfSymbol,
  setIncorrectSymbol,
  setTotalAttemptCounter,
} from '../../store/slices/textSlice'
import { checkLanguage } from '../../utils/checkLanguage'
import { upperCaseCheck } from '../../utils/upperCaseCheck'
import Input from '../Input/Input'
import Text from '../Text/Text'
import styles from './TextArea.module.scss'

interface IProps {
  modalStatus: boolean
  numberOfSymbol: number
  text: string[]
  setIsModalVisual: React.Dispatch<
    React.SetStateAction<{
      helloModal: boolean
      upperCaseModal: boolean
      finishModal: boolean
      languageModal: boolean
    }>
  >
}

const TextArea: FC<IProps> = ({
  modalStatus,
  numberOfSymbol,
  text,
  setIsModalVisual,
}) => {
  const dispatch = useAppDispatch()
  const currentSymbol = text[numberOfSymbol]
  const { incorrectSymbol } = useAppSelector((state) => state.text)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value
    if (
      numberOfSymbol === 0 &&
      target !== currentSymbol &&
      upperCaseCheck(target, currentSymbol)
    ) {
      setIsModalVisual((prev) => ({ ...prev, upperCaseModal: true }))
    }
    if (checkLanguage(target)) {
      setIsModalVisual((prev) => ({ ...prev, languageModal: true }))
    }
    if (target === currentSymbol) {
      dispatch(incrementNumberOfSymbol())
      dispatch(setIncorrectSymbol(null))
      dispatch(setTotalAttemptCounter())
    } else if (target !== currentSymbol && incorrectSymbol) {
    } else if (target !== currentSymbol) {
      dispatch(setIncorrectSymbol(numberOfSymbol))
      dispatch(setTotalAttemptCounter())
    }
  }

  return (
    <>
      {modalStatus || <Input onChange={onChange} />}
      {text.length === 0 ? (
        <p className={styles.loader}>Loading...</p>
      ) : (
        <Text
          incorrectSymbol={incorrectSymbol}
          numberOfSymbol={numberOfSymbol}
          text={text}
        />
      )}
    </>
  )
}

export default TextArea
