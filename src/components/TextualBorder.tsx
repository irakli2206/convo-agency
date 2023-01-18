import React from 'react'
import styles from './styles/TextualBorder.module.scss'

type Props = {
    text: string
}

const TextualBorder = ({text}: Props) => {
  return (
    <div className={styles.border}>
        <div className={styles.start}></div>
        <p  className={styles.text}>{text}</p>
        <div className={styles.end}></div>
    </div>
  )
}

export default TextualBorder