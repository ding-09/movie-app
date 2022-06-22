import React, { useState } from 'react';
import {} from './style';
import Carousel from '../carousel';

// import required Swiper modules and styles
import { SwiperSlide } from 'swiper/react';

import blankImg from '../../assets/No-Image-Placeholder.svg.png';

import { Container } from './style';

const MovieCategory = ({ category }) => {
  return (
    <Container>
      <h2 className='sub-heading'>{category.heading}</h2>
      <Carousel>
        {category.movies.map((movie, idx) => (
          <SwiperSlide key={idx}>
            <img src={blankImg} alt={movie} />
            <h3 className='movie-title'>{movie}</h3>
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
