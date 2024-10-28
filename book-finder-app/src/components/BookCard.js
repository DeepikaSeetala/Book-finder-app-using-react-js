import React from 'react';
import './BookCard.css'; // Optional: Add specific styles for BookCard

const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(', ') || 'Unknown Author'}</p>
            <p>{book.volumeInfo.publishedDate}</p>
        </div>
    );
};

export default BookCard;