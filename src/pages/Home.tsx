import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';
import { searchBooks } from '../api';

const Home: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (keyword: string) => {
    setKeyword(keyword);
    setPageNumber(1);
    setBooks([]);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      if (keyword) {
        setLoading(true);
        setError('');

        try {
          const data = await searchBooks(keyword, pageNumber);
          setBooks((prevBooks) => [...prevBooks, ...data.books]);
        } catch (error) {
          setError('Error searching books. Please try again later.');
        }

        setLoading(false);
      }
    };

    fetchBooks();
  }, [keyword, pageNumber]);

  const handleLoadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <BookList books={books} />
      {books.length > 0 && !loading && !error && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default Home;
