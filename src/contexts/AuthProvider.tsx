'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

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

    const getData = async () => {
        const data = await localStorage.getItem('userData')
        if (data) {
            setUser(JSON.parse(data))
        }
    }

    const setUserData = (data: userDataType) => {
        localStorage.setItem('userData', JSON.stringify(data))
        setUser(data)
        router.push('/list')
    }

    const clearUserData = () => {
        localStorage.removeItem('userData')
        setUser(null)
        router.push('/login')
    }

    return (
        <AuthContext.Provider value={{ userData, setUserData, clearUserData }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
