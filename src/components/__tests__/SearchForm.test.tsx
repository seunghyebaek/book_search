import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../SearchForm';

describe('SearchForm', () => {
  test('renders input and submit button', () => {
    render(<SearchForm onSubmit={() => {}} />);
    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /search/i });

    expect(inputElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('calls onSubmit handler with keyword when form is submitted', () => {
    const handleSubmit = jest.fn();
    render(<SearchForm onSubmit={handleSubmit} />);
    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /search/i });
    const keyword = 'javascript';

    fireEvent.change(inputElement, { target: { value: keyword } });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(keyword);
  });
});
