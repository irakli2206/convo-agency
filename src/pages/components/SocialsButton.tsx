import React from 'react'
import styles from './styles/SocialsButton.module.scss'

type Props = {
    url: string 
    image: string
}

const SocialsButton = ({url, image}: Props) => {
  return (
    <a href={url} className={styles.socials_btn} target='_blank'>
        <img src={image} alt="" />
    </a>
  )
}

export default SocialsButton