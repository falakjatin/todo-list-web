'use client'

import React from 'react'

import { Formik } from 'formik'

import Button from '@components/Button'
import Input from '@components/Input'

// import { useAuth } from '@/contexts/AuthProvider'

import validations from './validations'

const Login = () => {

    // const { setUserData } = useAuth()

    return (
        <>
            <p>Login</p>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={validations}
                validateOnChange={false}
                validateOnBlur={true}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleSubmit, values, errors }) => (
                    <>
                        <Input
                            placeholder='Username'
                            onChange={handleChange('username')}
                            value={values.username}
                            error={errors.username}
                        />
                        <Input
                            placeholder='Password'
                            onChange={handleChange('password')}
                            value={values.password}
                            error={errors.password}
                            type='password'
                        />
                        <Button title="Login" onClick={handleSubmit} />
                        {/* <Button title="Login" onClick={() => {
                            alert('button')
                            setUserData({ f_name: 'abcd', l_name: 'xyz', u_name: 'q123', u_id: 1 })
                        }} /> */}
                    </>
                )}
            </Formik>
        </>
    )
}

export default Login
