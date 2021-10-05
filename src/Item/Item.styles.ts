import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 2px solid #C8C2BC;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
    border-top: 1px solid #C8C2BC;
    color: #CD113B;
    font-weight: 700;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
