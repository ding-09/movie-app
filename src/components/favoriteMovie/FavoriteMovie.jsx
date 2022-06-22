import React from 'react';
import { Container, Figure, MovieInfo } from './style';
import blankImg from '../../assets/No-Image-Placeholder.svg.png';
import { IoIosHeart } from 'react-icons/io';

const FavoriteMovie = () => {
  return (
    <Container>
      <Figure>
        <img src={blankImg} alt='' />
      </Figure>
      <MovieInfo>
        <h3 className='movie-title'>Movie Name</h3>
        <div className='misc-info'>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </div>
        <p>
          <span>Cast:</span> Actor1, Actor2, Actor3
        </p>
        <button className='like-btn'>
          <IoIosHeart />
        </button>
      </MovieInfo>
    </Container>
  );
};

export default FavoriteMovie;
