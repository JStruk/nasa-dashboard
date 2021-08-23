
interface ButtonProps {
    text?: string
    onClick?: () => void
    id?: string
}

const Button = ({ text='Button', onClick, id }: ButtonProps): JSX.Element => {

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4" onClick={onClick} id={id} >
            {text}
        </button>
    )
}

export default Button
