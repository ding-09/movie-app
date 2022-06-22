import React from 'react';
import MovieCard from '../movieCard';
import { Container } from './style';
import Carousel from '../carousel';
import useMovieModal from '../../hooks/useMovieModal';
import MovieDetailsModal from '../modals/movieDetails';

// import required Swiper modules and styles
import { SwiperSlide } from 'swiper/react';

const MovieCategory = ({ category }) => {
  const [movieData, showModal, openModal, closeModal] = useMovieModal();
  return (
    <Container>
      {showModal && (
        <MovieDetailsModal movieData={movieData} closeModal={closeModal} />
      )}
      <h2 className='sub-heading'>{category.heading}</h2>
      <Carousel>
        {category.movies.map((movie, idx) => (
          <SwiperSlide key={idx}>
            <MovieCard movie={movie} openModal={openModal} />
          </SwiperSlide>
        ))}
      </Carousel>
    </Container>
  );
};

export default MovieCategory;

// fetch(url+name)
// detailed movie info - {}
// where to store it?
