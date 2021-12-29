import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  width: 96%;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-weight: 500;
    margin: 0 0 1rem 0;
  }
  h3 {
    font-weight: 500;
    font-size: 1rem;
  }

  ${media.greaterThan("medium")`
h2 {
  display: none;
}
  `}
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0.5rem 0 1rem 0;
  img {
    border-radius: 80%;
    width: 1.6rem;
    height: 1.5rem;
  }
  button {
    display: flex;
    background: rgba(0, 0, 0, 0.05);
    border: none;
    border-radius: 10px;
    padding: 0.2rem 0.8rem;

    font-size: medium;
  }
  span {
    font-weight: bolder;
    margin: 0 0 0 0.2rem;
  }
`;

export const ProductInfo = styled.div``;
