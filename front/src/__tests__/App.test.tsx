import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);
  const linkElement = screen.getByText(/My Todo App/);
  expect(linkElement).toBeInTheDocument();
});