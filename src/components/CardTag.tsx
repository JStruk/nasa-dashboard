interface CardTagProps {
    text?: string
}

const CardTag = ({ text }: CardTagProps): JSX.Element => {
    return (
        <div
            className="flex inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-center font-semibold text-gray-600 mr-2 mb-2">
            {text || 'Unknown'}
        </div>
    )
}

export default CardTag
