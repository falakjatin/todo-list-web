'use client'

import Link from 'next/link'

import { Formik } from 'formik'

import Input from '@components/Input'
import Button from '@components/Button'
import SocialBtns from '@components/SocialBtns'

import validations from './validations'

const Register = () => {
    return (
        <div>
            <p>Register</p>
            <Formik
                initialValues={{ email: '', password: '', reTypePassword: '' }}
                validationSchema={validations}
                validateOnChange={false}
                validateOnBlur={true}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleSubmit, values, errors }) => (
                    <>
                        <Input
                            placeholder='Email'
                            onChange={handleChange('email')}
                            value={values.email}
                            error={errors.email}
                        />
                        <Input
                            placeholder='Password'
                            onChange={handleChange('password')}
                            value={values.password}
                            error={errors.password}
                            type='password'
                        />
                        <Input
                            placeholder='Re-type Password'
                            onChange={handleChange('reTypePassword')}
                            value={values.reTypePassword}
                            error={errors.reTypePassword}
                            type='password'
                        />
                        <Button
                            className='w-full'
                            title='Register'
                            onClick={handleSubmit} />
                    </>
                )}
            </Formik>
            <p className='my-4'>Already have an account <Link href='/' className='text-sky-600 dark:text-blue-700'>Login Here</Link></p>
            <hr className='my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-sky-600 to-transparent opacity-25 dark:opacity-100' />
            <SocialBtns className='grid grid-cols-3 gap-x-2' />
        </div>
    )
}

export default Register
