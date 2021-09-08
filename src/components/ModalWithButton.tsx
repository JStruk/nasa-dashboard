import React, { useState } from "react";
import Modal from 'react-modal'
import Button from "./Button";

interface ModalWithButtonProps {
    isOpen: boolean,
    setModalIsOpen: (isOpen: boolean) => void
    children: any
}

const ModalWithButton: React.FC<ModalWithButtonProps> = ({ isOpen, children, setModalIsOpen }: ModalWithButtonProps) => {
    const [hideAppElement, setHideAppElement] = useState(false)

    if (process.env.NODE_ENV !== 'test'){
        Modal.setAppElement('#root')
        setHideAppElement(true)
    }

    return (
        <Modal ariaHideApp={hideAppElement} style={{
            overlay: {
                position: 'fixed',
                top: 0,
                left: '20%',
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
                position: 'absolute',
                top: '40px',
                left: '40px',
                right: '40px',
                bottom: '40px',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
            }
        }} isOpen={isOpen} data-testid="modal-window">
            <Button
                text="Close"
                id="close-modal-button"
                testId="close-modal-button"
                onClick={() => setModalIsOpen(false)}
                color='red'
            />
            {children}
        </Modal>
    )
}

export default ModalWithButton
