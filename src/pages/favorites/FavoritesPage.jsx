import React from 'react';
import FavoriteMovie from '../../components/favoriteMovie';

const FavoritesPage = () => {
  const movies = JSON.parse(localStorage.getItem('favorites'));
  return (
    <>
      <h2 className='sub-heading'>My Favorites</h2>
      {movies && movies.map((movie) => <FavoriteMovie movie={movie} />)}
    </>
  );
};

export default FavoritesPage;
