import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--primary-dark-bg);
  color: var(--primary-white);
  position: absolute;
  bottom: 0;
  min-width: 100%;
  padding: 3.2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
`;

export const SocialIconsGroup = styled.ul`
  display: flex;
  gap: 1.2rem;
  li a svg {
    font-size: 1.6rem;
    display: flex;
    @media screen and (min-width: 768px) {
      font-size: 2.2rem;
    }
  }
`;

export const Copyright = styled.p`
  opacity: 0.6;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
