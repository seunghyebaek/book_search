import React from 'react';

type BookDetailProps = {
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  pages: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
};

const BookDetail = (props: BookDetailProps) => {
  const {
    title,
    subtitle,
    authors,
    publisher,
    pages,
    rating,
    desc,
    price,
    image,
  } = props;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>Authors: {authors.join(', ')}</p>
      <p>Publisher: {publisher}</p>
      <p>Pages: {pages}</p>
      <p>Rating: {rating}</p>
      <p>{desc}</p>
      <p>Price: {price}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default BookDetail;
