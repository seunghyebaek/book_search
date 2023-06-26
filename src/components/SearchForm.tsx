import React, { useState } from 'react';

type SearchFormProps = {
  onSubmit: (keyword: string) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(keyword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter a keyword"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
