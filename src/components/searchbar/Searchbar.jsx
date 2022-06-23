import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Form, InputGroup } from './style';
import { FaTimes } from 'react-icons/fa';
import SearchResultsModal from '../modals/searchResults';

const Searchbar = ({ toggleHeader }) => {
  // state for movie name
  const [movieName, setMovieName] = useState('');

  // state for search results
  const [searchResults, setSearchResults] = useState([]);

  // handle form & input events
  const handleChange = (e) => {
    setMovieName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // check to see if user entered id or name
    // check id against regex pattern
    const pattern = /\btt\d{7,}/;
    if (pattern.test(movieName)) {
      getMovieById(movieName);
    } else {
      getMoviesByName(movieName);
    }
  };

  const handleClose = () => {
    toggleHeader();

    // reset state
    setMovieName('');
    setSearchResults([]);
  };

  // movie search function
  const apiKey = process.env.REACT_APP_API_KEY;

  const getMoviesByName = async (name) => {
    const url = `//www.omdbapi.com/?apikey=${apiKey}&s=${name}`;
    const response = await axios.get(url);
    setSearchResults(response.data.Search);
  };

  const getMovieById = async (id) => {
    const url = `//www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
    const response = await axios.get(url);
    setSearchResults([response.data]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <input
            autoFocus
            type='text'
            name='search'
            value={movieName}
            id='search'
            placeholder='Search movie, TV show, IMDB ID'
            onChange={handleChange}
          />
          <FaTimes color='#faf9f9' size={'14px'} onClick={handleClose} />
        </InputGroup>
      </Form>
      <SearchResultsModal searchResults={searchResults} />
    </>
  );
};

export default Searchbar;
