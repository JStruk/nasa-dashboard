import { act, render, screen, waitFor } from "@testing-library/react";
import ISSTrackerPage from "Pages/ISSTrackerPage";
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import React from "react";
import { Props } from "react-globe";

const mockReactGlobeComponent = jest.fn();
// eslint-disable-next-line react/display-name
jest.mock('react-globe', () => (props: Props) => {
    mockReactGlobeComponent(props);
    return <div/>;
})

describe('ISSTrackerPage', () => {
    const mock: MockAdapter = new MockAdapter(axios)

    beforeEach(() => {
        mock.resetHistory();
    })

    // eslint-disable-next-line prefer-regex-literals
    mock.onGet(new RegExp('api.wheretheiss.at')).reply(() => [200,
        {
            latitude: "1",
            longitude: "2"
        }
    ])

    it('should render', async () => {
        render(<ISSTrackerPage/>)

        const mainISSPageElement = await screen.findByTestId('main-iss-div')

        await waitFor(() => expect(mainISSPageElement).toBeInTheDocument())
    })

    it('should pass props through to the ReactGlobe component', async () => {
        render(<ISSTrackerPage/>)

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        await waitFor(() => {
        })
        expect(mockReactGlobeComponent).toHaveBeenNthCalledWith(2, expect.objectContaining({
            focus: [1, 2],
            initialCoordinates: [1, 2],
            markers: expect.any(Array),
            options: expect.objectContaining({
                cameraAutoRotateSpeed: 0,
                focusDistanceRadiusScale: 3,
                markerRenderer: expect.any(Function)
            })
        }))
    })
})
