import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  header {
    width: 100%;
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 15rem;
    border-radius: 10px 10px 0 0;
  }
`;

export const InfoProduct = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0 0 1rem 0;
  }
  h4 {
    font-weight: 300;
    color: #898d9f;
  }
  h3 {
    font-size: x-large;
    color: #fff;
    font-weight: 400;
    margin: 0 0 1rem 0;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  padding: 0.8rem 0;
  color: white;
  font-weight: 700;
  font-size: medium;
  background: #fd4370;
  border: none;
  border-radius: 0px 0px 5px 5px;
  margin: 1rem 0;
`;

export const Select = styled.select`
  background: none;
  border-radius: 10px;
  height: 1.8rem;
  width: 4rem;
  padding: 0 0.2rem;
  color: #fff;
  margin: 0 0.6rem;
  border: 1px solid #1b1e32;
  font-size: 1rem;
  option {
    color: #fff;
    background: #1b1e32;
    &:focus {
      background: #8d8d8d;
    }
  }
  ${media.greaterThan("huge")`
  font-size: large;
  width: 5rem;
  `}
`;
export const Content = styled.div`
  width: 90%;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.between("medium", "large")`
  margin: 3rem;
  width: 40%;
  `}

  ${media.greaterThan("large")`
  margin: 4rem;
  width: 19%;
  `}
`;
