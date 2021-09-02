import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', async () => {
  const wrapper = render(<App />);

  const mainDiv = await wrapper.getByTestId('main-div')

  expect(mainDiv).toBeInTheDocument()
});


