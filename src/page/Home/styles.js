import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 92%;
  hr {
    border: 0;
    background: #cdcdcd;
    height: 1.8px;
  }
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    hr {
      width: 88%;
    }
  `}
`;

export const ImageLogin = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0 0 0;
  img {
    border-radius: 50px;
    width: 1.4rem;
    height: 1.4rem;
  }
  h1 {
    display: none;
  }
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    background: #f1f1f1;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 2rem 0;
    img {
    border-radius: 50px;
    width: 1.8rem;
    height: 1.8rem;
  }
    h1 {
      display: block;
      width: 86%;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 500;
    }
  `}
`;
