import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favMovies, setFavMovies] = useState([]);

  const addMovie = (movie) => {
    setFavMovies([...favMovies, movie]);
    return movies;
  };

  const removeMovie = (movieTitle) => {
    setFavMovies(movies.filter((movie) => movie.Title !== movieTitle));
    return movies;
  };

  const value = { favMovies, addMovie, removeMovie };
  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

const useMovies = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useMovies must be used within a FavoritesProvider');
  }
  return context;
};

export { FavoritesProvider, useMovies };
