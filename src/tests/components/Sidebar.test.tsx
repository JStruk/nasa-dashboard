import { fireEvent, render, screen } from "@testing-library/react";
import Sidebar from "components/Sidebar";

describe('Sidebar', () => {
    it('should render the APOD page link in the sidebar', () => {
        render(<Sidebar />);
        const APODLinkElement = screen.getByText('Astronomy Pic OTD');
        expect(APODLinkElement).toBeInTheDocument();
    });

    it('should render the Near Earth Objects page link in the sidebar', () => {
        render(<Sidebar />);
        const NEOLinkElement = screen.getByText('Near Earth Objects');
        expect(NEOLinkElement).toBeInTheDocument();
    });

    it('should render the Mars Rover page link in the sidebar', () => {
        render(<Sidebar />);
        const RoverLinkElement = screen.getByText('Mars Rover');
        expect(RoverLinkElement).toBeInTheDocument();
    });

    it('should render the ISS Tracker page link in the sidebar', () => {
        render(<Sidebar />);
        const ISSTrackerLinkElement = screen.getByText('ISS Tracker');
        expect(ISSTrackerLinkElement).toBeInTheDocument();
    });

    it('should collapse the sidebar when collapse button clicked', () => {
        render(<Sidebar  toggle={true} />)
        const collapseButton = screen.getByTestId('collapseButton')
        const sideBarElement = screen.getByTestId('sidebar')

        fireEvent.click(collapseButton)

        expect(sideBarElement).toHaveClass('collapsed')
    })
})
