import styled from "styled-components";
import media from "styled-media-query";

export const Background = styled.div`
  background: #1b1e32;
  width: 96%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  margin: 4% 0 0 2%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  height: 100%;
  button {
    background: none;
    border: none;
    height: 2px;
    color: #dd3c66;
  }
`;

export const Image = styled.div`
  margin: 0 0 0 0;
  img {
    width: 6rem;
    height: 6rem;
    border-radius: 7px;
  }
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
`;
