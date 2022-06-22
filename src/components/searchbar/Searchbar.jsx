import React, { useState } from 'react';
import axios from 'axios';
import { Form, InputGroup } from './style';
import { FaTimes } from 'react-icons/fa';
import SearchResultsModal from '../modals/searchResults';

const Searchbar = ({ toggleHeader }) => {
  // const resultsContext = useMovieResults();

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
    getMoviesByName(movieName);
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

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <input
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
