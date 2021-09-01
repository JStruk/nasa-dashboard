import ReactGlobe, {Coordinates, Marker} from 'react-globe'
import axios from 'axios';
import {useEffect, useState} from 'react';

const ISSTrackerPage = (): JSX.Element => {
    const initialMarker: Marker = {
        id: 'international-space-satan',
        color: 'red',
        coordinates: [0, 0],
        value: 50,
    }
    // const [issPosition, setIssPosition] = useState<Marker>(
    //     initialMarker
    // );

    const [initialCoords, setinitialCoords] = useState<Coordinates | undefined>()
    const [issPositionHistory, setIssPositionHistory] = useState<Marker[]>([initialMarker])

    const getNewIssLatLonFromApi = async (): Promise<Coordinates> => {
        const result = await axios.get('http://api.open-notify.org/iss-now.json')
        return [result.data.iss_position.latitude, result.data.iss_position.longitude]
    }

    const updateIssPosition = async () => {
        const newestPosition = await getNewIssLatLonFromApi()
        if (!initialCoords) {
            setinitialCoords(newestPosition)
        }

        const crapfackulateTheId = (id: string): string => {
            return (id.length > 50
                ? id.substr(50 - id.length)
                : id) + Math.random()
        }

        let newMarkers: Marker[] = [...issPositionHistory]
            // de-satan the initial marker:
            .filter(marker => marker.id !== 'international-space-satan')
            // age the markers and adjust colour:
            .map(marker => ({
                ...marker,
                value: marker.value - 0.5,
                color: `rgba(${Math.round(5.1 * marker.value)}, ${Math.round(2.55 * marker.value)}, 0, 1)`,
            }))
            // kill the elderly:
            .filter(marker => marker.value > 0)
            // give them all new IDs:
            .map(marker => ({...marker, id: crapfackulateTheId(marker.id)}))

        newMarkers = newMarkers.concat([{
            id: 'international-space-satan' + Math.random(),
            color: 'red',
            coordinates: newestPosition,
            value: 50,
        }])

        setIssPositionHistory(newMarkers)
    }

    useEffect(() => {
        (async () => updateIssPosition())()
    }, [])

    const UPDATEFOOO = async () => {
        await updateIssPosition()
        // setTimeout(UPDATEFOOO, 5000)
    }

    useEffect(() => {
        if (initialCoords) {
            const fleemBucket = setTimeout(UPDATEFOOO, 5000);
            return () => clearTimeout(fleemBucket)
        }
    }, [initialCoords, issPositionHistory])

    return (
        <div className="w-full h-screen">
            {initialCoords && <ReactGlobe
                markers={issPositionHistory}
                initialCoordinates={initialCoords}
            />}
        </div>
    )
}

export default ISSTrackerPage
