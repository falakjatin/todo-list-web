import React from 'react'

const Button = ({
    title,
    className,
    onClick,
}: Button) => {
    return (
        <button
            className={className}
            onClick={onClick}
        >{title}</button>
    )
}

export default Button

interface Button {
    title: string,
    className?: string,
    onClick: () => void,
}
