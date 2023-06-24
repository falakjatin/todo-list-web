'use client'

import { useRouter } from 'next/navigation'

import Button from "@components/Button";
import PageHeader from "@components/PageHeader";

const Login = () => {

    const router = useRouter()

    return (
        <>
            <PageHeader title="Login Page" />
            <Button title="Root" onClick={() => router.push('/')} />
        </>
    )
}

export default Login
