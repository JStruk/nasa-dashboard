/* eslint-disable camelcase */
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../components/Card'
import APOD from './types'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { PacmanLoader } from "react-spinners";

const APODPage = (): JSX.Element => {
    const [apods, setApods] = useState([]);
    const [count, setCount] = useState<number>(5)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchApod = async () => {
        setIsLoading(true)
        const { data: fetchedApods } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=BkQerCYLcMl5BzaHg6vsasTgunnXJnO4tPTgehic&thumbs=true&count=${count}`);
        setApods(fetchedApods)
        setIsLoading(false)
    }

    useEffect(() => {
        (async function initialFetchApod() {
            await fetchApod()
        })()
    }, [])

    return (
        <div data-testid='apod-page-div'>
            <div className="ml-6">
                <label>
                    Number of images
                    <input
                        type="number"
                        defaultValue={5}
                        min={0} max={25}
                        className="m-6 rounded border border-gray-300 p-2"
                        onChange={(e) => {
                            setCount(parseInt(e.target.value))
                        }}
                    />
                </label>
                <button className="m-6 p-3 rounded border border-blue-300" onClick={() => fetchApod()}>Click to Refresh
                    images
                </button>
            </div>
            {isLoading &&
            <div className="flex flex-col justify-center h-screen items-center">
                <span className="text-center w-full text-2xl p-4"> Loading... </span>
                <PacmanLoader size={100}/>
            </div>
            }

            {!isLoading && apods.map((apod: APOD, index: number) => {
                return (
                    <div className="m-6 rounded border border-gray-300" key={index} data-testid={`apod-${index}`}>
                        <Card apod={apod}/>
                    </div>
                )
            })
            }
        </div>
    )
}

export default APODPage;
