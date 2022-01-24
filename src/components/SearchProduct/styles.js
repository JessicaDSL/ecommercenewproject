import styled from "styled-components";
import media from "styled-media-query";

export const Form = styled.form`
  margin: 1.8rem 0 0 0;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  width: 90%;
  hr {
    border: 0;
    background: #232643;
    height: 1px;
  }
  ul {
    display: ${({ state }) => (state ? "flex" : "none")};
    background: #1b1e32;
    color: #fff;
    a {
      text-decoration: none;
      color: #585a6d;
      &:hover {
        color: #fff;
      }
    }
    li {
      width: 100%;
      border-bottom: 1px solid #585a6d;
      color: #fff;
      padding: 0.4rem 0;
      cursor: pointer;
      &:hover {
        background: #3e3d56;
        color: #fff;
      }
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: #4d4f5c;
      font-size: large;
      margin: 0 0.5rem;
      ${media.greaterThan("large")`
      margin: 0 0rem 0 4rem;
    `}
    }
  }
  input {
    border: none;
    height: 2.2rem;
    text-align: center;
    background: none;
    font-weight: 100;
    letter-spacing: 0.5px;
    font-size: 1.1rem;
    color: #4d4f5c;
    &::placeholder {
      width: 100%;
      font-weight: lighter;
      font-size: 1.1rem;
      color: #4d4f5c;
      ${media.between("450px", "1170px")`
      font-size: 1.25rem;
      `}
    }
  }
  ${media.greaterThan("large")`
    font-size: large;
    li {
      font-size: x-large;
    }
    input {
    font-size: xx-large;
    width: 94%;
    &::placeholder {
      font-size: xx-large;
    }
  }
  div {
    margin: 0 0 .5rem 0;
    svg {
      color: #8d91a3;
      margin: 0 0.5rem;
      font-size: xx-large;
      
  }
  `}
`;
