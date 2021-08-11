import axios from 'axios';
import {useEffect, useState} from 'react';

const APOD = () => {
    const [apods, setApods] = useState([]);

    useEffect(() => {
        (async function fetchApod() {
            const {data: fetchedApods} = await axios.get('https://api.nasa.gov/planetary/apod?api_key=BkQerCYLcMl5BzaHg6vsasTgunnXJnO4tPTgehic&count=5');
            setApods(fetchedApods)
            console.log(fetchedApods);
        })()
    }, [])

    return (
        <div className="flex">
            {apods.map(apod => {
                return (<div className="p-10"  key={apod.title}>
                    <div className="max-w-sm rounded shadow-lg">
                        <img className="w-full" src={apod?.hdurl} alt={apod?.title}/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{apod?.title} </div>
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
