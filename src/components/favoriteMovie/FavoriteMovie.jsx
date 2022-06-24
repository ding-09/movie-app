import React, { useState } from 'react';
import { ItemContainer, Figure, MovieInfo, Button } from './style';
import { IoIosHeart } from 'react-icons/io';
import { BsDot } from 'react-icons/bs';
import useMovieModal from '../../hooks/useMovieModal';
import MovieDetailsModal from '../modals/movieDetails';
import { removeFavoriteMovie } from '../../utils/favorites';
import { useMovies } from '../../providers/MoviesProvider';

const FavoriteMovie = ({ movie }) => {
  const { Title, Runtime, Year, Rated, Actors, Poster, Type } = movie;
  const [movieData, showModal, openModal, closeModal] = useMovieModal();
  const [modal, setModal] = useState(false);

  const { removeMovie } = useMovies();
  return (
    <ItemContainer
      onClick={(e) => {
        setModal(!modal);
      }}
    >
      {modal && <MovieDetailsModal movieData={movie} closeModal={closeModal} />}
      <Figure>
        <img src={Poster} alt='' />
      </Figure>
      <MovieInfo>
        <h3 className='fav-movie-title'>{Title}</h3>
        <div className='misc-info'>
          {Year} <BsDot /> {Rated} <BsDot /> {Runtime} <BsDot /> {Type}
        </div>
        <p className='cast-info'>
          <span>Cast: </span>
          {Actors}
        </p>
        <Button className='like-btn'>
          <IoIosHeart
            onClick={(e) => {
              e.stopPropagation();
              removeMovie(movie);
              removeFavoriteMovie(movie);
            }}
          />
        </Button>
      </MovieInfo>
    </ItemContainer>
  );
};

export default FavoriteMovie;
