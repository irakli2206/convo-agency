import React from 'react'
import styles from './styles/Home.module.scss'
import Boy from '../assets/jumping-boy.svg'
import Ellipse from '../assets/ellipse.svg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.image_container}>
                    <img src={Ellipse} alt='' className={styles.ellipse} />
                    <img src={Boy} alt='' className={styles.boy} />
                </div>

                <h1 className={styles.animeyabu}>anime<span className={styles.yabu}>yabu.</span></h1>
                <p className={styles.content}>Assista animes online em HD, legendado ou dublado, no seu celular ou computador. <br />
                    <span className={styles.content_bold}>Animeyabu, o seu portal de animes online!</span>
                </p>
                <div className={styles.buttons}>
                    <button className={styles.button_bright} onClick={() => navigate('/login')}>Login</button>
                    <button className={styles.button_dim} onClick={() => navigate('/register')}>Registro</button>
                </div>
                <a className={styles.explore} href="">Explorar Catalogo</a>
            </div>
        </div>
    )
}

export default Home