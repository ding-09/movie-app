import styled from 'styled-components';

export const Container = styled.article`
  border: 1px solid cyan;
  min-height: 10rem;
  display: flex;
`;

export const Figure = styled.figure`
  position: relative;
  border: 2px solid purple;
  bottom: 0.4rem;
  left: 0.4rem;
  img {
    max-width: 7rem;
    min-height: 10rem;
  }
`;

export const MovieInfo = styled.section`
  border: 1px solid orange;
  margin-left: 1.2rem;
`;
