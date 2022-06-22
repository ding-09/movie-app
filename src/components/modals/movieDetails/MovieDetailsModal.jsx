import React from 'react';
import { ModalContainer, Figure, MainInfo, SubInfo } from './style';
import { FaTimes } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';

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
        <button className='fav-btn'>
          <IoIosHeart />
          Add to favorites
        </button>
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
