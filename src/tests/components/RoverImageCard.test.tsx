import { render } from "@testing-library/react";
import RoverImageCard from "components/RoverImageCard";
import { RoverImageMock } from "../mocks/RoverMocks";

describe('RoverImageCard', () => {

    it('should render', () => {
        render(<RoverImageCard src='' roverImage={RoverImageMock} />)
    })
})
