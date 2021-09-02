import { render, screen, waitFor } from "@testing-library/react";
import APODPage from "../../../Pages/APODPage";
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { mockApods } from "../../mocks/APODMocks";

describe('APODPage', () => {
    const mock: MockAdapter = new MockAdapter(axios)

    beforeEach(() => {
        mock.resetHistory();
    })

    // eslint-disable-next-line prefer-regex-literals
    mock.onGet(new RegExp('apod')).reply(() => [200, mockApods])

    it('should render', async () => {
        render(<APODPage/>)

        const mainApodPageElement = screen.getByTestId('apod-page-div')

        await waitFor(() => { expect(mainApodPageElement).toBeInTheDocument() })
    })

    it('should render each APOD in a card on the page', async () => {
        await render(<APODPage/>)

        expect(mock.history.get).toHaveLength(1)

        await waitFor(() => expect(screen.getAllByTestId(/apod-\d/)).toHaveLength(2));
    })
})
