import React from 'react';

type Book = {
  title: string;
  subtitle: string;
  image: string;
  url: string;
};

type BookListProps = {
  books: Book[];
};

const BookList = ({ books }: BookListProps) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.url}>
          <h3>{book.title}</h3>
          <h4>{book.subtitle}</h4>
          <img src={book.image} alt={book.title} />
          <a href={book.url} target="_blank" rel="noopener noreferrer">
            More Details
          </a>
        </li>
      ))}
    </ul>
  );
};
export default BookList;
