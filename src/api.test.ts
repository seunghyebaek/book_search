import axios from 'axios';
import { searchBooks, getBookDetails } from './api';

jest.mock('axios');

describe('API', () => {
  test('searchBooks calls API with correct parameters', async () => {
    const mockResponse = {
      data: {
        books: [
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
        ],
      },
    };

    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    const keyword = 'javascript';
    const pageNumber = 1;

    const data = await searchBooks(keyword, pageNumber);

    expect(axios.get).toHaveBeenCalledWith(
      'https://api.itbook.store/1.0/search/javascript/1'
    );
    expect(data).toEqual(mockResponse.data);
  });

  test('getBookDetails calls API with correct parameters', async () => {
    const mockResponse = {
      data: {
        title: 'Book 1',
        subtitle: 'Subtitle 1',
        authors: 'Author 1',
        publisher: 'Publisher 1',
        pages: '100',
        rating: '4',
        desc: 'Book description',
        price: '$9.99',
        image: 'book1.jpg',
      },
    };

    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    const isbn13 = '1234567890';

    const data = await getBookDetails(isbn13);

    expect(axios.get).toHaveBeenCalledWith(
      'https://api.itbook.store/1.0/books/1234567890'
    );
    expect(data).toEqual(mockResponse.data);
  });
});
