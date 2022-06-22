import styled from 'styled-components';

export const Container = styled.div`
  color: var(--primary-white);
  margin-bottom: 2.6rem;
  .movie-title {
    margin-top: 0.8rem;
  }

  /* CAROUSEL STYLES */
  .swiper-slide {
    text-align: center;
  }
  .swiper-button-next,
  .swiper-button-prev {
    background-color: rgba(0, 0, 0, 0.2);
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
