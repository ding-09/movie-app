export const getFavoriteMovies = () => {
  const movies = JSON.parse(localStorage.getItem('favorites')) ?? [];
  return movies;
};

// add to storage
export const setFavoriteMovie = (movie) => {
  const movies = getFavoriteMovies();
  movies.push(movie);
  localStorage.setItem('favorites', JSON.stringify(movies));
};

export const removeFavoriteMovie = (movie) => {
  const movies = getFavoriteMovies();
  const newMovies = movies.filter(
    (storedMovie) => storedMovie.imdbID !== movie.imdbID
  );
  localStorage.setItem('favorites', JSON.stringify(newMovies));
};
