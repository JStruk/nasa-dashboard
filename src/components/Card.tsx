import APOD from "../Pages/APODPage/types";

interface CardProps {
    apod: APOD
}

const Card = ({apod}: CardProps): JSX.Element => {
    return (
        <>
            <article className="flex flex-wrap lg:flex-nowrap shadow-lg mx-auto">
                {apod.media_type === 'video'
                    ? <img className="w-full lg:w-80 h-auto" src={apod?.thumbnail_url} alt={apod?.title}/>
                    : <img className="w-full lg:w-80 h-auto" src={apod?.hdurl} alt={apod?.title}/>
                }
                <div className="p-10 my-auto">
                    <h1 className="text-2xl font-semibold text-gray-800"> {apod.media_type === 'video'
                        ? <a target="_blank" href={apod.url} rel="noreferrer"> {apod.title} (Video link) </a>
                        : apod?.title}
                    </h1>
                    <p className="text-base text-gray-400 mt-2"> {apod?.explanation} </p>
                </div>
            </article>
        </>
    )
}

export default Card
