import styled from "styled-components";
import media from "styled-media-query";

export const Header = styled.header`
  width: 100%;
  background: #191b2a;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  margin: 0 0 0 0;
  border-bottom: 1px solid #1b1e32;
  box-shadow: 0px 2px 10px 0px rgba(50, 50, 50, 0.1);
  button {
    display: flex;
    background: #3e3d56;
    border: none;
    border-radius: 10px;
    padding: 0.2rem 0.8rem;
    margin: 0 0 0 0.6rem;
    color: #141628;
    font-size: medium;
    font-weight: 600;
    letter-spacing: 0.5px;
    svg {
      font-size: medium;
    }
  }
  ${media.greaterThan("huge")`
  height: 4.5rem;
    h2{
      display: flex;
      font-size: x-large;
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

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${media.between("medium", "large")`
  width: 70%;
  `}
  ${media.greaterThan("large")`
width: 50%;
svg {
      font-size: xxx-large;
    }
`}
`;

export const CartIcon = styled.div`
  display: flex;
  padding: 0 0.6rem 0 0;
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
