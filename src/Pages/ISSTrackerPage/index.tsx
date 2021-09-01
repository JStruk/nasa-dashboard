import ReactGlobe, { Marker, Coordinates } from 'react-globe'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid'

const ISSTrackerPage = (): JSX.Element => {
    const UPDATE_MARKER_INTERVAL = 30000

    const [initialCoords, setinitialCoords] = useState<Coordinates | undefined>()
    const [markers, setMarkers] = useState<Marker[]>([])

    const updateIssPosition = async () => {
        const result = await axios.get('http://api.open-notify.org/iss-now.json')

        const newMarker: Marker = {
            id: 'international-space-satan-' + v4(),
            color: 'red',
            coordinates: [result.data.iss_position.latitude, result.data.iss_position.longitude],
            value: 50,
        }

        setMarkers((markers) => {
            if(markers.length >= 49) {
                markers.shift()
            }
            return [...markers, newMarker]
        })

        if (!initialCoords) {
            setinitialCoords([result.data.iss_position.latitude, result.data.iss_position.longitude])
        }
    }

    useEffect(() => {
        (async () => updateIssPosition())()
    }, [])

    const AddNewIssMarker = async () => {
        await updateIssPosition()
        setTimeout(AddNewIssMarker, UPDATE_MARKER_INTERVAL)
    }

    useEffect(() => {
        if (initialCoords) {
            setTimeout(AddNewIssMarker, UPDATE_MARKER_INTERVAL);
        }
    }, [initialCoords])

    return (
        <div className="w-full h-screen">
            {initialCoords && <ReactGlobe
                markers={markers}
                initialCoordinates={initialCoords}
                options={{ cameraAutoRotateSpeed: 0 }}
            />}
        </div>
    )
}

export default ISSTrackerPage
