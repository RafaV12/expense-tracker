import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', async () => {
  it('renders Landing page', () => {
    // ARRANGE
    render(<App />, { wrapper: BrowserRouter });

    // ACT

    // ASSERT
    expect(screen.getByText('Get started')).toBeInTheDocument();
  });
});
