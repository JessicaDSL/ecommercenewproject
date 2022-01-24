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
    color: #fbfbfb;
  }
  h6 {
    width: 94%;
    font-weight: 500;
    margin: 1.6rem 0;
    color: #fbfbfb;
    font-size: 1rem;
  }
  header {
    width: 100%;
  }

  ${media.between("medium", "large")`
    h2 {
      width: 55%;
      margin: 2rem 0 0 0;
    }
    h6 {
      width: 55%;
      font-weight: 500;
      margin: 2rem 0;
      font-size: large;
    }
    `}

  ${media.greaterThan("large")`
    h2 {
      width: 49%;
      margin: 4rem 0 0 0;
    }
    h6 {
      width: 50%;
      font-weight: 500;
      margin: 2rem 0 5rem 0;
      font-size: x-large;
    }
    header {
    width: 100%;
  }
    `}
`;

export const CartListProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.greaterThan("huge")`
  width: 50%;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 0;
  `}
`;

export const CartItens = styled.div`
  width: 80%;
  margin: 2rem 0;
  color: #fecad7;

  ${media.greaterThan("medium")`
  margin: 2.5rem 0;
  width: 45%;
  h1 {
    width: 100%;
  }
  `}
`;
