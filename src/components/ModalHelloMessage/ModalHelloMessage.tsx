import { FC } from 'react'
import Modal from '../UI/Modal/Modal'
import MyButton from '../UI/MyButton/MyButton'

interface IProps {
  setIsModalVisual: React.Dispatch<
    React.SetStateAction<{
      helloModal: boolean
      upperCaseModal: boolean
      finishModal: boolean
      languageModal: boolean
    }>
  >
}

const ModalHelloMessage: FC<IProps> = ({ setIsModalVisual }) => {
  const closeHelloModal = () => {
    setIsModalVisual((prev) => ({ ...prev, helloModal: false }))
  }
  return (
    <Modal>
      <p>Приготовься печатать. Поехали!</p>
      <MyButton onClick={closeHelloModal}>Начать печатать</MyButton>
    </Modal>
  )
}

export default ModalHelloMessage
