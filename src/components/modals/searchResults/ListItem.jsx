import React, { useState } from 'react';
import imgPlaceholder from '../../../assets/No-Image-Placeholder.svg.png';
import { ListItemContainer, Figure, MovieInfoContainer } from './style';
import MovieDetailsModal from '../movieDetails';
import useMovieModal from '../../../hooks/useMovieModal';

const ListItem = ({ movie }) => {
  const [movieData, showModal, openModal, closeModal] = useMovieModal();
  const [modal, setModal] = useState(false);
  return (
    <ListItemContainer
      onClick={() => {
        setModal(!modal);
        openModal(movie.Title);
      }}
    >
      {modal && (
        <MovieDetailsModal movieData={movieData} closeModal={closeModal} />
      )}
      <Figure>
        <img
          src={movie.Poster === 'N/A' ? imgPlaceholder : movie.Poster}
          alt={movie.Title}
        />
      </Figure>
      <MovieInfoContainer>
        <h1>{movie.Title}</h1>
        <p className='year'>{movie.Year}</p>
        <p className='type'>{movie.Type}</p>
      </MovieInfoContainer>
    </ListItemContainer>
  );
};

export default ListItem;
