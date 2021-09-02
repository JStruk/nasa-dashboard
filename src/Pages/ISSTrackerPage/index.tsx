import ReactGlobe, { Marker, Coordinates } from 'react-globe'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid'
import { Sprite, SpriteMaterial, TextureLoader, WebGLRenderer } from "three";
import iss from '../../assets/iss.png'

const ISSTrackerPage = (): JSX.Element => {
    const UPDATE_MARKER_INTERVAL = 120000
    const [focus, setFocus] = useState<[number, number]>()

    const [initialCoords, setInitialCoords] = useState<Coordinates | undefined>()
    const [markers, setMarkers] = useState<Marker[]>([])

    const updateIssPosition = async () => {
        const result = await axios.get('http://api.open-notify.org/iss-now.json')
        const coordinates: [number, number] = [result.data.iss_position.latitude, result.data.iss_position.longitude]

        const newMarker: Marker = {
            id: 'international-space-satan-' + v4(),
            color: 'red',
            coordinates,
            value: 50,
        }

        setMarkers((markers) => {
            if (markers.length >= 49) {
                markers.shift()
            }
            if (markers.length > 1) markers[markers.length - 1].value = 25
            return [...markers, newMarker]
        })

        if (!initialCoords) {
            setInitialCoords([result.data.iss_position.latitude, result.data.iss_position.longitude])
        }

        setFocus(coordinates)
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
                focus={focus}
                options={{
                    focusDistanceRadiusScale: 3,
                    markerRenderer: marker => {
                        const { value } = marker

                        const map = new TextureLoader().load(iss);
                        const material = new SpriteMaterial({ map: map });
                        const sprite = new Sprite(material);

                        sprite.scale.set(value, value, 1)

                        return sprite
                    },
                    cameraAutoRotateSpeed: 0
                }}
            />}
        </div>
    )
}

export default ISSTrackerPage
