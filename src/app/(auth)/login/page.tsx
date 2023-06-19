'use client'

import { useRouter } from 'next/navigation'

import Button from "@components/Button";
import PageHeader from "@components/PageHeader";

export default function Login() {

    const router = useRouter()

    return (
        <>
            <PageHeader title="Login Page" />
            <Button title="Root" onClick={() => router.push('/')} />
        </>
    )
}
