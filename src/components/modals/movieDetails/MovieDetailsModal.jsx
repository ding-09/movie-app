import React, { useState } from 'react';
import { ModalContainer, Figure, MainInfo, SubInfo } from './style';
import { FaTimes } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';
import { TbHeartOff } from 'react-icons/tb'
import { AiFillStar } from 'react-icons/ai';
import { useMovies } from '../../../providers/MoviesProvider';

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
  const { addMovie } = useMovies();

  // add to storage
  const addToStorage = (movie) => {
    const movies = JSON.parse(localStorage.getItem('favorites')) ?? [];
    movies.push(movie);
    localStorage.setItem('favorites', JSON.stringify(movies));
  };

  // toggle button state
  const toggleBtn = () => {
    showFavBtn(!favBtn);
  };

  return (
    <ModalContainer>
      <FaTimes onClick={closeModal} />
      <Figure>
        <img src={Poster} alt='Movie Title' />
      </Figure>
      <MainInfo>
        <h1 className='movie-title'>{Title}</h1>
        <div className='misc-info'>
          {Year} - {Rated} - {Runtime} - {Type}
        </div>
        <div className='rating'>
          <AiFillStar />
          <span className='rated'>{imdbRating} </span>
          <span className='total'> / 10</span>
        </div>
        {favBtn ? (
          <button
            className='btn fav-btn'
            onClick={() => {
              addMovie(movieData);
              addToStorage(movieData);
              toggleBtn();
            }}
          >
            <IoIosHeart />
            Add to favorites
          </button>
        ) : (
          <button
            className='btn remove-btn'
            onClick={() => {
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
