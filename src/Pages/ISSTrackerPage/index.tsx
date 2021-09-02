import React, { useEffect, useState } from 'react';
import ReactGlobe, { Marker, Coordinates } from 'react-globe'
import { Sprite, SpriteMaterial, TextureLoader } from "three";
import iss from '../../assets/iss.png'
import { updateIssPosition } from "./updateIssPosition";

const ISSTrackerPage = (): JSX.Element => {
    const UPDATE_MARKER_INTERVAL = 120000
    const [focus, setFocus] = useState<Coordinates>()
    const [initialCoords, setInitialCoords] = useState<Coordinates>()
    const [markers, setMarkers] = useState<Marker[]>([])

    const getNewMarker = async () => {
        const marker = await updateIssPosition()
        setMarkers((markers) => {
            if (markers.length >= 49) {
                markers.shift()
            }
            if (markers.length > 1) markers[markers.length - 1].value = 25
            return [...markers, marker]
        })

        if (!initialCoords) {
            setInitialCoords(marker.coordinates)
        }

        setFocus(marker.coordinates)
    }

    useEffect(() => {
        (async () => getNewMarker())()
    }, [])

    const AddNewIssMarker = async () => {
        await getNewMarker()
        setTimeout(AddNewIssMarker, UPDATE_MARKER_INTERVAL)
    }

    useEffect(() => {
        if (initialCoords) {
            setTimeout(AddNewIssMarker, UPDATE_MARKER_INTERVAL);
        }
    }, [initialCoords])

    return (
        <div className="w-full h-screen" data-testid="main-iss-div">
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
