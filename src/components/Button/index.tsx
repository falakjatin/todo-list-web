const Button = ({
    title,
    className,
    onClick,
}: Button) => {
    return (
        <button
            className={className ? className : 'py-2 px-5 rounded-lg m-2 text-lg border-0'}
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
