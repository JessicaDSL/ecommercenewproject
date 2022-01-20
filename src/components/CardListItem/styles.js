import styled from "styled-components";
import media from "styled-media-query";

export const Background = styled.div`
  width: 94%;
  background: #1b1e32;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 2%;
  margin: 2% 0;
  ${media.between("medium", "large")`
  width: 45%;
  margin: 2%;
  `}
  ${media.between("large", "huge")`
  width: 30%;
  margin: 1%;
  `}
  ${media.greaterThan("huge")`
  width: 30%;
  margin: 1%;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  span {
    margin: 1rem 0;
    position: absolute;
    left: 90%;
    color: rgba(0, 0, 0, 0.3);
    font-size: smaller;
  }
  button {
    background: none;
    border: none;
    display: flex;
    color: #dd3c66;
    margin: 3% 0 0 0;
  }
  ${media.greaterThan("huge")`
  span {
    margin: 1rem 0;
    position: absolute;
    left: 90%;
    color: rgba(0, 0, 0, 0.3);
    font-size: normal;
    
  }
  `}
`;

export const Image = styled.div`
  margin: 3% 0 0 0;
  border-radius: 7px;
  width: 7rem;
  height: 8rem;
  position: relative;
  overflow: hidden;
  img {
    position: relative;
    bottom: 40%;
    right: 70%;
    width: 16rem;
    height: 16rem;
    text-align: center;
    vertical-align: middle;
  }
  ${media.greaterThan("huge")`
  width: 9rem;
  height: 11rem;
  `}
`;

export const Description = styled.div`
  margin: 0;
  width: 55%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  h5 {
    font-weight: normal;
  }
  h3 {
    margin: 0;
    font-weight: 500;
  }
  p {
    font-size: x-small;
    color: #3e3d56;
    font-weight: 600;
  }
  ${media.between("small", "medium")`
    h5 {
    font-size: medium;
  }
  h3 {
    font-size: large;
  }
  p {
    font-size: medium;
  }
  `}
  ${media.greaterThan("huge")`
    h5 {
    font-size: large;
  }
  h3 {
    font-size: x-large;
  }
  p {
    font-size: medium;
  }
  `}
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0 1.5rem 0 1rem;
  margin: 0.5rem 0;
  h4 {
    font-weight: 500;
    font-size: 0.8rem;
  }
  span {
    font-size: 0.7rem;
    position: relative;
    color: #3e3d56;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  strong {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
  ${media.greaterThan("huge")`
  h4 {
    font-size: x-large;
  }
  span {
    font-size: medium;
  }
  strong {
    font-size: xx-large;
  }
  `}
`;
