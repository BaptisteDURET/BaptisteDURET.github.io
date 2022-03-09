import { render, screen } from '@testing-library/react';
import Formulaire from './Formik';

test('renders learn react link', () => {
  render(<Formulaire />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
