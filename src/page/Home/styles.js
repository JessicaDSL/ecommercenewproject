import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  background: #191b2a;
  height: 3.5rem;
  margin: 0 0 1rem 0;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #1b1e32;
  box-shadow: 0px 2px 10px 0px rgba(50, 50, 50, 0.1);
  h1 {
    display: none;
  }
  h2 {
    color: #fff;
    font-size: x-large;
    margin: 0 1rem 0 0.7rem;
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
    }
  h1 {
    display: block;
    width: 92%;
    text-align: center;
  }
  h2 {
    display: none;
  }
  `}
`;

export const CartIcon = styled.div`
  display: flex;
  padding: 0 2rem 0 0;
  cursor: pointer;
  svg {
    font-size: x-large;
    color: #fb426f;
  }
  span {
    color: #fff;
    font-size: small;
    position: relative;
    border: 50%;
    font-weight: 600;
    top: 10px;
    left: 2px;
  }
`;
