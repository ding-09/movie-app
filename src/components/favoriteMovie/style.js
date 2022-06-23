import styled from 'styled-components';

export const ItemContainer = styled.article`
  min-height: 10rem;
  display: flex;
  border-radius: 0.5rem;
  background-color: var(--secondary-text);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px 0px rgba(255, 255, 255, 0.1);
  margin-bottom: 1.2rem;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 49%;
  }
  @media screen and (min-width: 1200px) {
    min-height: 15rem;
  }
`;

export const Figure = styled.figure`
  position: relative;
  bottom: 0.4rem;
  left: 0.4rem;
  img {
    max-width: 7rem;
    min-height: 10rem;
    border-radius: 0.5rem;
    @media screen and (min-width: 768px) {
      max-width: 9rem;
      height: 12rem;
    }
    @media screen and (min-width: 1200px) {
      max-width: 13rem;
      height: 18rem;
    }
  }
`;

export const MovieInfo = styled.section`
  margin-left: 1.2rem;
  padding: 1.2rem 2.4rem 1.3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 65%;
  min-width: 65%;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
    margin-left: 2rem;
  }
  .fav-movie-title {
    font-size: 1.4rem;
    @media screen and (min-width: 768px) {
      font-size: 1.6rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 2rem;
    }
  }
  .misc-info {
    opacity: 0.6;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.5rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 1.4rem;
    }
  }
  .cast-info {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.1rem;
    span {
      opacity: 0.6;
    }
    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  border: none;
  background: none;
  svg {
    color: var(--primary-red);
    font-size: 1.6rem;
    @media screen and (min-width: 768px) {
      font-size: 1.8rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 2.4rem;
    }
  }
`;
