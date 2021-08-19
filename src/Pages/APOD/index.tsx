/* eslint-disable camelcase */
import axios from 'axios';
import {useEffect, useState} from 'react';

interface APOD {
    title: string
    url: string
    hdurl: string
    explanation: string
    media_type: string
    copyright?: string
    thumbnail_url?: string
    date: string
}

const APOD = (): JSX.Element => {
    const [apods, setApods] = useState([]);

    useEffect(() => {
        (async function fetchApod() {
            const {data: fetchedApods} = await axios.get('https://api.nasa.gov/planetary/apod?api_key=BkQerCYLcMl5BzaHg6vsasTgunnXJnO4tPTgehic&thumbs=true&count=5');
            setApods(fetchedApods)
        })()
    }, [])

    return (
        <div className="">
            {apods.map((apod: APOD) => {
                return (<div className="m-10" key={apod.title}>
                    <div className="max-w-sm rounded shadow-lg">
                        {apod.media_type === 'video'
                            ? <img className="w-full" src={apod?.thumbnail_url} alt={apod?.title}/>
                            : <img className="w-full" src={apod?.hdurl} alt={apod?.title}/>
                        }
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{ apod.media_type === 'video' ? <a target="_blank" href={apod.url} rel="noreferrer"> {apod.title} (Video link) </a> : apod?.title } </div>
                            <p className="text-gray-700 text-base">{apod?.explanation}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{apod.copyright ? apod.copyright : 'Unknown'}</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{apod?.date}</span>
                        </div>
                    </div>
                </div>)
            })
            }
        </div>
    )
}

export default APOD;
