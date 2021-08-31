import ReactGlobe, {Marker, Coordinates} from 'react-globe'
import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';

const ISSTrackerPage = (): JSX.Element => {
    const [issPosition, setIssPosition] = useState<Marker>(
        {
            id: 'international-space-satan',
            color: 'red',
            coordinates: [0, 0],
            value: 50,
        }
    );

    const [initialCoords, setinitialCoords] = useState<Coordinates | undefined>()

    const updateIssPosition = useCallback(async () => {
        const result = await axios.get('http://api.open-notify.org/iss-now.json')
        setIssPosition({
            id: 'international-space-satan',
            color: 'red',
            coordinates: [result.data.iss_position.latitude, result.data.iss_position.longitude],
            value: 50,
        })

        if (!initialCoords) {
            setinitialCoords([result.data.iss_position.latitude, result.data.iss_position.longitude])
        }
    }, [initialCoords])

    useEffect(() => {
        (async () => updateIssPosition())()
    }, [])

    useEffect(() => {
        if (initialCoords) {
            setInterval(() => updateIssPosition(), 5000);
        }
    }, [initialCoords])

    return (
        <div className="w-full h-screen">
            {initialCoords && <ReactGlobe
                markers={[issPosition]}
                initialCoordinates={initialCoords}
            />}
        </div>
    )
}

export default ISSTrackerPage
