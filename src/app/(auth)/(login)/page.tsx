'use client'

import Link from 'next/link'

import { Formik } from 'formik'

import Button from '@components/Button'
import Input from '@components/Input'
import SocialBtns from '@components/SocialBtns'

import { useAuth } from '@/contexts/AuthProvider'

import validations from './validations'

const Login = () => {
    const { setUserData } = useAuth()

    const onSubmit = (values: onSubmit) => {
        console.log(values)
        setUserData({ f_name: 'abcd', l_name: 'xyz', u_name: 'q123', u_id: 1 })
    }

    return (
        <div>
            <p>Login</p>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={validations}
                validateOnChange={false}
                validateOnBlur={true}
                onSubmit={onSubmit}
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
            <p className='my-4'>Don&apos;t have an account <Link href='/register' className='text-sky-600 dark:text-sky-200'>Register Here</Link></p>
            <hr className='my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-sky-600 to-transparent opacity-25 dark:opacity-100' />
            <SocialBtns className='grid grid-cols-3 gap-x-2' />
        </div>
    )
}

export default Login

interface onSubmit {
    username: string,
    password: string,
}
