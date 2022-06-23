import styled from 'styled-components';

export const Container = styled.div`
  color: var(--primary-white);
  margin-bottom: 2.6rem;
  .movie-title {
    margin-top: 1rem;
    padding: 0 0.5rem;
  }

  /* CAROUSEL STYLES */
  .swiper-slide {
    text-align: center;
    max-width: 16.5rem;
    img {
      min-width: 100%;
      height: 20rem;
    }
    @media screen and (min-width: 480px) {
      max-width: 20rem;
      img {
        height: 30rem;
      }
    }
    @media screen and (min-width: 992px){
      max-width: 28rem;
      img {
        height: 35rem;
      }
    }
    /* @media screen and (min-width: 1200px) {
      max-width: 30rem;
      img {
        height: 40rem;
      }
    } */
  }
  .swiper-button-next,
  .swiper-button-prev {
    background-color: rgba(100, 100, 100, 0.8);
    color: var(--primary-white);
    border-radius: 0.2rem;
    &:after {
      font-size: 1.6rem;
    }
  }
  .swiper-button-next {
    right: 0.5rem;
  }
  .swiper-button-prev {
    left: 0.5rem;
  }
`;
