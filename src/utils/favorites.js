export const getFavoriteMovies = () => {
  const movies = JSON.parse(localStorage.getItem('favorites')) ?? [];
  return movies;
};
