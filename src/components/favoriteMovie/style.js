import styled from 'styled-components';

export const Container = styled.article`
  min-height: 10rem;
  display: flex;
  border-radius: 0.5rem;
  background-color: #121212;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px 0px rgba(255, 255, 255, 0.1);
`;

export const Figure = styled.figure`
  position: relative;
  bottom: 0.4rem;
  left: 0.4rem;
  img {
    max-width: 7rem;
    min-height: 10rem;
    border-radius: 0.5rem;
  }
`;

export const MovieInfo = styled.section`
  margin-left: 1.2rem;
  padding: 1.2rem 2.4rem 1.3rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .misc-info {
    opacity: 0.8;
  }
  .cast-info {
    span {
      opacity: 0.6;
    }
  }
  .like-btn {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    border: none;
    background: none;
    svg {
      color: var(--primary-red);
      font-size: 1.6rem;
    }
  }
`;
