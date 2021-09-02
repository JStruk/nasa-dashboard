import { act, render, screen, waitFor } from "@testing-library/react";
import ISSTrackerPage from "../../../Pages/ISSTrackerPage";
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

jest.mock('../../../Pages/ISSTrackerPage/updateIssPosition', () => {
    return {
        updateIssPosition: () => ({
            id: 'markerId',
            color: 'red',
            coordinates: [1, 1],
            value: 50,
        })
    }
})

describe('ISSTrackerPage', () => {
    const mock: MockAdapter = new MockAdapter(axios)

    beforeEach(() => {
        mock.resetHistory();
    })

    // eslint-disable-next-line prefer-regex-literals
    mock.onGet(new RegExp('api.open-notify.org')).reply(() => [200, { iss_position: { latitude: '1', longitude: '1' } }])

    it.skip('should render', async () => {
        act(() => {
            render(<ISSTrackerPage/>)
        })

        const mainISSPageElement = screen.getByTestId('main-iss-div')

        await waitFor(() => expect(mainISSPageElement).toBeInTheDocument())
    })

    it.skip('should render each APOD in a card on the page', async () => {
        // await render(<ISSTrackerPage/>)
        //
        // expect(mock.history.get).toHaveLength(1)
        //
        // await waitFor(() => expect(screen.getAllByTestId(/apod-\d/)).toHaveLength(2));
    })
})
