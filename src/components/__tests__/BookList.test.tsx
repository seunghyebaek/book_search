import React from 'react';
import { render, screen } from '@testing-library/react';
import BookList from '../BookList';

const mockBooks = [
  {
    title: 'Book 1',
    subtitle: 'Subtitle 1',
    image: 'book1.jpg',
    url: 'https://example.com/book1',
  },
  {
    title: 'Book 2',
    subtitle: 'Subtitle 2',
    image: 'book2.jpg',
    url: 'https://example.com/book2',
  },
];

describe('BookList', () => {
  test('renders list of books', () => {
    render(<BookList books={mockBooks} />);
    const bookElements = screen.getAllByRole('listitem');

    expect(bookElements.length).toBe(2);

    expect(screen.getByText('Book 1')).toBeInTheDocument();
    expect(screen.getByText('Subtitle 1')).toBeInTheDocument();
    expect(screen.getByAltText('Book 1')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /more details/i })).toHaveAttribute(
      'href',
      'https://example.com/book1'
    );

    expect(screen.getByText('Book 2')).toBeInTheDocument();
    expect(screen.getByText('Subtitle 2')).toBeInTheDocument();
    expect(screen.getByAltText('Book 2')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /more details/i })).toHaveAttribute(
      'href',
      'https://example.com/book2'
    );
  });
});
