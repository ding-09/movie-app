import { useState } from 'react';
import axios from 'axios';

const useMovieModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [movieData, setMovieData] = useState({});

  const openModal = async (name) => {
    // fetch movie
    const url = `//www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${name}`;
    const response = await axios.get(url);
    const data = await response.data;
    setMovieData(data)

    // toggle modal state
    setShowModal(true);
  };

  const closeModal = () => {
    // reset to initial state
    setShowModal(false);
  };

  return [movieData, showModal, openModal, closeModal];
};

export default useMovieModal;
