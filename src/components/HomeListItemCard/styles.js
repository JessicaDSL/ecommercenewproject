import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 96%;
  margin: 1rem 0 3.2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
  img {
    border-radius: 4px;
  }
  h4 {
    color: #000;
    margin: 1.4rem 0;
  }
  h2 {
    margin: 1.5rem 0;
    color: #000;
  }
  ${media.greaterThan("large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width: 100%;
    margin: 1rem 0 0 0;
    img {
      width: 100%;
    }
    h4 {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
    h2 {
    margin: 1rem 0;
  }
  `}
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  width: 86%;
  color: #8d8d8d;
  button {
    background: none;
    border: none;
    color: #6b8067;
  }
`;
export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92%;
  flex: 1;
  padding: 0.8rem 0;
  color: white;
  font-weight: 700;
  font-size: medium;
  background: #6b8067;
  border: none;
  border-radius: 5px;
`;
