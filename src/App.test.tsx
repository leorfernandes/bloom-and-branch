import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Test to ensure the "learn react" link is rendered in the App component
test('renders "learn react" link', () => {
  // Render the App component
  render(<App />);

  // Find the element containing the text "learn react" (case-insensitive)
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the element is present in the document
  expect(linkElement).toBeInTheDocument();
});
