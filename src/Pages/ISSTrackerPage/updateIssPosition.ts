import axios from "axios";
import { Coordinates, Marker } from "react-globe";
import { v4 } from "uuid";

export const updateIssPosition = async (): Promise<Marker> => {
    const result = await axios.get('http://api.open-notify.org/iss-now.json')
    const coordinates: Coordinates = [Number(result.data.iss_position.latitude), Number(result.data.iss_position.longitude)]

    return {
        id: 'international-space-satan-' + v4(),
        color: 'red',
        coordinates,
        value: 50,
    }
}
