'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// import { cookies } from 'next/headers'

import { AuthContextType, userDataType } from '@/types/global.interface'

const AuthContext = createContext<AuthContextType>({ userData: null, setUserData: () => { }, clearUserData: () => { } })

export const AuthProvider = ({ children }: {
    children: React.ReactNode
}) => {

    const router = useRouter()

    const [userData, setUser] = useState<userDataType | null>(null)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        // const data = cookies().get('data')?.value
        // if (data) {
        //     setUser(JSON.parse(data))
        // }
    }

    const setUserData = (data: userDataType) => {
        // cookies().set('data', JSON.stringify(data), { secure: true })
        setUser(data)
        router.push('/list')
    }

    const clearUserData = () => {
        localStorage.removeItem('userData')
        setUser(null)
        router.push('/')
    }

    return (
        <AuthContext.Provider value={{ userData, setUserData, clearUserData }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
