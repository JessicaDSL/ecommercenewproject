import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    width: 92%;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0 1.6rem 0;
  }
  ${media.between("medium", "large")`
  h2 {
    width: 67%;
    font-size: x-large;
    font-weight: 500;
    margin: 2rem 0;
  }
  `}
  ${media.greaterThan("large")`
  h2 {
    width: 48%;
    font-size: x-large;
    font-weight: 500;
    margin: 2rem 0;
  }
  `}
`;

export const Background = styled.div`
  background: #1b1e32;
  width: 92%;
  border-radius: 7px;
  padding: 0.8rem;
  margin: 0 0 1.4rem 0;
  h3 {
    margin: 0.5rem 0 0.5rem 0;
    font-weight: 800;
  }

  ${media.between("small", "medium")`
    h3 {
      width: 92%;
  }
  `}
  ${media.between("medium", "large")`
  width: 65%;
  `}
  ${media.greaterThan("large")`
  width: 45%;
  h3 {
    width: 98%;
  }
  `}
`;

export const Product = styled.div`
  margin: 0 0 1rem 0;
  ${media.greaterThan("small")`
  display: flex;
  flex-wrap: wrap;
  `}
  ${media.greaterThan("large")`
  flex-direction: row;
  flex-wrap: nowrap;
  `}
`;

export const TotalValue = styled.div`
  margin: 2rem 0.5rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  width: 92%;
  span {
    font-size: small;
    font-weight: 300;
    color: #a1a2a9;
  }
  b {
    font-size: xx-large;
    display: flex;
    align-items: center;
  }
  svg {
    margin: 5% 0 0 0;
    font-size: xx-large;
  }
  div {
    span {
      font-size: small;
      font-weight: 300;
      color: #a1a2a9;
    }
  }
`;

export const PaymentSelected = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 0 0.5rem;
  padding: 0 0 1.5rem 0;
  border-bottom: 1px solid #3b3e50;
  width: 100%;
  svg {
    font-size: xx-large;
    color: #fd4370;
    margin: 0 0 0 1.5rem;
  }
  h4 {
    font-size: large;
    color: #e2e2e4;
    margin: 0.5rem 0 0 1.8rem;
  }
`;
export const CartItens = styled.div`
  width: 90%;
  margin: 2rem 0 0 1rem;
  h1 {
    margin: 0 0 0 3rem;
  }
  ${media.between("medium", "huge")`
    margin: 4rem 0;
  `}
  ${media.between("medium", "huge")`
    margin: 4rem 0;
  `}
  ${media.greaterThan("huge")`
  margin: 5rem 0;
  `}
`;

export const Button = styled.button`
  margin: 2rem 0 5rem;
  width: 92%;
  height: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  background: #fd4370;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${media.between("medium", "large")`
  width: 65%;
  `}
  ${media.greaterThan("large")`
  width: 45%;
  `}
`;
