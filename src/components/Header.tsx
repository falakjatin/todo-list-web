import React from 'react'

const Header = ({
    title,
    className,
}: Header) => {
    return (
        <h1 className={className}>{title}</h1>
    )
}

export default Header

interface Header {
    title: string,
    className?: string,
}
