const Button = ({
    title,
    className = '',
    onClick,
}: Button) => {
    return (
        <button
            className={'w-full py-2 px-5 rounded-lg text-md border-0 ' + className}
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
