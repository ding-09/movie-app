import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ModalContainer, Figure, MainInfo, SubInfo } from './style';
import { FaTimes } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';
import { TbHeartOff } from 'react-icons/tb';
import { AiFillStar } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { useMovies } from '../../../providers/MoviesProvider';
import {
  setFavoriteMovie,
  removeFavoriteMovie,
} from '../../../utils/favorites';

const MovieDetailsModal = ({ movieData, closeModal }) => {
  const {
    Title,
    Poster,
    Runtime,
    Rated,
    Year,
    Genre,
    Actors,
    Plot,
    Type,
    imdbRating,
  } = movieData;

  const [favBtn, showFavBtn] = useState(true);

  // MOVIES CONTEXT
  const { movies, addMovie, removeMovie } = useMovies();

  // add movie with validation
  const addMovieWithCheck = (movie) => {
    if (movies.some((m) => m.imdbID === movie.imdbID)) {
      return;
    } else {
      addMovie(movie);
    }
  };

  // toggle button state
  const toggleBtn = () => {
    showFavBtn(!favBtn);
  };

  // set initial button state
  useEffect(() => {
    // check if movie is favorited
    if (movies.some((m) => m.imdbID === movieData.imdbID)) {
      // if this conditional is true,
      // that means there is a match against localStorage
      toggleBtn(!favBtn);
    }
  }, []);

  return (
    <ModalContainer
      animate={{
        scale: [0, 1],
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <FaTimes onClick={closeModal} />
      <Figure>
        <img src={Poster} alt='Movie Title' />
      </Figure>
      <MainInfo>
        <h1 className='movie-title'>{Title}</h1>
        <div className='misc-info'>
          {Year} <BsDot /> {Rated} <BsDot /> {Runtime} <BsDot /> {Type}
        </div>
        <div className='rating'>
          <AiFillStar />
          <span className='rated'>{imdbRating} </span>
          <span className='total'> / 10</span>
        </div>
        {favBtn ? (
          <button
            className='btn fav-btn'
            onClick={(e) => {
              addMovieWithCheck(movieData);
              setFavoriteMovie(movieData);
              toggleBtn(e);
            }}
          >
            <IoIosHeart />
            Add to favorites
          </button>
        ) : (
          <button
            className='btn remove-btn'
            onClick={(e) => {
              closeModal();
              removeMovie(movieData);
              removeFavoriteMovie(movieData);
              toggleBtn();
            }}
          >
            <TbHeartOff />
            Remove from favorites
          </button>
        )}

        <div className='line'></div>
      </MainInfo>
      <SubInfo>
        <p className='plot'>{Plot}</p>
        <p className='cast'>
          <span>Cast: </span>
          {Actors}
        </p>
        <p className='genre'>
          <span>Genre: </span>
          {Genre}
        </p>
      </SubInfo>
    </ModalContainer>
  );
};

export default MovieDetailsModal;
