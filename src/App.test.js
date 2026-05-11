// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RhoCrypto title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RhoCrypto/i);
    expect(titleElement).toBeInTheDocument();
});
