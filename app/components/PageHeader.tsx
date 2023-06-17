import React from 'react'

const PageHeader = ({
    title,
    className,
}: PageHeader) => {
    return (
        <h1 className={className}>{title}</h1>
    )
}

export default PageHeader

interface PageHeader {
    title: string,
    className?: string,
}