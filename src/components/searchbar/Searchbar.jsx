import React, { useState } from 'react';
import axios from 'axios';
import { Form, InputGroup } from './style';
import { FaTimes } from 'react-icons/fa';

const Searchbar = ({ toggleHeader }) => {
  const [searchName, setSearchName] = useState('');
  const [media, setMedia] = useState('');

  // handle form events
  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchByName(searchName);
  };

  // movie search function
  const apiKey = '8b97ec88';

  const searchByName = async (name) => {
    const url = `//www.omdbapi.com/?apikey=${apiKey}&s=${name}`;
    const response = await axios.get(url);
    setMedia(response.data);

    // movie data
    console.log(response.data)
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
        <FaTimes color='#faf9f9' size={'14px'} onClick={toggleHeader} />
      </InputGroup>
    </Form>
  );
};

export default Searchbar;
