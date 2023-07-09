const Input = ({
    title,
    error,
    containerStyle = '',
    titleStyle = '',
    errorStyle = '',
    inputStyle = '',
    ...props
}: InputProps) => {
    return (
        <div className={'flex flex-col text-left my-5' + containerStyle}>
            {title && <span className={'text-slate-950 dark:text-stone-50 ' + titleStyle}>{title}</span>}
            <label>
                <input
                    className={'w-full rounded-full p-2 pl-4 bg-slate-50 bg-[#fff] border-2 dark:bg-slate-900 dark:border-transparent ' + inputStyle}
                    {...props} />
            </label>
            <span className={'text-red-500 pl-2' + errorStyle}>{error}</span>
        </div>
    )
}

export default Input

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    title?: string,
    error?: string,
    containerStyle?: string,
    titleStyle?: string,
    errorStyle?: string,
    inputStyle?: string,
}
