import React, { useState } from 'react'
import styles from './styles/Input.module.scss'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

type Props = {
    field: any
    form: any
    name: string
    type: 'email' | 'password'
    placeholder: string
    label: string
}

const Input = ({ field, name, form, type, placeholder, label, ...props }: Props) => {
    const [passwordType, setPasswordType] = useState<string>(type)

    const onEyeClick = () => {
        if (passwordType === 'email') setPasswordType('password')
        else if (passwordType === 'password') setPasswordType('email')
    }
    const hasError = () => {
        if (form && form.errors) {
            return !!form.errors[field.name]
        }
        return false
    }

    const getIcon = () => {
        if (type === 'password') {
            if (passwordType == 'password') {
                return (
                    <AiFillEye size={28} onClick={onEyeClick} />
                )
            }
            else return (
                <AiFillEyeInvisible size={28} onClick={onEyeClick} />
            )
        }
        return null
    }

    const getType = () => {
        if(type == 'password'){
            return passwordType
        }
    }

    return (
        <div className={styles.input}>
            <label htmlFor={name} className={styles.input_label}>{label}</label>
            <div className={styles.input_box} data-has-error={hasError()}>
                <input id={name} name={name} {...field} type={getType()} placeholder={placeholder} {...props}

                />
                {getIcon()}


            </div>
            {form && <div className={styles.error}>
                {form.errors[field.name]}
            </div>}

        </div>
    )
}

export default Input