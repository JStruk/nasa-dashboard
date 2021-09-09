import { render, screen } from '@testing-library/react';
import App from './App';
import { Props } from "react-globe";
import React from "react";

jest.mock('react-media')

const mockReactMediaComponent = jest.fn();
// eslint-disable-next-line react/display-name
jest.mock('react-media', () => (props: Props) => {
    mockReactMediaComponent(props);
    return <div/>;
})

test('renders the app', async () => {
    render(<App/>);

    const mainDiv = await screen.getByTestId('main-div')
    expect(mainDiv).toBeInTheDocument()
    expect(mockReactMediaComponent).toHaveBeenCalled()
});


