import styled from 'styled-components';

export const HeaderContainer = styled.header`
  min-height: 5rem;
  background-color: var(--primary-dark-bg);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  padding: 0 2.4rem;
  font-size: 1.2rem;
  position: relative;
  @media screen and (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4.9rem;
    font-size: 1.4rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 5rem;
  }
`;
