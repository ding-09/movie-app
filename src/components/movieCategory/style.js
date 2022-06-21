import styled from 'styled-components';

export const Container = styled.div`
  color: var(--primary-white);
  margin-bottom: 2.4rem;
  .category-heading {
    font-size: 1.6rem;
  }
  .movie-title {
    font-size: 1.2rem;
    margin-top: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* CAROUSEL STYLES */
  .swiper-container {
    margin-top: 1.4rem;
  }
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
