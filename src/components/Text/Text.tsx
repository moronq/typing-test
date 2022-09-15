import cn from 'classnames'
import { FC } from 'react'
import styles from './Text.module.scss'

interface IProps {
  numberOfSymbol: number
  incorrectSymbol: number | null
  text: String[]
}

const Text: FC<IProps> = ({ numberOfSymbol, incorrectSymbol, text }) => {
  return (
    <div className={styles.textContainer}>
      {text.map((el, index) => (
        <span
          className={cn({
            [styles.active]: index === numberOfSymbol,
            [styles.incorrectLetter]: index === incorrectSymbol,
          })}
          key={index}
        >
          {el}
        </span>
      ))}
    </div>
  )
}

export default Text
