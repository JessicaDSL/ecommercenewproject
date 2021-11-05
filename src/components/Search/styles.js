import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 2.8rem 0 0.3rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.4);
  input {
    border: none;
    background: none;
    width: 70%;
    font-weight: 100;
    letter-spacing: 0.5px;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.1);
    &::placeholder {
      font-weight: lighter;
      font-size: 1.2rem;
      color: rgba(0, 0, 0, 0.2);
    }
  }
  span {
    margin: 0 1.5rem 0 0;
  }
`;
