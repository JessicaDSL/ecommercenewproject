import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    width: 94%;
    font-weight: 500;
    margin: 0.8rem 0 1.8rem 0;
  }
  h6 {
    width: 94%;
    font-weight: 500;
    margin: 1.6rem 0;
    font-size: 1rem;
  }

  ${media.lessThan("medium")`
    h2 {
      display: none;
    }
    h6 {
      width: 94%;
      font-weight: 500;
      margin: 1.6rem 0;
      font-size: 1rem;
    }
    `}

  ${media.greaterThan("huge")`
    h2 {
      display: none;
    }
    h6 {
      width: 94%;
      font-weight: 500;
      margin: 2rem 0 4rem 0;
      font-size: large;
    }
    
    `}
`;

export const CartListProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.greaterThan("medium")`
  flex-direction: row;
  flex-wrap: wrap;
  `}
  ${media.greaterThan("huge")`
  margin: 4rem 0;
  justify-content: flex-start;
  align-items: center;
  `}
`;

export const CartItens = styled.div`
  width: 90%;
  margin: 2rem 0;
  ${media.between("medium", "huge")`
    margin: 4rem 0;
  `}
  ${media.greaterThan("huge")`
  margin: 5rem 0;
  `}
`;
