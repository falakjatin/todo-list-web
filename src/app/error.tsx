'use client'

import { useEffect } from 'react'

const Error = ({ error, reset }: Error) => {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='m-auto'>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}

export default Error

interface Error {
    error: Error & { digest?: string },
    reset: () => void,
}
