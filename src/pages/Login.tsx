import React from 'react'
import Banner from './components/Banner'
import styles from './styles/Login.module.scss'
import Logo from '../assets/logo.svg'
import BackArrow from '../assets/back-arrow.svg'
import LoneCat from '../assets/lone-cat.svg'
import { Form, Formik, Field } from 'formik'
import * as Yup from 'yup'
import Input from './components/Input'
import { useNavigate } from 'react-router-dom'
import TextualBorder from './components/TextualBorder'
import SocialsButton from './components/SocialsButton'
import Instagram from '../assets/ig-logo.svg'
import Twitter from '../assets/twitter-logo.svg'
import Facebook from '../assets/fb-logo.svg'

const Login = () => {
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    passwordConfirm: Yup.string().required("Required"),

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
            <img src={LoneCat} alt="" />
            <div className={styles.cat_text}>
              <h1>{'ようこそ!'}</h1>
              <p>Bem-vindo(a)!</p>
            </div>
          </div>
          <Formik
            initialValues={{
              email: '',
              password: '',
              passwordConfirm: ''
            }}
            validationSchema={schema}
            onSubmit={(vals, actions) => {
              console.log(vals)
            }}
          >
            {({ errors, touched }) => (
              <Form className={styles.form}>
                <Field as={Input} name='email' label='Email' type='email' />

                <Field as={Input} name='password' label='Senha' type='password' />
                <Field as={Input} name='passwordConfirm' label='Confirmar Senha' type='password' />
                <button type='submit' className={styles.submit_btn}>Registrar</button>
                <TextualBorder text='Ou se registre com' />
                <div className={styles.socials}>
                  <SocialsButton image={Instagram} url='https://www.instagram.com/' />
                  <SocialsButton image={Twitter} url='https://www.twitter.com/' />
                  <SocialsButton image={Facebook} url='https://www.facebook.com/' />
                </div>
                <p className={styles.login_link}>Ja e membro?<a>  Faca Login</a></p>
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