import React from 'react'
import { render, screen, waitFor, act, fireEvent } from "@testing-library/react";
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { RoverMocks } from "../../mocks/RoverMocks";
import RoverPage from "../../../Pages/RoverPage";

jest.mock('react-xarrows', () => "div")

describe('RoverPage', () => {
    const mock: MockAdapter = new MockAdapter(axios)

    beforeEach(() => {
        mock.resetHistory();
    })

    // eslint-disable-next-line prefer-regex-literals
    mock.onGet(new RegExp('mars-photos')).reply(() => [200, RoverMocks])

    it('should render', async () => {
        render(<RoverPage/>)

        const mainRoverPageElement = screen.getByTestId('main-rover-div')

        await waitFor(() => { expect(mainRoverPageElement).toBeInTheDocument() })
    })

    it('should show a modal with pictures from the mast camera when the mast button camera is clicked', async () => {
        await render(<RoverPage/> )

        const mastCamButton = await screen.getByTestId('mast-cam-button')
        fireEvent.click(mastCamButton)

        await waitFor(() => expect(screen.getByTestId('rover-images-div-in-modal')).toBeInTheDocument());
        const closeModalButton = screen.getByTestId('close-modal-button')
        expect(closeModalButton).toBeInTheDocument()
        await waitFor(() => expect(screen.getAllByTestId(/modal-img-\d/)).toHaveLength(2));
    })
})
