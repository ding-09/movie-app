import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media screen and (min-width: 1200px) {
    justify-content: flex-start;
    gap: 2rem;
  }
`;
