import styled from "styled-components";
import media from "styled-media-query";

export const Background = styled.div`
  width: 100%;
  display: flex;
  margin: 0.5rem 0;
  ${media.between("medium", "huge")`
  width: 50%;
  `}
  ${media.greaterThan("huge")`
  width: 100%;
  `}
`;

export const Container = styled.div`
  margin: 0% 0 2% 2%;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-content: space-around;
  height: 100%;
  border-radius: 10px;
  padding: 0.2rem;
  background: #21243c;
  button {
    background: none;
    border: none;
    height: 2px;
    color: #dd3c66;
  }
  ${media.between("medium", "huge")`
  margin: 0.5rem;
  width: 100%;
  `}
  ${media.greaterThan("huge")`
  width: 100%;
  `}
`;

export const Image = styled.div`
  margin: 0.5rem 0 0 0;
  img {
    width: 6rem;
    height: 6rem;
    border-radius: 7px;
  }
  ${media.between("small", "huge")`
  img {
    width: 5rem;
    height: 5rem;
  }
  `}
  ${media.greaterThan("huge")`
  img {
    width: 7rem;
    height: 7rem;
  }
  `}
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 2%;
  margin: 0 0 2% 3%;
  div {
    display: flex;
    width: 100%;
    h2 {
      margin: 0;
      font-size: medium;
      width: 100%;
      color: #e2e2e4;
    }
    p {
      font-size: small;
      width: 100%;
      color: #a1a2a9;
    }
  }
  ${media.between("500px", "medium")`
  margin: 0 0 0 .2rem;
    div {
      h2 {
      font-size: small;
    }
    p {
      font-size: x-small;
    }
    }
  `}
  ${media.between("medium", "large")`
    padding: 0 0 0 2%;
    margin: 0 0 0 .2rem;
    div {
      h2 {
      font-size: medium;
    }
    p {
      font-size: small;
    }
    }
  `}
  ${media.greaterThan("large")`
  div {
      h2 {
      font-size: large;
    }
    p {
      font-size: medium;
    }
    }
  
  `}
  `;
