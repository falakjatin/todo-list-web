import { IconType } from 'react-icons'

const Button = ({
    title = '',
    className = '',
    onClick,
    rightIcon: RightIcon,
    leftIcon: LeftIcon,
}: Button) => {
    return (
        <button
            className={'py-2 px-5 rounded-full text-base border-0 flex gap-x-2 justify-center items-center ' + className}
            onClick={onClick}
        >{LeftIcon && <LeftIcon />}{title}{RightIcon && <RightIcon />}</button>
    )
}

export default Button

interface Button {
    title?: string,
    className?: string,
    onClick: () => void,
    rightIcon?: IconType,
    leftIcon?: IconType,
}
