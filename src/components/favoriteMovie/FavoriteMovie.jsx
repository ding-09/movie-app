import React, { useState } from 'react';
import { Container, Figure, MovieInfo } from './style';
import blankImg from '../../assets/No-Image-Placeholder.svg.png';
import { IoIosHeart } from 'react-icons/io';
import { BsDot } from 'react-icons/bs';
import useMovieModal from '../../hooks/useMovieModal';
import MovieDetailsModal from '../modals/movieDetails';

const FavoriteMovie = ({ movie }) => {
  const { Title, Runtime, Year, Rated, Actors, Poster, Type } = movie;
  const [movieData, showModal, openModal, closeModal] = useMovieModal();
  const [modal, setModal] = useState(false);
  return (
    <Container
      onClick={() => {
        setModal(!modal);
      }}
    >
      {modal && <MovieDetailsModal movieData={movie} closeModal={closeModal} />}
      <Figure>
        <img src={Poster} alt='' />
      </Figure>
      <MovieInfo>
        <h3 className='movie-title'>{Title}</h3>
        <div className='misc-info'>
          {Year} <BsDot /> {Rated} <BsDot /> {Runtime} <BsDot /> {Type}
        </div>
        <p className='cast-info'>
          <span>Cast: </span>
          {Actors}
        </p>
        <button className='like-btn'>
          <IoIosHeart />
        </button>
      </MovieInfo>
    </Container>
  );
};

export default FavoriteMovie;
