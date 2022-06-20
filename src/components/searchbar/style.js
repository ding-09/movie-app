import styled from 'styled-components';

export const Form = styled.form`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const InputGroup = styled.div`
  position: relative;
  input {
    background: transparent;
    color: var(--primary-white);
    border: none;
    height: 5rem;
    min-width: 100%;
    padding-left: 1.2rem;
  }
  svg {
    position: absolute;
    right: 1.2rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;
