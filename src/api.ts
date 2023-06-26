import axios from 'axios';

const API_BASE_URL = 'https://api.itbook.store/1.0';

export const searchBooks = async (keyword: string, pageNumber: number) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/search/${keyword}/${pageNumber}`
    );
    return response.data;
  } catch (error) {
    console.error('Error searching books:', error);
    throw error;
  }
};

export const getBookDetails = async (isbn13: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books/${isbn13}`);
    return response.data;
  } catch (error) {
    console.error('Error getting book details:', error);
    throw error;
  }
};
