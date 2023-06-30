'use client'

import React from 'react'

import { useAuth } from '@/contexts/AuthProvider'
import Button from '@components/Button'

const Login = () => {

    const { setUserData } = useAuth()

    return (
        <div>
            <Button title="Login" onClick={() => {
                alert('button')
                setUserData({ f_name: 'abcd', l_name: 'xyz', u_name: 'q123', u_id: 1 })
            }} />
        </div>
    )
}

export default Login
