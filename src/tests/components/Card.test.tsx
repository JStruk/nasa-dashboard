import { render, screen } from "@testing-library/react";
import Card from "../../components/Card";


describe('Card', () => {
    const mockAPOD = {
        title: 'MockAPOD1-Video',
        url: 'https://some-video-link.example.com',
        hdurl: '',
        explanation: '',
        media_type: 'video',
        date: ''
    }

    it('should render video types correctly', () => {
        render(<Card apod={mockAPOD} />)

        const videoLinkElement = screen.getByTestId('video-link')
        expect(videoLinkElement).toBeInTheDocument()
        expect(videoLinkElement).toHaveAttribute('href', mockAPOD.url)
    })
})
