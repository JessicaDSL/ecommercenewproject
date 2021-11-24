import styled from "styled-components";

export const Background = styled.div`
  width: 94%;
  margin: 0.5rem 0 0.8rem 0;
  background: rgba(245, 245, 245, 255);
  padding: 0.4rem 0;
  border-radius: 7px;
  display: flex;
  align-items: center;
  color: #727272;
  span {
    margin: 0 1rem 0 1rem;
  }
`;

export const Input = styled.input`
  border: none;
  background: none;
  color: #727272;
  &::placeholder {
    color: #727272;
    font-family: "M PLUS Rounded 1c", sans-serif;
  }
`;
