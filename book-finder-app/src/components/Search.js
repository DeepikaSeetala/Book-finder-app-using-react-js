import React, { useState } from 'react';
import axios from 'axios';
import './Search.css'; // Optional: Add specific styles for Search

const Search = ({ setBooks }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query) return; // Prevent search if input is empty

        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
            setBooks(response.data.items || []);
        } catch (error) {
            console.error("Error fetching data:", error);
            setBooks([]); // Reset books on error
        }
    };

    return (
        <form className="search-form" onSubmit={handleSearch}>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for books..." 
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;