import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  overflow: auto;
  z-index: 999999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4.8rem;
  min-height: 100vh;
  background-color: rgba(27, 27, 27, 0.99);
  color: var(--primary-white);
  svg {
    position: absolute;
    top: 2rem;
    right: 1.8rem;
    font-size: 1.6rem;
  }
`;

export const Figure = styled.figure`
  margin-bottom: 1.4rem;
  img {
    width: 30rem;
    max-height: 35rem;
  }
`;

export const MainInfo = styled.section`
  display: grid;
  margin: 1.4rem 0 1.6rem;
  grid-template-areas:
    'button button button'
    'line line line'
    'miscInfo miscInfo rating'
    'title title title';
  .movie-title {
    grid-area: title;
    padding: 0;
    margin-top: 1.4rem;
    font-size: 1.6rem;
  }
  .misc-info {
    grid-area: miscInfo;
    font-size: 1.1rem;
    opacity: 0.6;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.4rem;
      position: static;
    }
  }
  .rating {
    grid-area: rating;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.2rem;
    svg {
      position: relative;
      top: 0;
      left: 0;
      fill: #ffc700;
      font-size: 1.4rem;
    }
    .rated {
      padding-left: 0.4rem;
      padding-right: 0.3rem;
    }
    .total {
      opacity: 0.5;
    }
  }
  .btn {
    grid-area: button;
    padding: 0.5rem 0;
    border-radius: 0.2rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-white);
    svg {
      position: relative;
      top: 0;
      right: 0.7rem;
    }
  }
  .fav-btn {
    background-color: var(--secondary-red);
    fill: var(--primary-white);
    font-weight: 600;
  }
  .remove-btn {
    background-color: var(--primary-text);
  }
  .line {
    grid-area: line;
    height: 0.1rem;
    min-width: 100%;
    margin: 1.4rem 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const SubInfo = styled.section`
  .plot {
    margin-bottom: 2rem;
    line-height: 1.6;
    opacity: 0.6;
    font-size: 1.2rem;
  }
  .cast,
  .genre {
    font-size: 1.1rem;
    span {
      opacity: 0.6;
    }
  }
  .cast {
    margin-bottom: 1rem;
  }
`;
