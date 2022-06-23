import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalContainer = styled(motion.div)`
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
    cursor: pointer;

    position: absolute;
    top: 2rem;
    right: 1.8rem;
    font-size: 1.6rem;
    @media screen and (min-width: 768px) {
      font-size: 2rem;
      top: 3rem;
      right: 3.5rem;
    }
    @media screen and (min-width: 992px) {
      font-size: 2rem;
      top: 3rem;
      right: 4rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 2rem;
      top: 5rem;
      right: 8rem;
    }
  }

  @media screen and (min-width: 480px) {
    padding: 5rem 10rem;
  }

  @media screen and (min-width: 768px) {
    padding: 8rem 10rem;
    display: grid;
    grid-template-areas:
      'mainInfo mainInfo'
      'poster subInfo';
  }

  @media screen and (min-width: 992px) {
    padding: 10rem 14rem;
  }
`;

export const Figure = styled.figure`
  grid-area: poster;
  margin-bottom: 1.4rem;
  img {
    width: 30rem;
    max-height: 35rem;
    @media screen and (min-width: 400px) {
      width: 100%;
    }
    @media screen and (min-width: 768px) {
      width: 35rem;
      max-height: 45rem;
    }
  }
  @media screen and (min-width: 768px) {
    margin-right: 3.2rem;
  }
`;

export const MainInfo = styled.section`
  grid-area: mainInfo;
  display: grid;
  margin: 1.4rem 0 1.6rem;
  grid-template-areas:
    'button button button'
    'line line line'
    'miscInfo miscInfo rating'
    'title title title';
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    grid-template-columns: 2fr 1fr 1fr 2fr;
    grid-template-areas:
      'title title title button'
      'miscInfo miscInfo . rating'
      'line line line line';
    column-gap: 1rem;
    margin-bottom: 0;
  }
  @media screen and (min-width: 880px) {
    row-gap: 2rem;
    margin-bottom: 1rem;
    column-gap: 4rem;
  }
  @media screen and (min-width: 880px) {
    column-gap: 10rem;
  }
  .movie-title {
    grid-area: title;
    padding: 0;
    margin-top: 1.4rem;
    font-size: 1.6rem;
    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }
    @media screen and (min-width: 880px) {
      margin-top: 0;
    }
    @media screen and (min-width: 1200px) {
      font-size: 2.8rem;
    }
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
    @media screen and (min-width: 768px) {
      font-size: 1.4rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 1.6rem;
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

    @media screen and (min-width: 768px) {
      justify-self: end;
      font-size: 1.4rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 1.6rem;
    }
  }
  .btn {
    grid-area: button;
    padding: 0.5rem 0.5rem;
    border-radius: 0.2rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-white);
    cursor: pointer;
    svg {
      position: relative;
      top: 0;
      right: 0.7rem;
    }
    @media screen and (min-width: 768px) {
      height: 3rem;
      align-self: center;
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
    @media screen and (min-width: 768px) {
      margin: 1.2rem 0 1rem;
    }
    @media screen and (min-width: 1200px) {
      margin: 0 0 2rem;
    }
  }
`;

export const SubInfo = styled.section`
  grid-area: subInfo;
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

  @media screen and (min-width: 768px) {
    .plot {
      font-size: 1.6rem;
    }
    .cast,
    .genre {
      font-size: 1.4rem;
    }
  }
  @media screen and (min-width: 1200px) {
    max-width: 80%;
    .plot {
      font-size: 1.8rem;
    }
    .cast,
    .genre {
      font-size: 1.6rem;
    }
  }
`;
