import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import { getBookDetails } from '../api';

type RouteParams = {
  isbn13: string;
};

const BookDetails: React.FC = () => {
  const { isbn13 } = useParams<RouteParams>();
  const [bookDetails, setBookDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookDetails = async () => {
      setLoading(true);
      setError('');

      try {
        if (isbn13) {
          const data = await getBookDetails(isbn13);
          setBookDetails(data);
        } else {
          // isbn13이 없는 경우
          console.log('ISBN13에 대한 값이 없습니다.');
        }
      } catch (error) {
        setError('책의 상세정보를 얻는데 실패했습니다. 다시 시도해주세요.');
      }

      setLoading(false);
    };

    fetchBookDetails();
  }, [isbn13]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!bookDetails) {
    return null;
  }

  return <BookDetail {...bookDetails} />;
};

export default BookDetails;
