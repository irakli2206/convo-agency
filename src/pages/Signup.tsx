import React from 'react'
import Banner from '../components/Banner'
import styles from './styles/Signup.module.scss'
import Logo from '../assets/logo.svg'
import BackArrow from '../assets/back-arrow.svg'
import LoneCat from '../assets/lone-cat.svg'
import { Form, Formik, Field } from 'formik'
import * as Yup from 'yup'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'
import TextualBorder from '../components/TextualBorder'
import SocialsButton from '../components/SocialsButton'
import Instagram from '../assets/ig-logo.svg'
import Twitter from '../assets/twitter-logo.svg'
import Facebook from '../assets/fb-logo.svg'
import { createUser } from '../api/auth'

const Signup = () => {
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    email: Yup.string().required("Required").email("Email Invalid"),
    password: Yup.string().required("Required").min(8, 'Must be at least 8 characters'),
    passwordConfirm: Yup.string().required("Required").oneOf([Yup.ref('password')], "Passwords don't match"),

  })

  return (
    <div className={styles.signup}>

      <div className={styles.signup_container}>
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
            onSubmit={async (vals, actions) => {
              console.log(vals)
              await createUser(vals.email, vals.password).then(() => navigate('/login'))
            }}
          >
            {({ errors, touched, values, handleChange }) => (
              <Form className={styles.form} noValidate>
                <Field component={Input} name='email' label='Email' type='email' 
                />

                <Field component={Input} name='password' label='Senha' type='password' />
                <Field component={Input} name='passwordConfirm' label='Confirmar Senha' type='password' />
                <button type='submit'  className={styles.submit_btn} >Registrar</button>
                <TextualBorder text='Ou se registre com' />
                <div className={styles.socials}>
                  <SocialsButton image={Instagram} url='https://www.instagram.com/' />
                  <SocialsButton image={Twitter} url='https://www.twitter.com/' />
                  <SocialsButton image={Facebook} url='https://www.facebook.com/' />
                </div>
                <p className={styles.signup_link}>Ja e membro?<a href='/login'>  Faca Login</a></p>
              </Form> 
            )}
          </Formik>
        </div>

      </div>

      <Banner />
    </div>
  )
}

export default Signup