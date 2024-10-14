import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Re-Criação de OS heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Recriação de OS's no PrimeBuilder/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders confirmar button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Confirmar/i); // Atualize o texto do botão aqui
  expect(buttonElement).toBeInTheDocument();
});