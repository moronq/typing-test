import React from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { restart } from '../../store/slices/textSlice'
import Modal from '../UI/Modal/Modal'
import MyButton from '../UI/MyButton/MyButton'

const ModalLanguageMessage = () => {
  const dispatch = useAppDispatch()
  const closeLanguageModal = () => {
    dispatch(restart())
  }
  return (
    <Modal>
      <p>Пожалуйста, смени раскладку клавиатуры на English.</p>
      <MyButton onClick={closeLanguageModal}>Продолжить</MyButton>
    </Modal>
  )
}

export default ModalLanguageMessage
