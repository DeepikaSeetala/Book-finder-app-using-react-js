import React, { useState } from 'react';
import Search from '../components/Search';
import BookCard from '../components/BookCard';
import './Home.css'; // Ensure this imports the correct CSS

const Home = () => {
    const [books, setBooks] = useState([]);

    return (
        <div className="home">
            <h2>Welcome to the Boundless Books!</h2>
            <p className="intro-text">
                Discover your next great read! Use the search bar below to find books by title or author.
            </p>
            <Search setBooks={setBooks} />
            <div className="book-list">
                {books.length > 0 ? (
                    books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))
                ) : (
                    <p>Give a try.</p>
                )}
            </div>
        </div>
    );
};

export default Home;