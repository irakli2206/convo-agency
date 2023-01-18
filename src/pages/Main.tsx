import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../api/auth'
import styles from './styles/Main.module.scss'

const Main = () => {
  const navigate = useNavigate()
  
  const signOutUser = async () => {
    if(localStorage.getItem('userEmail')) await signOut()
    console.log('reached')
    navigate('/login')
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.email}>{localStorage.getItem('userEmail') ?? ''}</h1>
      <button className={styles.signout_btn} onClick={signOutUser}>Sign Out</button>
    </div>
  )
}

export default Main