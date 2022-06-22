import styled from 'styled-components';

export const Modal = styled.section`
  background-color: var(--primary-dark-bg);
  position: absolute;
  top: 5rem;
  left: 0;
  z-index: 999;
  min-width: 100%;
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
    opacity: 0.8;
  }
`;
