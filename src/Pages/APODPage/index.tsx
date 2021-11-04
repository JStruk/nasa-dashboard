/* eslint-disable camelcase */
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../components/Card'
import APOD from './types'
import { PacmanLoader } from "react-spinners";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const APODPage = (): JSX.Element => {
    const [apods, setApods] = useState([]);
    const [count, setCount] = useState<number>(5)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());

    const fetchApod = async () => {
        const nasaDate = (date: Date | null): string => date ? date.toISOString().slice(0, 10) : 'beefmolk'

        const getUrl = (count: number, startDate: Date | null, endDate: Date | null) => {
            const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=BkQerCYLcMl5BzaHg6vsasTgunnXJnO4tPTgehic&thumbs=true`;
            if (!(startDate || endDate)) {
                return `${baseUrl}&count=${count}`
            }

            if (startDate && endDate) {
                if (nasaDate(startDate) !== nasaDate(endDate)) {
                    return `${baseUrl}&start_date=${nasaDate(startDate)}&end_date=${nasaDate(endDate)}`
                }
            }

            return `${baseUrl}&date=${nasaDate(startDate || endDate)}`
        }
        setIsLoading(true)

        const { data: fetchedApods } = await axios.get(getUrl(count, startDate, endDate))
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
            <div className="ml-6 bg-gray-400 rounded shadow-2xl p-2">
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
                <div className="flex">
                    <span>Start Date:</span>
                    <DatePicker
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                        customInput={
                            <button
                                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => {
                                    return {}
                                }}> {startDate?.toDateString()} </button>}
                    />
                </div>
                <div className="flex mt-4">
                    <span>End Date:</span>
                    <DatePicker
                        selected={endDate}
                        onChange={(date: Date) => setEndDate(date)}
                        customInput={
                            <button
                                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => {
                                    return {}
                                }}> {endDate?.toDateString()} </button>}
                    />
                </div>

            </div>
            {isLoading &&
            <div className="flex flex-col justify-center h-screen items-center">
                <span className="text-center w-full text-2xl p-4"> Loading... </span>
                <PacmanLoader size={100}/>
            </div>
            }

            {!isLoading && (Array.isArray(apods) ? apods : [apods]).map((apod: APOD, index: number) => {
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
