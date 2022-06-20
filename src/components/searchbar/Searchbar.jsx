import React, { useState } from 'react';
import axios from 'axios';
import { Form, InputGroup } from './style';
import { FaTimes } from 'react-icons/fa';
import { useMovieResults } from '../../providers/MovieResultsProvider';

const Searchbar = ({ toggleHeader }) => {
  const resultsContext = useMovieResults();

  const [searchName, setSearchName] = useState('');

  // handle form events
  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchByName(searchName);
  };

  const handleClose = () => {
    toggleHeader();

    // reset search
    setSearchName('');

    // reset results in context to empty array
    resultsContext.setMovieResults([]);
  };

  // movie search function
  const apiKey = '8b97ec88';

  const searchByName = async (name) => {
    const url = `//www.omdbapi.com/?apikey=${apiKey}&s=${name}`;
    const response = await axios.get(url);
    resultsContext.setMovieResults(response.data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <input
          type='text'
          name='search'
          value={searchName}
          id='search'
          placeholder='Search movie, TV show, IMDB ID'
          onChange={handleChange}
        />
        <FaTimes color='#faf9f9' size={'14px'} onClick={handleClose} />
      </InputGroup>
    </Form>
  );
};

export default Searchbar;
