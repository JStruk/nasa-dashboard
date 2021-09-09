import { fireEvent, render, screen } from "@testing-library/react";
import Sidebar from "components/Sidebar";
import { BrowserRouter } from "react-router-dom";

describe('Sidebar', () => {
    const renderComponent = (isToggled = false, isCollapsed = false) => {
        render(
            <BrowserRouter>
                <Sidebar toggle={isToggled} collapsible={isCollapsed}/>
            </BrowserRouter>
        )
    }

    it('should render the APOD page link in the sidebar', () => {
        renderComponent()

        const APODLinkElement = screen.getByText('Astronomy Pic OTD');
        expect(APODLinkElement).toBeInTheDocument();
    });

    it('should render the Near Earth Objects page link in the sidebar', () => {
        renderComponent()

        const NEOLinkElement = screen.getByText('Near Earth Objects');
        expect(NEOLinkElement).toBeInTheDocument();
    });

    it('should render the Mars Rover page link in the sidebar', () => {
        renderComponent()

        const RoverLinkElement = screen.getByText('Mars Rover');
        expect(RoverLinkElement).toBeInTheDocument();
    });

    it('should render the ISS Tracker page link in the sidebar', () => {
        renderComponent()

        const ISSTrackerLinkElement = screen.getByText('ISS Tracker');
        expect(ISSTrackerLinkElement).toBeInTheDocument();
    });

    it('should collapse the sidebar when collapse button clicked', () => {
        renderComponent(true)

        const collapseButton = screen.getByTestId('collapseButton')
        const sideBarElement = screen.getByTestId('sidebar')
        fireEvent.click(collapseButton)

        expect(sideBarElement).toHaveClass('collapsed')
    })

    it('should start collapsed if collapse prop is set to true', () => {
        renderComponent(false, true)

        const sideBarElement = screen.getByTestId('sidebar')
        expect(sideBarElement).toHaveClass('collapsed')
    })

    it('should set toggle and collapsible to false by default', () => {
        render(<BrowserRouter><Sidebar /></BrowserRouter>)

        const sideBarElement = screen.getByTestId('sidebar')
        const collapseButtonElement = screen.queryByTestId('collapseButton')

        expect(sideBarElement).not.toHaveClass('collapsed')
        expect(collapseButtonElement).not.toBeInTheDocument()
    })
})
