import axios from "axios";
import { Coordinates, Marker } from "react-globe";
import { v4 } from "uuid";

export const updateIssPosition = async (): Promise<Marker> => {
    const result = await axios.get('https://api.wheretheiss.at/v1/satellites/25544')
    const coordinates: Coordinates = [Number(result.data.latitude), Number(result.data.longitude)]

    return {
        id: 'international-space-satan-' + v4(),
        color: 'red',
        coordinates,
        value: 50,
    }
}
