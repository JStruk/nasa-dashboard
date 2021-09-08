import { fireEvent, render, screen } from "@testing-library/react";
import ModalWithButton from "components/ModalWithButton";

describe('ModalWithButton', () => {
    it('should render', async () => {
        render(<ModalWithButton isOpen={true} setModalIsOpen={jest.fn()} />)

        const modalElement = await screen.findByTestId('modal-window')
        expect(modalElement).toBeInTheDocument()
    })

    it('should call the modalIsOpen handler when the close modal button is clicked', () => {
        const mockSetModalIsOpen = jest.fn()
        render(<ModalWithButton isOpen={true} setModalIsOpen={ mockSetModalIsOpen } />)

        fireEvent.click(screen.getByTestId('close-modal-button'))
        expect(mockSetModalIsOpen).toHaveBeenCalledTimes(1)
    })
})
