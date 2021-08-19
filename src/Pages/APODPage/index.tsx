/* eslint-disable camelcase */
import axios from 'axios';
import {useEffect, useState} from 'react';
import Card from '../../components/Card'
import APOD from './types'

const APODPage = (): JSX.Element => {
    const [apods, setApods] = useState([]);

    useEffect(() => {
        (async function fetchApod() {
            const {data: fetchedApods} = await axios.get('https://api.nasa.gov/planetary/apod?api_key=BkQerCYLcMl5BzaHg6vsasTgunnXJnO4tPTgehic&thumbs=true&count=5');
            setApods(fetchedApods)
        })()
    }, [])

    return (
        <div className="">
            {apods.map((apod: APOD, index: number) => {
                return (
                    <div className="m-6 rounded border border-gray-300" key={index}>
                        <Card apod={apod}/>
                    </div>
                )
            })
            }
        </div>
    )
}

export default APODPage;
