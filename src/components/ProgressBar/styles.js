import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: none;
  width: 40%;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  margin: 2rem 0;
  h1 {
    display: none;
  }
  hr {
    width: 58%;
    height: 1px;
    position: absolute;
    top: 13.5%;
    right: 21%;
    background: #e8e8e8;
    border: none;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    width: 30%;
  }
  img {
    width: 0.9rem;
    border-top-width: medium;
  }
  ${media.greaterThan("medium")`
    display: flex;
    height: 3rem;
    width: 100%;
  `}
`;
