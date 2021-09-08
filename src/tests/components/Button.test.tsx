import { render, screen } from "@testing-library/react";
import Button from "components/Button";

describe('Button', () => {
    it('should render a button', () => {
        render(<Button onClick={ jest.fn() } id='button123' testId='button-test-id' />);
        const buttonElement = screen.getByTestId('button-test-id');
        expect(buttonElement).toBeInTheDocument();
    });
})
