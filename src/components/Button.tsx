
interface ButtonProps {
    text?: string
    onClick: (id: string) => void
    id: string
    color?: string
    testId?: string
}

const Button = ({ text='Button', onClick, id, color="blue", testId='testId' }: ButtonProps): JSX.Element => {
    const styles = `bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded-full m-4`

    return (
        <button className={styles} onClick={() => onClick(id)} id={id} data-testid={testId}>
            {text}
        </button>
    )
}

export default Button
