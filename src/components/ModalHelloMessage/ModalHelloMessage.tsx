import React, { Dispatch, FC, SetStateAction } from 'react'
import Modal from '../UI/Modal/Modal'
import MyButton from '../UI/MyButton/MyButton'

interface IProps {
  setHelloModal: Dispatch<SetStateAction<boolean>>
}

const ModalHelloMessage: FC<IProps> = ({ setHelloModal }) => {
  const closeHelloModal = () => {
    setHelloModal(false)
  }
  return (
    <Modal>
      <p>Приготовься печатать. Поехали!</p>
      <MyButton onClick={closeHelloModal}>Начать печатать</MyButton>
    </Modal>
  )
}

export default ModalHelloMessage
