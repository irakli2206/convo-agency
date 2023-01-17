import React from 'react'
import styles from './styles/Input.module.scss'
import Eye from '../../assets/eye.svg'

type Props = {
    value?: string,
    onValueChange?: (e: string) => void
    type: 'email' | 'password'
    placeholder: string
    label: string
}

const Input = ({ value, onValueChange, type, placeholder, label }: Props) => {


    return (
        <div className={styles.input}>
            <label htmlFor="input" className={styles.input_label}>{label}</label>
            <div className={styles.input_box}>
                <input id='input' type={type} placeholder={placeholder}  />
                <img src={Eye} alt="" style={{display: type == 'password' ? 'block' : 'none'}}

                />
            </div>
        </div>
    )
}

export default Input