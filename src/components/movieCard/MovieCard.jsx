import React from 'react';

const MovieCard = ({ movie, openModal }) => {
  return (
    <>
      <div onClick={() => openModal(movie.title)}>
        <img src={movie.poster} alt={movie.title} />
        <h3 className='movie-title'>{movie.title}</h3>
      </div>
    </>
  );
};

export default MovieCard;
