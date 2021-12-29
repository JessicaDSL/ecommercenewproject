import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100%;
  margin: 2.8rem 0 0.3rem 0.5rem;
  display: flex;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.4);
  input {
    border: none;
    text-align: center;
    background: none;
    width: 70%;
    font-weight: 100;
    letter-spacing: 0.5px;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.1);
    &::placeholder {
      font-weight: lighter;
      font-size: 1.1rem;
      color: rgba(0, 0, 0, 0.2);
    }
    ${media.greaterThan("large")`
    width: 100%;
    font-size: 1.2rem;
    `}
  }
  svg {
    margin: 0 1.5rem 0 1rem;
    ${media.greaterThan("large")`
    margin: 0 0rem 0 4rem;
    `}
  }
`;
