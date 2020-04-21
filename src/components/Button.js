import styled from 'styled-components';
export const ButtonContainer = styled.button`
  text-transaform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: var(--lightBlue);
  border-radius: 0.5rem;
  curson: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
