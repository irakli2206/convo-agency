import React from 'react'
import Banner from '../components/Banner'
import styles from './styles/Login.module.scss'
import Logo from '../assets/logo.svg'
import BackArrow from '../assets/back-arrow.svg'
import TopImage from '../assets/phone-login-image.svg'
import { Form, Formik, Field } from 'formik'
import * as Yup from 'yup'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'
import TextualBorder from '../components/TextualBorder'
import SocialsButton from '../components/SocialsButton'
import Instagram from '../assets/ig-logo.svg'
import Twitter from '../assets/twitter-logo.svg'
import Facebook from '../assets/fb-logo.svg'
import { logIn } from '../api/auth'

const Login = () => {
    const navigate = useNavigate()

    const schema = Yup.object().shape({
        email: Yup.string().required("Required"),
        password: Yup.string().required("Required"),

    })


    return (
        <div className={styles.login}>

            <div className={styles.login_container}>
                <div className={styles.logo_container}>
                    <img src={Logo} alt="" />
                    <h1 className={styles.animeyabu}>anime<span className={styles.yabu}>yabu.</span></h1>
                </div>
                <button onClick={() => navigate(-1)} className={styles.back_btn}></button>

                <div className={styles.form_container}>
                    <div className={styles.cat_container}>
                        <img src={TopImage} alt="" />
                        <div className={styles.cat_text}>
                            <h1>{'ようこそ!'}</h1>
                            <p>Bem-vindo(a)!</p>
                        </div>
                    </div>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={schema}
                        onSubmit={async (vals, actions) => {
                            await logIn(vals.email, vals.password)
                            console.log(localStorage.getItem('userEmail'))
                            if(localStorage.getItem('userEmail')) navigate('/main')
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className={styles.form} noValidate>
                                <Field component={Input} name='email' label='Email' type='email' />

                                <Field component={Input} name='password' label='Senha' type='password' />
                                <a style={{textAlign: 'end', fontFamily: 'Poppins'}} href="">Esqueci a senha</a>
                                <button type='submit' className={styles.submit_btn}>Login</button>
                                <TextualBorder text='Usar Login Social' />
                                <div className={styles.socials}>
                                    <SocialsButton image={Instagram} url='https://www.instagram.com/' />
                                    <SocialsButton image={Twitter} url='https://www.twitter.com/' />
                                    <SocialsButton image={Facebook} url='https://www.facebook.com/' />
                                </div>
                                <p className={styles.login_link}>Ja e membro?<a href='/signup'> Registre-se</a></p>
                            </Form>
                        )}
                    </Formik>
                </div>

            </div>

            <Banner />
        </div>
    )
}

export default Login