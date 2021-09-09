/* eslint-disable camelcase */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NEO } from "./types";

const NeoPage = (): JSX.Element => {
    const [neos, setNeos] = useState<NEO[]>([]);

    useEffect(() => {
        (async function fetchNeoW() {
            const startDate = new Date().toISOString().split('T')[0]
            const { data: fetchedNeos } = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=BkQerCYLcMl5BzaHg6vsasTgunnXJnO4tPTgehic&thumbs=true&count=5`);
            setNeos(fetchedNeos.near_earth_objects[startDate])
        })()
    }, [])

    return (
        <div className="">
            {neos.map((neo: NEO, index: number) => {
                return (
                    <div className="m-6 rounded border border-gray-300 p-4" key={index}>
                        <p>Name: {neo.name}</p>
                        <p>Hazardous: <span className={neo.is_potentially_hazardous_asteroid ? "text-red-700" : ""}> {neo.is_potentially_hazardous_asteroid ?  'YEEEE' : 'nop'}  </span></p>
                        <p>Distance: {parseFloat(neo.close_approach_data[0]?.miss_distance?.kilometers).toLocaleString()} km</p>
                        <p>Diameter: {parseFloat(neo.estimated_diameter?.kilometers?.estimated_diameter_max.toString()).toLocaleString()} km</p>
                        <p><a className="text-blue-400" target="_blank" rel="noreferrer" href={neo.nasa_jpl_url}>Nasa JPL Url</a></p>
                        <div
                            className="rounded-full border border-black"
                            style={{
                                width: neo.estimated_diameter?.kilometers?.estimated_diameter_max*100,
                                height: neo.estimated_diameter?.kilometers?.estimated_diameter_max*100
                            }}
                        >
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default NeoPage;
