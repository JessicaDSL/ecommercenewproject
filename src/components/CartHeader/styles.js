import styled from "styled-components";
import media from "styled-media-query";

export const Header = styled.header`
  width: 94%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 1.5rem 0;
  img {
    border-radius: 80%;
    width: 1.7rem;
    height: 1.7rem;
  }
  button {
    display: flex;
    background: #3e3d56;
    border: none;
    border-radius: 10px;
    padding: 0.3rem 1rem;
    color: #fff;
    font-size: medium;
    font-weight: 600;
    letter-spacing: 0.5px;
    span {
      padding: 0 0 0 0.3rem;
    }
  }
  ${media.greaterThan("huge")`
    h2{
      display: flex;
      font-size: x-large;
    }
    img {
    border-radius: 80%;
    width: 3rem;
    height: 3rem;
  }
  button {
    padding: 0.6rem 1rem;
    font-size: x-large;
    font-weight: 600;
    letter-spacing: 0.5px;
    span {
      padding: 0 0 0 0.3rem;
    }
  }
  `}
`;
