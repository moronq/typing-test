import React from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { restart } from '../../store/slices/textSlice'
import Modal from '../UI/Modal/Modal'
import MyButton from '../UI/MyButton/MyButton'

const ModalUpperCaseMessage = () => {
  const dispatch = useAppDispatch()
  const closeUpperCaseModal = () => {
    dispatch(restart())
  }
  return (
    <Modal>
      <p>Пожалуйста, используйте Shift для ввода заглавных букв</p>
      <MyButton onClick={closeUpperCaseModal}>Продолжить</MyButton>
    </Modal>
  )
}

export default ModalUpperCaseMessage
