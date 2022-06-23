import React from 'react';
import FavoriteMovie from '../../components/favoriteMovie';
import { Container } from './style';

const FavoritesPage = () => {
  const movies = JSON.parse(localStorage.getItem('favorites'));
  return (
    <>
      <h2 className='sub-heading'>My Favorites</h2>
      <Container>
        {movies &&
          movies.map((movie, idx) => <FavoriteMovie movie={movie} key={idx} />)}
      </Container>
    </>
  );
};

export default FavoritesPage;
