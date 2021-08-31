import ReactGlobe, {Marker, Coordinates} from 'react-globe'
import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';

const ISSTrackerPage = (): JSX.Element => {
    const initialMarker: Marker =  {
        id: 'international-space-satan',
        color: 'red',
        coordinates: [0, 0],
        value: 50,
    }
    const [issPosition, setIssPosition] = useState<Marker>(
        initialMarker
    );

    const [initialCoords, setinitialCoords] = useState<Coordinates | undefined>()
    const [coordinates, setCoordinates] = useState<Marker[]>([initialMarker])

    const updateIssPosition = async () => {
        const result = await axios.get('http://api.open-notify.org/iss-now.json')
        const newMarkers: Marker[] = [...coordinates];
        newMarkers.push({
            id: 'international-space-satan' + Math.random(),
            color: 'red',
            coordinates: [result.data.iss_position.latitude, result.data.iss_position.longitude],
            value: 50,
        })

        setCoordinates(newMarkers)
        // eslint-disable-next-line no-console
        console.log({newMarkers});

        if (!initialCoords) {
            setinitialCoords([result.data.iss_position.latitude, result.data.iss_position.longitude])
        }
    }

    useEffect(() => {
        (async () => updateIssPosition())()
    }, [])

    const UPDATEFOOO = async () => {
        await updateIssPosition()
        setTimeout(UPDATEFOOO, 5000)
    }

    useEffect(() => {
        if (initialCoords) {
            setTimeout(UPDATEFOOO, 5000);
        }
    }, [initialCoords])

    return (
        <div className="w-full h-screen">
            {initialCoords && <ReactGlobe
                markers={coordinates}
                initialCoordinates={initialCoords}
            />}
        </div>
    )
}

export default ISSTrackerPage
