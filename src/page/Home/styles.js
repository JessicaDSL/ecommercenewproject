import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  width: 92%;
  margin: 0.7rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    border-radius: 50px;
    width: 1.8rem;
    height: 1.8rem;
  }
  h1 {
    display: none;
  }
  ${media.greaterThan("large")`
    width: 100%;
    display: flex;
    justify-content: center;
  align-items: center;
    background: #212133;
    margin: 0 0 5rem 0;
    height: 5rem;
    hr {
      width: 88%;
    }img {
    width: 2.5rem;
    height: 2.5rem;
  }
  h1 {
    display: block;
    width: 92%;
    text-align: center;
  }
  `}
`;
