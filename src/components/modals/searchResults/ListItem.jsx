import React from 'react';
import imgPlaceholder from '../../../assets/No-Image-Placeholder.svg.png';
import { ListItemContainer, Figure, MovieInfoContainer } from './style';

const ListItem = ({ movie }) => {
  return (
    <ListItemContainer>
      <Figure>
        <img src={movie.Poster === 'N/A' ? imgPlaceholder : movie.Poster} alt={movie.Title} />
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
