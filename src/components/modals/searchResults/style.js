import styled from 'styled-components';

export const Modal = styled.section`
  background-color: var(--primary-dark-bg);
  position: absolute;
  top: 5rem;
  left: 0;
  z-index: 999;
  min-width: 100%;
  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
    color: var(--secondary-red);
    font-size: 2rem;
  }
`;

export const ListItemContainer = styled.article`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  padding: 1.2rem;
`;

export const Figure = styled.figure`
  max-width: 5rem;
  max-height: 7rem;
  margin-right: 1rem;
  @media screen and (min-width: 768px) {
    max-width: 7rem;
    max-height: 10rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const MovieInfoContainer = styled.div`
  color: var(--primary-white);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h1 {
    max-width: 27rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.2rem;
  }
  .year {
    opacity: 0.8;
    font-size: 1.2rem;
  }
  .type {
    text-transform: capitalize;
    font-size: 1.2rem;
    opacity: 0.6;
  }

  @media screen and (min-width: 768px) {
    justify-content: space-around;
    h1 {
      font-size: 1.6rem;
    }
    .year {
      font-size: 1.5rem;
    }
    .type {
      font-size: 1.4rem;
    }
  }
`;
