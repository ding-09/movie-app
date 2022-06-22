import React from 'react';
import FavoriteMovie from '../../components/favoriteMovie';

const FavoritesPage = () => {
  return (
    <>
      <h2 className='sub-heading'>My Favorites</h2>
      <FavoriteMovie />
    </>
  );
};

export default FavoritesPage;
