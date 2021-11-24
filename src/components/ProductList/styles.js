import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
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

export const Search = styled.div`
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

export const List = styled.div`
  ${media.greaterThan("large")`
    display: flex;
    justify-content: center;
    width: 86%;
    flex-wrap: wrap;
  `}
`;

export const ListItem = styled.div`
  ${media.greaterThan("large")`
    display: flex;
    margin: 2.1rem;
    width: 25%;
  `}
`;
