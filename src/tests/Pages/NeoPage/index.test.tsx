import { render, screen, waitFor } from "@testing-library/react";
import NeoPage from "../../../Pages/NeoPage";
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { NeoMocks } from "../../mocks/NeoMocks";
import MockDate from 'mockdate'

describe('NeoPage', () => {
    const MOCK_DATE = Object.keys(NeoMocks.near_earth_objects)[0]
    const mock: MockAdapter = new MockAdapter(axios)

    beforeEach(() => {
        MockDate.set(MOCK_DATE)
        mock.resetHistory();
    })

    // eslint-disable-next-line prefer-regex-literals
    mock.onGet(new RegExp('neo')).reply(() => [200, NeoMocks])

    it('should render', async () => {
        render(<NeoPage/>)

        const mainNeoPageElement = screen.getByTestId('main-neo-div')

        await waitFor(() => { expect(mainNeoPageElement).toBeInTheDocument() })
    })

    it('should render each near earth object', async () => {
        await render(<NeoPage/>)

        expect(mock.history.get).toHaveLength(1)

        await waitFor(() => expect(screen.getAllByTestId(/neo-div-\d/)).toHaveLength(2));
    })
})
