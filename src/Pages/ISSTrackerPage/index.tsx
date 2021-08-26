import ReactGlobe, {Marker} from 'react-globe'
import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';

const ISSTrackerPage = (): JSX.Element => {
    const [issPosition, setIssPosition] = useState<Marker>(
        {
            id: 'international-space-satan',
            color: 'red',
            coordinates: [0,0],
            value: 50,
        }
    );

    const updateIssPosition = useCallback(async () => {
        const result = await axios.get('http://api.open-notify.org/iss-now.json')
        setIssPosition({
            id: 'international-space-satan',
            color: 'red',
            coordinates: [result.data.iss_position.latitude, result.data.iss_position.longitude],
            value: 50,
        })
    }, []);

    useEffect(() => {
        setInterval(() => updateIssPosition(), 5000);
    }, [])

    return (
        <div className="w-full h-screen">
            <ReactGlobe
                markers={[issPosition]}
            />
        </div>
    )
}

export default ISSTrackerPage
