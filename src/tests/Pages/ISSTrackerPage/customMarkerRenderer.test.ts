import { customMarkerRenderer } from "Pages/ISSTrackerPage/customMarkerRenderer"
import { Marker } from "react-globe";
import { Object3D } from "three";

describe('CustomMarkerRenderer', () => {
    const mockMarker: Marker = {
        id: "international-space-satan-e6b81899-4482-4187-bb2f-63e4ee98c1e7",
        color: "red",
        coordinates: [-27.4822, -22.6525],
        value: 50
    }

    it('should return an Object3D object based off the marker provided', () => {
        const object3DInstance = customMarkerRenderer(mockMarker)

        expect(object3DInstance instanceof Object3D).toBe(true)
    })
})
