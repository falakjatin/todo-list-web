'use client'

import React from 'react'

import { Formik } from 'formik'

import Button from '@components/Button'
import Input from '@components/Input'

import validations from './validations'
import Link from 'next/link'
import SocialBtns from '@components/SocialBtns'

const Login = () => {
    return (
        <div>
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
                        <Button className='w-full' title='Login' onClick={handleSubmit} />
                        {/* <Button title='Login' onClick={() => {
                            alert('button')
                            setUserData({ f_name: 'abcd', l_name: 'xyz', u_name: 'q123', u_id: 1 })
                        }} /> */}
                    </>
                )}
            </Formik>
            <p className='my-4'>Don&apos;t have an account <Link href='/register' className='text-sky-600 dark:text-blue-700'>Register Here</Link></p>
            <hr className='my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-sky-600 to-transparent opacity-25 dark:opacity-100' />
            <SocialBtns className='grid grid-cols-3 gap-x-2' />
        </div>
    )
}

export default Login
