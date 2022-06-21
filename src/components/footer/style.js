import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--primary-dark-bg);
  margin-top: auto;
  min-width: 100%;
  padding: 3.2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: center;
  color: var(--primary-white);
`;

export const SocialIconsGroup = styled.ul`
  display: flex;
  gap: 1.2rem;
  li a svg {
    font-size: 1.6rem;
    display: flex;
  }
`;

export const Copyright = styled.p`
  opacity: 0.6;
`
