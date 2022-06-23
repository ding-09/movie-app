import React from 'react';
import FavoriteMovie from '../../components/favoriteMovie';
import { Container } from './style';
import { useMovies } from '../../providers/MoviesProvider';

const FavoritesPage = () => {
  const { movies } = useMovies();

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
