import React from 'react'
import styles from './styles/Banner.module.scss'
import Boy from '../assets/jumping-boy.svg'
import Ellipse from '../assets/ellipse.svg'


const Banner = () => {
    return (
        <div className={styles.banner}>
                <div className={styles.image_container}>
                    <img src={Ellipse} alt='' className={styles.ellipse} />
                    <img src={Boy} alt='' className={styles.boy} />
                </div>

                <h1 className={styles.animeyabu}>anime<span className={styles.yabu}>yabu.</span></h1>
                <p className={styles.content}>Assista animes online em HD, legendado ou dublado, no seu celular ou computador. <br />
                    <span className={styles.content_bold}>Animeyabu, o seu portal de animes online!</span>
                </p>
        </div>
    )
}

export default Banner